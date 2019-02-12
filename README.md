# Evari Test

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
├── branch.sh                         # Build feature branches
├── publish.sh                        # Publish build
public
├── favicon.ico                       # Application favicon
├── index.html                        # Main page template
├── manifest.json                     # App manifest
├── oauthcallback.html                # ADFS authentication callback page
src
├── actions
  ├── actions.test.js           # Redux Movies actions test
  ├── index.js                  # Redux Movies actions
├── components
  ├── Movies
    ├── index.js                    # Movies component (working with state (HOOKS))
    ├── Movies.test.js              # Movies component tests
  ├── MoviesRedux
    ├── index.js                    # MoviesRedux component
    ├── Movies.test.js              # MoviesRedux component tests
  ├── App.js
  ├── App.test.js
├── reducers
  ├── index.js                      # combined reducers
  ├── Movies.js                     # Movies reducer
  ├── MoviesReducer.js              # Movies reducer tests
├── utils
  ├── enableReduxDevtool.js         # Console dev tool
  ├── globalStyles.js               # Styled component global styles
├── index.css
├── index.js
├── setupTests.js                     # Initialize react-testing-library

```

#### Movies

The component Movies contains the Hook to load the data on ComponentDidMount, it is commented.
The Movies.test.js also contains the tests if data are loaded on ComponentDidMount, and they are skipped.


Tests
-----

The unit and and integration tests are using Jest and react-testing-library.
