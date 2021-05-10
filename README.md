# Vertex Developer Portal

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Requirements

This project requires `yarn` and `nvm`.

### Local Development

```shell
$ nvm use
$ yarn install
$ yarn start
```

These commands activate the appropriate version of `node.js`, install/update package dependencies, start a local development server, and open up a browser window pointing at the local dev server. Most changes are reflected live without having to restart the server.

### Build

```shell
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Production Deployment

_NOTE:_ Production deployment will happen automatically upon any main merge. The instructions below can be used to do so manually.

```shell
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Working with Versions

The 'next' version documentation is located in the top level `docs` folder. Docs for published versions are located under the `versioned_docs` folder.

To publish a new version,

```shell
yarn version-docs -- {NEXT_VERSION_NUMBER}
```
