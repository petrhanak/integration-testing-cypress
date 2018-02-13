## Basic setup


### 1. Install dependencies

npm:
```
npm install cypress eslint-plugin-cypress @cypress/webpack-preprocessor --save-dev
```

yarn:
```
yarn add cypress eslint-plugin-cypress @cypress/webpack-preprocessor --dev
```

### 2. Copy & paste

Copy everything from `setup/` to your project root dir

### 3. Just one more thing

Fix import path for redux store in `cypress/support/commands.js`