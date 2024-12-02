# YNA G3 Front Blnak Project

This template should help get you started developing with YNA G3. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## Install VSCode
VSCode is the recommended IDE for front end app development.
Download VSCode from the [official site](https://code.visualstudio.com/).
Install following extensions:
- Vue - Official
- Eslint
- ...

## Install Node.js
Download Node.js from [official site](https://nodejs.org/en/download/). Version 20 is recommended.

## Configure node js
Viy modules are store in Github Packages, so access token is required for downloading modules. Edit `.npmrc` file, add following lines:

```
//npm.pkg.github.com/:_authToken=ghp_ddd
@ymsl-x:registry=https://npm.pkg.github.com
@ymc-group:registry=https://npm.pkg.github.com
```

The .npmrc file can be located in two places:
- User-level configuration: Located in your user's home directory (e.g., `C:\Users\<YourUsername>\.npmrc`).
- Project-level configuration: Located in the root directory of your project.

If the file does not exist, you can create a new text file and rename it to .npmrc.

Replace `ghp_ddd` with your own access token(with at least `package:read` permission).
> **Note**: `//npm.pkg.github.com/` does not mean comment, it is part of the url.

## Install necessary packages
Run ```npm i -g pnpm``` for installing package manager `pnpm` globaly.
Then go to the root directory of your project, run ```pnpm install``` for installing all the dependencies.

### Change registry url
Default node js uses ```http://registry.npmjs.org``` for downloading modules.
This is ok for developers from Japan or India, but might be slow for developers in China.
In this case, registry can be changed to a Chinese mirror registry.
```
npm config set registry https://registry.npmmirror.com
```

## Clone Project
Clone this repository or download zip to your local machine.

## Modify package.json
Edit the package.json file to update the project information with your own details:

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "Your project description",
  "author": "Your Name <your.email@example.com>"
}
```

## Start app
Run ```pnpm run dev``` to start app.
Access ```http://localhost:5000/``` to view the page.

### Dummy login
if you temporally don't have backend API for login, you can add following settings in `menuSetting.js` to enable dummy login.

```javascript
const { login, logout, getUserInfo, getMenusByEnv } = new YnaG3SystemAdapter({
  dummyAuth: import.meta.env.MODE !== 'production' && { userCode: 'admin' }, // add this line for dummy login, this line will not be included in production build
});
```

## Proxy
proxy settings can be found in ```vite.config.js```.
```javascript
  server: {
    proxy: {
      '/blank': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/blank/websocket': {
        target: 'ws://localhost:8080',
        ws: true,
        changeOrigin: true,
      },
    },
  },
```
All the requests to ```/blank``` will be redirected to ```http://localhost:8080```. e.g. `/blank/api/findData` would be sent to `http://localhost:8080/blank/api/findData`.
Websocket should be configured separately, with `ws: true` option.

## Build
Run `pnpm run build` to build app.
The built files will be in `dist` folder.
