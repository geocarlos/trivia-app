# Trivia App

Challenge with True or False questions.

## Install dependencies

To install dependencies, run `npm install`.

## Notes

This app has been developed and tested on Windows 11, using Node version 16.14.0 and NPM version 8.6.0. It is developed in TypeScript, thus some issues with ESLint had to be handle, such as turnoff rull "no-unused-vars" and turn on "@typescript-eslint/no-unused-vars". But similar issues may arise in different environments. If that happens, plese check the `.eslintrc.json` file.

Rule "react/function-component-definition" was turned off, because since React 17, there is no need to import React into components.

Rule "react/no-danger" was disabled, because the questions need to parsed, and one fast and easy way to do that is to use `dangerouslySetInnerHTML`. To mitigate the potential danger from this, a well-known library was used to sanitize the string.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
