# svelte-firebase-spa-starter
A Svelte and Firebase starter project for building an SPA. *Updated to Svelte 3!*

# Usage

## Prerequisite Global Installs

### `firebase`

Firebase is best used as a global package.

```
npm install -g firebase-tools
firebase login
```

### Quickly up-and-running with `degit`

It's recommended to use [`degit`](https://github.com/Rich-Harris/degit).

```
npm install -g degit
```

## Starting a project

1. `degit RoryDuncan/svelte-firebase-spa-starter my-project`, then `cd my-project`
    - If not using degit you can clone the repository
2. `npm install`
3. Add your Firebase Config [inside `/src/init/firebase.js`](https://github.com/RoryDuncan/svelte-firebase-spa-starter/blob/master/src/init/firebase.js#L5-L12)
4. Build and view it locally: `npm run build && npm run local`


# What's Inside

1. `npm` scripts:
    1. `build` - Build your svelte app 
    2. `watch` - Watch your svelte app
    3. `local` - Runs `firebase serve --only hosting`
    4. `deploy` - runs `firebase deploy`

2. Project structure scaffolding
    1. folders structure
    2. `rollup.config.js` preconfigured
        - `import` relative to `/src`
        - `buble` when you're ready for a production build
    2. Setup svelte initialization
    3. Setup firebase initialization ([just needs your config from your firebase console](https://github.com/RoryDuncan/svelte-firebase-spa-starter/blob/master/src/init/firebase.js#L5-L12))
    3. setup `.gitignore` for build files
    4. Component: `Loading.html`

3. `page.js` for routing
    1. Lightly included, in case an alternative is desired.