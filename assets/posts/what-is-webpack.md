---
title: What is Webpack?
date: 2020-3-8 00:00:00 +0800
cover: /images/webpack.png
author: alfonzm
--- 

**Webpack** is a tool that bundles and minifies all of your assets (e.g. Javascript or CSS) into a single file so that your site loads faster.

In this article we'll explain how Webpack works and its four basic concepts—entry, output, loaders and plugins.

## Webpack bundles your code

When developing modern web apps, you might need to import a lot of JS and CSS files. Libraries, fonts, etc.

When your site loads for the first time, the browser will request and download each file from the server, and it can add up quickly.

That's where Webpack comes in—it bundles all your code and assets so that your site only needs to request one JS and one CSS file.

```
src/app.js
src/datepicker.js
src/google-ads.js    --->    dist/main.js
src/api.js
src/analytics.js
```

Remember: One HTTP request for a big file is better than several HTTP requests for small files.

## Webpack optimizes your assets

To further improve your site's performance, Webpack also minifies your code. Here's an example of minification:

```javascript
// Original code
function getSumOfTwoNumbers(myArgument1, myArgument2) {
  const sum = myArgument1 + myArgument2;
  return sum;
}

// Minified code
function abc(j,k){const s=j+k;return s;}
```

This can save several KBs or even MBs of file size, especially for huge projects. That way the browser can download the assets faster.

## How does Webpack work?

Webpack needs a single JS file called the `entry` file. Starting from the `entry` file, Webpack creates a "tree" of dependencies based on what each module requires.

Then, it bundles all of them together into an `output` file.

```
Entry file and its dependency tree:
|- src/index.js <-- entry
   |- jquery
   |- datepicker
      |- lodash
      |- moment

Output:
|- dist/main.js
   (contains index.js, jquery, datepicker, lodash and moment)
```

By default, the `entry` file is `src/index.js` and the `output` file is `dist/main.js`.

You can change these in the Webpack config file (or as parameters when using the Webpack CLI).

## How do I use Webpack?

Use the [webpack npm module](https://www.npmjs.com/package/webpack) as a dev dependency in your project. You can also directly call `webpack` command in your terminal if you install it globally.

A config file is not really necessary but it's very common to have one especially for larger projects. In the Webpack config you can specify the entry and output file, as well as loaders and plugins you want to use. More on these below!

Here's a sample Webpack config file:

```js
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/app.js'
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
};
```

Running `webpack --config webpack.config.js` will bundle `./src/app.js` (the entry) and all its dependencies (and its dependencies' dependencies, etc) into `dist/bundle.js` (the output).

You might want to move the `webpack` command into an npm script so you don't have to type it out every time.

## What are Webpack Loaders?

By default, Webpack can only read Javascript and JSON files. But with the help of **loaders**, Webpack can process other file extensions and use them in your Javascript modules.

For example, you can use `raw-loader` to read the contents of .txt files and use them in your Javascript code.

To do that, you must install the [raw-loader](https://www.npmjs.com/package/raw-loader) module to your package.

Then, tell Webpack that "hey, whenever you see someone importing a txt file, I want you to use `raw-loader` to process it." Here's a sample webpack config for that:

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  }
};
```

Now, we can do something like this:

```js
// src/message.txt
Hello world

// src/app.js
import message from './message.txt'
console.log(message) // prints 'Hello world'
```

Another notable loader is [css-loader](https://github.com/webpack-contrib/css-loader) which lets you import CSS files, and [style-loader](https://github.com/webpack-contrib/style-loader) which injects those CSS files into actual `<style>`-s to your HTML.

## What are Webpack Plugins?

Finally, you can also use **plugins** which extend the functions of Webpack and automate several tasks for you.

For example, the [`imagemin-webpack-plugin`](https://github.com/Klathmon/imagemin-webpack-plugin) plugin will automatically generate compressed versions of your project's image assets.

## Conclusion

Webpack is an essential skill in every web developer's toolkit. This article is barely scratching the surface of what Webpack can do!

One doesn't have to be an expert in Webpack—for most use cases, Javascript frameworks and boilerplates already handle the Webpack toolchain for you.

However, a decent understanding on how it works under the hoods will definitely help you in the long run.

Got any questions or suggestions? Leave your comments down below!
