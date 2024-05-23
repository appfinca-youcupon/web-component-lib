# YouCupon Shared Components

Collection of shared react components across YouCupon projects

## Branch

- The `master` branch is used to manage components, can be built with vite and view with storybook
- The `components` branch can be used as submodules and imported in other projects. (NOTE: this is a subdirectory in master branch)

## Prerequisites

- Node.js
- Yarn (on npm)
- Ruby (for bootstrap-email)

## Install

Prefferd way to install is using Yarn 4

```
yarn init -2
yarn
```

## Run with Vite

```
yarn dev
```

```
yarn build
```

## Run with Storybook

```
yarn storybook
```

## Build Email Component

```
node render-email-coupon-template.js
```
