# Indecision APP

Dependencies: {
    "babel-preset-env": "1.5.2",
    "babel-preset-react": "6.24.1"
}
npm version: 5.6.0
yarn : 1.9.4

npm install -g live-server
npm install -g babel-cli@6.24.1

Host using Live server:
1) cd into project
2) Live-server public

Run follow to transform:

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

babel src/experiments/es6-arrow-functions.js --out-file=public/scripts/app.js --presets=env,react --watch
