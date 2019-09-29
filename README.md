# Les Bâtisseurs - Moyen-Âge

## Install

- Run `npm install` to install dependencies

## Start

- Run `npm run start` to start the app
- Open your browser on `http://localhost:3000/`

## Debug

- Run `npm run start:debug` to start the app in debug mode
- Press `F5` to attach the vscode debugger to the node process

## Test

- Run `npm run test` to start test suites
- Open `coverage/index.html` to see the tests code coverage information

## Linter/Code formatter

- Run `npm run lint` to see errors
- Run `npm run lint:fix` to automatically fix errors

## API documentation

When the app is running, go to `http://localhost:3000/api-docs/` to see the API documentation.

## Recommended Visual Studio Code plugins

 - ESLint `code --install-extension dbaeumer.vscode-eslint`
 - Jest `code --install-extension orta.vscode-jest`
 - npm `code --install-extension eg2.vscode-npm-script`
 - npm Intellisense `code --install-extension christian-kohler.npm-intellisense`
 - Prettier `code --install-extension esbenp.prettier-vscode`

## Usefull documentations

 - [Node](https://nodejs.org/en/docs/) 
 - [Express](http://expressjs.com/en/4x/api.html) 
 - [Jest](https://jestjs.io/docs/en/getting-started)
 - [Lodash](https://lodash.com/docs/4.17.15)
 - [Uuid](https://github.com/kelektiv/node-uuid#readme)

## Use Postman to request the application

 - Open `Postman`
 - Click on `import` then select `openapi.yaml` file

## Files structure

 - **.vscode** Visual Studio Code project configuration
 - **coverage** Tests code coverage information
 - **node_modules** Dependencies of the application
 - **reference** Open Api description of the application
 - **src** Sources of the application
    - **ressources** Folder with cards as csv files
    - **routes** Routes of the application
    - **services** Services of the application
    - **app.js** Application creation
    - **index.js** Main of the application
 - **.babelrc** Babel configuration file
 - **.eslintrc** ESLint configuration file
 - **.gitignore** List of files to exclude from git
 - **jest.config.js** Jest configuration file
 - **notation.md** Notation information
 - **openapi.yaml** Api description of the application
 - **package-lock.json** Informations about dependencies automatically generated (do not modify by hand)
 - **package.json** Project description
 - **README.md** Project documentation
 - **rules.pdf** Rules of Les Bâtisseurs - Moyen-Âge
 - **snippets.md** Code snippets
