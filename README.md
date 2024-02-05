# EagleCorps Social App

This is a NextJS app where users can interact with alumni.

## Pre-Installation

### Required Packages

- `git`
- `docker`
  - If you are on MacOS and do not have admin privileges, you can still use
    `docker` by downloading the DMG, opening it, and opening the `Docker.app`
    file. Then use the advanced settings and de-select any options that indicate
    that an admin password is required.
- `npm`

### Optional Packages

These are used for convenience scripts, including the initial setup script. Even
if you know what you are doing, it is still much simpler to use the scripts, so
even though this is technically optional, it should be considered required for
all intents and purposes unless you have a very specific reason to not install
these packages.

Most of these should be pre-installed by your operating system, with one
exception for MacOS.

- `zsh`
- `openssl`
- `grep`
- `sed`
  - MacOS users must install `gnu-sed` (`homebrew` is recommended to install
    it).
  - If you do not have admin privileges, you can install `homebrew` manually to
    a directory to which you have access and add that (and its `bin` folder) to
    your path.

### Installation and Setup

Run the following commands to get started.

1. Clone both this repo and the API repo via SSH:
   - Change directory to the desired code location: `cd <desired location, e.g.
~/code>`
   - `git clone <this repo's url> && git clone <API repo's url>`
1. Install the development dependencies: `npm install`
1. Generate the initial environment variables: `./scripts/gen-initial-env`

Optional steps:

1. Add `./scripts` to your `$PATH` environment variable.

- An exact command is not given because this carries some security risk,
  because if you download a malicious folder and run commands from it, it can
  run anything as your user.
- If `./scripts` is in your path, you do not have to prepend any commands with
  `./scripts/`.

### Development

Build and start the project with `./scripts/build`.

Stop the project with `./scripts/stop`.

When new packages are installed (with `npm i <package name>`), be sure to run
`./scripts/rebuild`.

Run `./scripts/app-logs` to get an output of the logs (`rebuild` will run this
upon completion automatically).

Run `docker compose` commands by substituting the `docker compose` prefix with
`./scripts/dcom`. This will ensure that the proper `docker-compose.yml` file is
used.

You can generate new components (with other associated directories/files) with
`./scripts/gen-component <ComponentName>`.

You can generate a new JWT signing key with `./scripts/rotate-jwt-keys`. Because
the new key should already be in the cache, Hasura should be able to use it
immediately, despite the endpoint not being immediately updated. For extra
security, in case there is a concern that the "UPCOMING" key was compromised as
well, the following operations can be performed to rotate both without any downtime.

1. Rotate the keys the first time: `./scripts/rotate-jwt-keys`
1. Deploy the changes
1. Wait for the cache to expire (at the time of writing, this is set to 300
   seconds)
1. Rotate the keys again
1. Deploy the new keys again

## Troubleshooting

- If you get the following error, ensure graphql generation is working
  - `typescript: Argument of type 'unknown' is not assignable to parameter of type DocumentNode | TypedDocumentNode<any, OperationVariables>'. [2345]`
  - If it is stopped, running `./scripts/dcom restart app` should fix it
  - Otherwise, you probably have an error in your query; check the app logs by
    running `./scripts/app-logs` to see details
