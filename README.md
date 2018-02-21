# cypress setup for lazy people

## Basic setup


### 1. Install dependencies

```
npm install cypress eslint-plugin-cypress --save-dev
```

### 2. Copy & paste

Copy everything from `setup/` to your project root dir

### 3. Redux store

Export store to `window.reduxStore` (can be changed in `cypress/support/commands.js`)

```
const store = configureStore(initialState, history);
```

will be

```
const store = configureStore(initialState, history);

if(typeof window !== 'undefined') {
    window.reduxStore = store
}
```

### 4. Usage

`cypress open` for UI
`cypress run` for CI


## Recommended for react-boilerplate
### 1. Install dependencies
```
npm install @cypress/webpack-preprocessor --save-dev
```

### 2. Enable webpack
uncomment `cypress/plugins/index.js`