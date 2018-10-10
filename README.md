# Indecision APP
In-progress currently.

# Description
This is a React application which allows user to enter item(s) in a list, press a button and have the app randomly select an item.

# App features
-cross browser compatible
-modular by functionality (React components) and style (scss files for each component)
-responsive: app's content and modal window

# Prerequisites
- npm version: 5.6.0 or newer
- yarn (npm package) 1.9.4 or newer
- Install all the dependencies to make this project work : yarn install
# Dependencies: 
    "babel-cli": "6.24.1",
    "babel-core": "6.26.0",
    "babel-loader": "7.1.4",
    "babel-preset-env": "1.5.2",
    "babel-preset-react": "6.24.1",
    "live-server": "^1.2.0",
    "react": "^16.5.2",
    "react-dom": "^16.5.2",
    "validator": "8.0.0",
    "webpack": "3.1.0",
    "webpack-dev-server": "2.5.1"

# Running the app
You need webpack to run this app along with above dependencies installed.
Use the webpack dev server: yarn run dev-server

access the app by opening a browser and goto http://localhost:8080/
other useful scripts:
    "serve": "live-server public/",
    "build": "webpack --watch",
    "dev-server": "webpack-dev-server"

 
