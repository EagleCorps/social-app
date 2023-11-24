# EagleCorps Social App

This is a nextjs app where users can interact with alumni.

## Pre-Installation

### Required Packages

- `docker`

### Optional Packages

These are used for convenience scripts, including the initial setup script. Even
if you know what you are doing, it is still much simpler to use the scripts.

- `zsh`
- `openssl`
- `sed`
- `grep`

### Installation and Setup

Run the following commands to get started.

1. Clone this repo and the API repo with SSH:
   - Change directory to the desired code location: `cd <desired location, e.g.
~/code>`
   - `git clone <this repo's url> && git clone <api repo url>`
1. Install the development dependencies: `npm i`
1. Generate the initial environment variables: `./scripts/gen-initial-env`

### Development

Build and start the project with `./scripts/build`.

Generate new component directory/file sets with `./scripts/gen-component
<ComponentName>`.

Stop the project with `./scripts/stop`.

When new packages are installed (with `npm i <package name>`), be sure to run
`./scripts/rebuild`.

Run `./scripts/app-logs` to get an output of the logs (`rebuild` will do this as
well).

Run `docker compose` commands by substituting the `docker compose` prefix with
`./scripts/dc`. This will ensure that the proper `docker-compose.yml` file is
used.

Run `./scripts/rotate-jwt-keys` to use a new JWT signing key. Because the new
key should already be in the cache, Hasura should be able to use it immediately,
despite the endpoint not being immediately updated. For extra security, in case
there is a concern that the "UPCOMING" key was compromised as well, the
following operations can be performed to rotate both without any downtime.

1. Rotate the keys the first time: `./scripts/rotate-jwt-keys`
1. Deploy the changes
1. Wait for the cache to expire (at the time of writing, this is set to 300
   seconds)
1. Rotate the keys again
1. Deploy the new keys again

## Troubleshooting

- If you get the following error, ensure graphql generation is working
  - `typescript: Argument of type 'unknown' is not assignable to parameter of type DocumentNode | TypedDocumentNode<any, OperationVariables>'. [2345]`
  - If it is stopped, running `dc restart app` should fix it
  - Otherwise, you probably have an error in your query; check the app logs by
    running `./scripts/app-logs` to see details
