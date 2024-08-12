//! See <https://github.com/matklad/cargo-xtask/>.

mod arch;
mod archive;
mod artifact;
mod binutil;
mod build;
mod cargo_build;
mod ci;
mod clippy;
mod doc;

use std::env;
use std::path::{Path, PathBuf};
use std::process::Command;

use anyhow::Result;
pub(crate) use binutil::binutil;
use clap::Parser;
use xshell::Shell;

#[derive(Parser)]
enum Cli {
	Build(build::Build),
	#[command(subcommand)]
	Ci(ci::Ci),
	Clippy(clippy::Clippy),
	Doc(doc::Doc),
}

impl Cli {
	fn run(self) -> Result<()> {
		match self {
			Self::Build(build) => build.run(),
			Self::Ci(ci) => ci.run(),
			Self::Clippy(clippy) => clippy.run(),
			Self::Doc(doc) => doc.run(),
		}
	}
}

fn main() -> Result<()> {
	let cli = Cli::parse();
	cli.run()
}

pub fn sh() -> Result<Shell> {
	let sh = Shell::new()?;
	sh.change_dir(project_root());
	Ok(sh)
}

pub fn project_root() -> &'static Path {
	Path::new(env!("CARGO_MANIFEST_DIR")).parent().unwrap()
}

pub fn cargo() -> Command {
	sanitize("cargo")
}

fn sanitize(cmd: &str) -> Command {
	let cmd = {
		let exe = format!("{cmd}{}", env::consts::EXE_SUFFIX);
		// On windows, the userspace toolchain ends up in front of the rustup proxy in $PATH.
		// To reach the rustup proxy nonetheless, we explicitly query $CARGO_HOME.
		let mut cargo_home = PathBuf::from(env::var_os("CARGO_HOME").unwrap());
		cargo_home.push("bin");
		cargo_home.push(&exe);
		if cargo_home.exists() {
			cargo_home
		} else {
			PathBuf::from(exe)
		}
	};

	let mut cmd = Command::new(cmd);

	// Remove rust-toolchain-specific environment variables from kernel cargo
	cmd.env_remove("LD_LIBRARY_PATH");
	env::vars()
		.filter(|(key, _value)| {
			key.starts_with("CARGO") && !key.starts_with("CARGO_HOME")
				|| key.starts_with("RUST") && !key.starts_with("RUSTUP_HOME")
		})
		.for_each(|(key, _value)| {
			cmd.env_remove(&key);
		});

	cmd
}
