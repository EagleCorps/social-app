# EagleCorps Social App

A webapp for alumni networking.

## Pre-Installation (OS Packages)

### Required

- `git`
- `docker`
  - If you are on MacOS and do not have admin privileges, you can still use
    `docker` by performing the following steps:
    1. Download the DMG
    1. Open it
    1. Open the `Docker.app` file
    1. Use the advanced settings and de-select any options that indicate that an
       admin password is required
- `npm`
- (Windows-only) `wsl`

### Optional

These packages are used for convenience scripts, including the initial setup
script. Even if you know what you are doing, it is still much simpler to use the
scripts, so even though these are technically optional, they should be
considered required for all intents and purposes unless you have a very specific
reason to not install these packages.

Most of these should be pre-installed by your operating system, with a couple
exceptions depending on your OS.

- `zsh`
  - In WSL (Windows), `bash` is the default; `zsh` needs to be installed for
    scripts to work
  - Some Linux distributions (e.g. Ubuntu) use `bash` by default and `zsh` must
    be installed separately
- `openssl`
- `grep`
- `sed`
  - MacOS users must install `gnu-sed` (`homebrew` is recommended to install
    it: `brew install gnu-sed`)
  - If you do not have admin privileges, you can install `homebrew` manually to
    a directory to which you have access and add that (and its `bin` folder) to
    your path

## Installation and Setup

### Required

Run the following commands to get started.

1. Clone both this repo and the API repo via SSH:
   1. Change directory to the desired code location: `cd <desired location, e.g.
~/code>`
   1. Clone: `git clone <this repo's url> && git clone <API repo's url>`
   1. Change directory to this repo's location: `cd ./social-app`
1. Install the app's development dependencies: `npm install`
1. Set the environment variables:
   1. Generate the initial environment variables: `./scripts/gen-initial-env`
   1. Open the newly-generated `.env.local` file in your code editor
   1. Get the Google OAuth client ID and secret
      - Details can be found at:
        https://authjs.dev/reference/core/providers/google#notes
   1. Add those as the values for `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET`,
      respectively
1. Install and run [`docker`](https://docs.docker.com/get-docker/)
   - If you're on Linux, install via your package manager

### Optional

1. Add the relative path `./scripts` to your `$PATH` environment variable
   - An exact command is not given because this carries some security risk: if
     you download a malicious folder and run commands therein, it could run
     anything as your user; if you do choose to do this, ensure that `./scripts`
     does not take precedence over system packages in your `PATH` (i.e. add it
     to the end)
   - If `./scripts` is in your path, you do not have to prepend any of the
     following commands with `./scripts/` (e.g. you could just run `build`)

## Development

- Ensure docker is running
- Build and start the project with `./scripts/build`
  - The first time, this will take about 10 minutes; subsequent runs should be
    much faster
  - Navigate to http://localhost:3000 to use the app
    - The page will take about a minute to load the first time
- Stop the project with `./scripts/stop`
- When new packages are installed (with `npm i <package name>`), be sure to run
  `./scripts/rebuild`
- Run `./scripts/app-logs` to get an output of the logs (`rebuild` will run this
  upon completion automatically)
- Run `docker compose` commands by substituting the `docker compose` prefix with
  `./scripts/dcom <command>` (e.g. `./scripts/dcom restart app`)

  - This will ensure that the proper `docker-compose.yml` file is
    used.

- You can generate new components (and associated directories/files) with
  `./scripts/gen-component <ComponentName>`
- You can generate a new JWT signing key (which is used to authenticate between
  the server-side functions of the app and the Hasura API) with
  `./scripts/rotate-jwt-keys`

  - Because a previously-generated key should already be in the cache, Hasura
    should be able to use it immediately, despite the endpoint not being
    immediately updated
  - For extra security, in case there is a concern that the `UPCOMING` key was
    compromised as well, the following operations can be performed to rotate both
    without any downtime

    1. Rotate the keys the first time: `./scripts/rotate-jwt-keys`
    1. Deploy the changes
    1. Wait for the cache to expire (at the time of writing, this is set to 300
       seconds)
    1. Rotate the keys again
    1. Deploy the new keys again

## Troubleshooting

- If you get the following error, ensure GraphQL generation is working
  - `typescript: Argument of type 'unknown' is not assignable to parameter of type DocumentNode | TypedDocumentNode<any, OperationVariables>'. [2345]`
  - If it is stopped, running `./scripts/dcom restart app` should fix it
  - Otherwise, you probably have an error in your query; check the app logs by
    running `./scripts/app-logs` to see details
