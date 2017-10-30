// Copyright (c) 2017 Stefan Lankes, RWTH Aachen University
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/*
 * First version is derived and adapted for HermitCore from
 * Philipp Oppermann's excellent series of blog posts (http://blog.phil-opp.com/)
 * and Eric Kidd's toy OS (https://github.com/emk/toyos-rs).
 */

#![feature(asm, attr_literals, const_fn, lang_items, repr_align, specialization)]
#![no_std]

#[macro_use]
extern crate bitflags;

#[macro_use]
extern crate lazy_static;

extern crate spin;
extern crate x86;
extern crate raw_cpuid;

// These need to be visible to the linker, so we need to export them.
pub use runtime_glue::*;
pub use logging::*;
pub use consts::*;

#[cfg(target_arch="x86_64")]
pub use arch::gdt::*;
pub use arch::idt::*;
pub use arch::mm::paging::*;

#[macro_use]
mod macros;

#[macro_use]
mod logging;


mod arch;
mod console;
mod consts;
mod runtime_glue;
mod synch;

const VERSION: &'static str = env!("CARGO_PKG_VERSION");

#[no_mangle]
pub extern "C" fn rust_init() {
	info!("HermitCore's Rust runtime! v{}", VERSION);
}

#[no_mangle]
pub extern "C" fn rust_main() {
	arch::processor::cpu_detection();
}
