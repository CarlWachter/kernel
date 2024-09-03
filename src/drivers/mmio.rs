#[cfg(any(feature = "tcp", feature = "udp"))]
use alloc::collections::VecDeque;

use ahash::RandomState;
use hashbrown::HashMap;

#[cfg(any(feature = "tcp", feature = "udp"))]
pub(crate) use crate::arch::kernel::mmio::get_network_driver;
#[cfg(any(feature = "tcp", feature = "udp"))]
use crate::drivers::net::NetworkDriver;
#[cfg(any(feature = "tcp", feature = "udp"))]
use crate::drivers::Driver;
use crate::drivers::{InterruptHandlerQueue, InterruptLine};

pub(crate) fn get_interrupt_handlers() -> HashMap<InterruptLine, InterruptHandlerQueue, RandomState>
{
	#[allow(unused_mut)]
	let mut handlers: HashMap<InterruptLine, InterruptHandlerQueue, RandomState> =
		HashMap::with_hasher(RandomState::with_seeds(0, 0, 0, 0));

	#[cfg(any(feature = "tcp", feature = "udp"))]
	if let Some(drv) = get_network_driver() {
		fn network_handler() {
			if let Some(driver) = get_network_driver() {
				driver.lock().handle_interrupt();
			}
		}

		let irq_number = drv.lock().get_interrupt_number();

		if let Some(map) = handlers.get_mut(&irq_number) {
			map.push_back(network_handler);
		} else {
			let mut map: InterruptHandlerQueue = VecDeque::new();
			map.push_back(network_handler);
			handlers.insert(irq_number, map);
		}
	}

	handlers
}
