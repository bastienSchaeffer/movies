# Evari Test

## Table of Contents

1. [Requirements](#requirements)
1. [Installation](#installation)

## Requirements

- [Node.js][node] latest LTS

## Installation

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
