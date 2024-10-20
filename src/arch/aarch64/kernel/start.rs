use core::arch::asm;

use hermit_entry::boot_info::{BootInfo, RawBootInfo};
use hermit_entry::Entry;

use crate::arch::aarch64::kernel::scheduler::TaskStacks;
use crate::arch::aarch64::kernel::{BOOT_INFO, RAW_BOOT_INFO};
use crate::KERNEL_STACK_SIZE;

extern "C" {
	static vector_table: u8;
}

/// Entrypoint - Initialize Stack pointer and Exception Table
#[no_mangle]
#[naked]
pub unsafe extern "C" fn _start(boot_info: Option<&'static RawBootInfo>, cpu_id: u32) -> ! {
	// validate signatures
	// `_Start` is compatible to `Entry`
	{
		unsafe extern "C" fn _entry(_boot_info: &'static RawBootInfo, _cpu_id: u32) -> ! {
			unreachable!()
		}
		pub type _Start =
			unsafe extern "C" fn(boot_info: Option<&'static RawBootInfo>, cpu_id: u32) -> !;
		const _ENTRY: Entry = _entry;
		const _START: _Start = _start;
		const _PRE_INIT: _Start = pre_init;
	}

	unsafe {
		asm!(
			"msr spsel, {l1}", // we want to use sp_el1
			"adrp x8, {current_stack_address}",
			"mov x4, sp",
			"str x4, [x8, #:lo12:{current_stack_address}]",

			// Add stack top offset
			"mov x8, {stack_top_offset}",
			"add sp, sp, x8",

			// Jump to Rust code
			"b {pre_init}",

			l1 = const 1,
			stack_top_offset = const KERNEL_STACK_SIZE - TaskStacks::MARKER_SIZE,
			current_stack_address = sym super::CURRENT_STACK_ADDRESS,
			pre_init = sym pre_init,
			options(noreturn),
		)
	}
}

#[inline(never)]
#[no_mangle]
unsafe extern "C" fn pre_init(boot_info: Option<&'static RawBootInfo>, cpu_id: u32) -> ! {
	// set exception table
	unsafe {
		asm!(
			"adrp x4, {vector_table}",
			"add  x4, x4, #:lo12:{vector_table}",
			"msr vbar_el1, x4",
			vector_table = sym vector_table,
			out("x4") _,
			options(nostack),
		);

		// Memory barrier
		asm!("dsb sy", options(nostack),);
	}

	if cpu_id == 0 {
		unsafe {
			RAW_BOOT_INFO = boot_info;
			BOOT_INFO = Some(BootInfo::from(*boot_info.unwrap()));
		}
		crate::boot_processor_main()
	} else {
		#[cfg(not(feature = "smp"))]
		{
			error!("SMP support deactivated");
			loop {
				crate::arch::processor::halt()
			}
		}
		#[cfg(feature = "smp")]
		crate::application_processor_main()
	}
}
