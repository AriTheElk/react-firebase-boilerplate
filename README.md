<p align="center">
  <img src='http://imgur.com/e4TbOxj.gif' alt='React Firebase Boilerplate Demo'/>
</p>

[![David](https://img.shields.io/david/JSBros/react-firebase-boilerplate.svg)](https://github.com/JSBros/react-firebase-boilerplate/issues) [![label](https://img.shields.io/github/issues-raw/JSBros/react-firebase-boilerplate/website.svg)](https://github.com/JSBros/react-firebase-boilerplate/issues) [![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/jsbros/react-firebase-boilerplate.svg)](https://github.com/JSBros/react-firebase-boilerplate/pulls?q=is%3Apr+is%3Aclosed) [![Slack Status](https://slackin-xtuseyimsc.now.sh/badge.svg)](https://slackin-xtuseyimsc.now.sh/)

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
- Extras
  - [X] Emojione `2.2.6`
- Testing
  - [ ] Mocha `2.5.3`
  - [ ] Enzyme `2.3.0`


## Features

- Firebase:
  - Auth
    - [X] Authentication setup (Registration/Login with GitHub—other providers easil added)
    - [X] state.user sync with Firebase Auth
    - [X] Protected routes (requires login)
- Beautiful notification system via `react-notification`.
- Cross browser emoji support via `emojione`.


## Usage Guide

### Boilerplate Setup

```
git clone https://github.com/jsbros/react-firebase-boilerplate
cd react-firebase-boilerplate
npm install
```

### Firebase setup

1. Create a Firebase project in the [Firebase console](https://console.firebase.google.com/), if you don't already have one.
  - If you already have an existing Google project associated with your app, click `Import Google Project`. Otherwise, click `Create New Project`.
  - If you already have a Firebase project, click `Add App` from the project overview page.
2. Click `Add Firebase to your web app`.
3. Copy all the values keys in the `config` object over to the [config/firebase.js](config/firebase.js) file.
4.  [Register your app](https://github.com/settings/applications/new) as a developer application on GitHub and get your app's OAuth 2.0 Client ID and Client Secret.
5. Enable GitHub authentication:
  1. In the [Firebase console](https://console.firebase.google.com/), open the `Auth` section.
  2. On the `Sign in method` tab, enable the `GitHub` sign-in method and specify the OAuth 2.0 `Client ID` and `Client Secret` you got from GitHub.
  3. Then, make sure your Firebase `OAuth redirect URI` (e.g. `my-app-12345.firebaseapp.com/__/auth/handler`) is set as your `Authorization callback URL` in your app's settings page on your [GitHub app's config](https://github.com/settings/developers).


### Usage

```
npm start
```

## Development Tasks

- `npm start` run the web app with lint and tests in watch mode
- `npm run lint` linting javascript code usig eslint
- `npm run test` test using mocha and enzyme

## Roadmap

Check our [roadmap issues](https://github.com/jsbros/react-firebase-boilerplate/issues?q=is%3Aissue+is%3Aopen+label%3Aroadmap)

## Contributing

### Code Linting

All code must pass the linter 100% before getting merged into the master repo. It's highly recommended to install an eslint extension into your code editor/IDE. You can also run the linter from the command line using

```
npm run lint
```

### Commit Styles

All commit messages must follow the [Semantic Commit Message](https://seesparkbox.com/foundry/semantic_commit_messages) guidelines.

## Author

🔥 [Garet McKinley](https://twitter.com/garetmckinley)

## License

The React Firebase Boilerplate is under the [MIT License](LICENSE)
