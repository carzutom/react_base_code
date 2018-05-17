<div align="center">
  <a href="https://reactjs.org/">
    <img width="200" height="200" src="https://sandstorm.de/_Resources/Persistent/3285416e8503b2c8354c321bcd690cf550b8b2d3/React-Logo.svg">
  </a>
  <br>
  <br>


[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)
[![npm][npm]][npm-url]

[![node][node]][node-url]
[![builds][builds]][builds-url]
[![licenses][licenses]][licenses-url]

  <br>

  <h1>React Base Code</h1>
</div>

> This is a repo with base code for react projects, with basic configuration. Use Webpack 2.x, bootstrap 4, jquery 3.x, react 15.x, react-router 3.x, redux 3.x

### Install

Clone the repo and run the command:

```bash
npm install
```

### Development

```bash
npm run dev
```
Then open your browser in [http://localhost:3000](http://localhost:3000/)

### Production

```bash
npm run build
```
It generates a folder called `dist` with all the compiled files

### Get Started

###### Project Structure

```
.
├─ src
│  ├─ app
│  │  ├─ components
│  │  │  ├─ home
│  │  │  │  ├─ index.js
│  │  │  │  ├─ ...
│  │  │  ├─ ...
│  │  ├─ config
│  │  │  ├─ Global.js
│  │  │  ├─ ...
│  │  ├─ helpers
│  │  │  ├─ Helper.js
│  │  │  ├─ ...
│  │  ├─ routes
│  │  │  ├─ home
│  │  │  │  ├─ index.js
│  │  │  ├─ ...
│  │  ├─ store
│  │  │  └─ configureStore.js
│  │  ├─ app.js
│  │  └─ main.js
│  │
│  ├─ assets
│  ├─ 404.html
│  └─ index.html
│   
├─ LICENSE
├─ package.json
├─ README.md
└─ webpack.config.js
```
* ***src/app/components***. You'll most place your components here. This is the view's folder.
* ***src/app/config***. Your global app's configuration goes here. (Ex. api's configuration).
* ***src/app/helpers***. Here goes global functions that you access in entire project. (Ex. api's functions).
* ***src/app/routes***. Define all routes of your project here.
* ***src/app/store***. If you use redux this is the file where you configure the main store for your app.
* ***src/assets***. Folder where global resources are placed, like theme, bootstrap styles, images, fonts, etc
* ***src/index.html***. Is the main file where the components are rendered
* ***package.json***. Main file for App information and other things like dependencies configuration, etc.
* ***webpack.config.js***. Configuration for bundle the app. If you don't have any idea for this we recommend you don't modify this file.

### Support

Write us to [web-support@soveluss.com](mailto:web-support@soveluss.com)

### License

Copyright (c) 2018 Soveluss

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[npm]: https://img.shields.io/npm/v/webpack.svg
[npm-url]: https://npmjs.com/package/webpack

[node]: https://img.shields.io/node/v/webpack.svg
[node-url]: https://nodejs.org

[builds-url]: https://ci.appveyor.com/project/sokra/webpack/branch/master
[builds]: https://ci.appveyor.com/api/projects/status/github/webpack/webpack?svg=true

[licenses-url]: https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fwebpack%2Fwebpack?ref=badge_shield
[licenses]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fwebpack%2Fwebpack.svg?type=shield
