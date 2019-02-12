# Movies

## Table of Contents

1. [Requirements](#requirements)
1. [Installation](#installation)
1. [Structure](#structure)
1. [Tests](#tests)


Requirements
------------

- [Node.js][node] latest LTS


Installation
------------

### React application

All dependencies can be installed via _npm_ or _yarn_ from the project root folder:

```
yarn
```

#### Tasks

```
yarn {task}
```

Where _{task}_ is one of the following.

```
`yarn ...`            | Description
----------------------|-------------------------------------------------
`start`               | Runs in development mode
`build`               | Builds project in the /dist folder
`test`                | Tests in interactive mode with Jest/Enzyme
`test {regex}`        | Tests files matching regex
`test --coverage`     | Tests all files and generates a coverage report
```

Please refer to the [yarn documentation](https://yarnpkg.com/en/docs) for more details.


Structure
---------

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and uses the following overall structure.

```
codebuild
├── branch.sh                       # Build feature branches
├── publish.sh                      # Publish build
public
├── favicon.ico                     # Application favicon
├── index.html                      # Main page template
├── manifest.json                   # App manifest
src
├── actions
  ├── actions.test.js               # Redux Movies actions test
  ├── index.js                      # Redux Movies actions
├── api
  ├── api.test.js                   # APIfetchMovies test
  ├── index.js                      # APIfetchMovies
├── components
  ├── __tests__
    ├── __snapshots__
      ├── ListMovies.test.js.snap
    ├── App.test.js
    ├── ListMovies.test.js
    ├── MoviesRedux.test.js
    ├── MoviesState.test.js
  ├── App.js
  ├── ListMovies.js
  ├── MoviesRedux.js                # Movies container using redux
  ├── MoviesState.js                # Movies container using state
├── reducers
  ├── index.js                      # combined reducers
  ├── Movies.js                     # Movies reducer
  ├── MoviesReducer.js              # Movies reducer tests
├── utils
  ├── enableReduxDevtool.js         # Console dev tool
  ├── globalStyles.js               # Styled component global styles
├── index.js
├── setupTests.js                   # Initialize react-testing-library

```

Tests
-----

The unit and and integration tests are using Jest and react-testing-library.
