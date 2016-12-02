<p align="center">
  <img src='http://imgur.com/e4TbOxj.gif' alt='React Firebase Boilerplate Demo'/>
</p>

The React Firebase Boilerplate was originally based on the [react-hot-redux-firebase-starter](https://github.com/douglascorrea/react-hot-redux-firebase-starter). The structure was changed durastically when creating this, so I decided to start an entirely new boilerplate based off the fork.

## Stack

- React
  - [X] React `15.1.0`
  - [X] React Hot Loader `3.0.0-beta.2`
  - [X] React Router `3.0.0`
- Redux
  - [X] Redux `3.5.2`
  - [X] React Redux `4.4.5`
  - [X] React Router Redux `4.0.4`
  - [X] Redux Thunk `2.1.0`
  - [X] Redux Dev Tools
- Webpack    
  - [X] Webpack `1.13.1`
  - [X] Webpack Dev Middleware `1.6.1`
  - [X] Webpack Hot Middleware `2.10.0`
- Firebase
  - [X] Firebase `3.0.3`
- Linting
  - [ ] Flowtype `0.36.0`
  - [X] Eslint `3.11.1`
- Styles
  - [X] Styled Components `1.1.2`
- Testing
  - [ ] Mocha `2.5.3`
  - [ ] Enzyme `2.3.0`


## Features

- Firebase:
  - Auth
    - [X] Authentication setup (Registration/Login with GitHub—other providers easil added)
    - [X] state.user sync with Firebase Auth
    - [X] Beautiful notification system via `react-notification`.
    - [X] Protected routes (requires login)

## Usage

```
git clone https://github.com/jsbros/react-firebase-boilerplate
cd react-firebase-boilerplate
npm install
npm start
```

## Development Tasks

- `npm start` run the web app with lint and tests in watch mode
- `npm run lint` linting javascript code usig eslint
- `npm run test` test using mocha and enzyme

## Roadmap

Check our [roadmap issues](https://github.com/jsbros/react-firebase-boilerplate/issues?q=is%3Aissue+is%3Aopen+label%3Aroadmap)
