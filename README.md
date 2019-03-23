# svelte-firebase-spa-starter
A Svelte.js and Firebase starter project for building an SPA

# Usage

## Global Installs

### `degit`

Before you start, it's optimal to use [`degit`](https://github.com/Rich-Harris/degit), since it will remove all of the fluff around this repository. Without it you will need to manually remove files.

```
npm install -g degit
```

### `firebase`

Firebase is best used as a global package.

```
npm install -g firebase-tools
firebase login
```

## Starting a project

1. `degit RoryDuncan/svelte-firebase-spa-starter my-project`
2. `npm install`


# What's Inside

1. `npm` scripts:
    1. `build` - Build your svelte app 
    2. `watch` - Watch your svelte app
    3. `local` - Runs `firebase serve --only hosting`
    4. `deploy` - runs `firebase deploy`
2. Project structure scaffolding
    1. folders structure
    2. `rollup.config.js` preconfigured
    2. Setup svelte initialization
    3. setup `.gitignore` for build files