## About this project

This project is created using React library, rendition, bootstrap. The app is responsive, meaning designed to fit all the window sizes.

SCSS preprocessor, eslint are used for development

This is a web application that interacts with it to control the light bulbs. You should be able to use the web app, from a mobile device or a laptop, to turn light bulbs on and off, set the brightness of a light bulb and change the descriptive name of a light bulb. You can assume the home page and login system has already been implemented.

A Table will be displayed with all the bulbs available. you tap or click on any row and adjust the brightness of the bulb.

Selecting the row. 

  - In laptop or table, you see a popover next to the table (initially the first row is selected). 
  - In Mobile, a popup appears with a close button.

Once a row is selected Name of the bulb can be edited by clicking the pencil icon next to the bulb name on the popover/popup

Alternatively, a bulb can be turned off by clicking the switch under the State column. When the bulb is turned on brightness is set to 100 by default and it can be changed by clicking the row.

## Getting started with the project

Navigate to the path of this folder and then run the following command

`npm install`

You can alternatively use 

`yarn install`

Assuming that you already installed `Node.js` in your system.

Once node modules are installed, run the following command

`npm start`

A proxy API to test your frontend against is available here [https://github.com/resin-io/light-api](https://github.com/resin-io/light-api).

Clone the above server and run it the help of node.

## Folder Structure

```
my-app/
  README.md
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    components
    include
    services
    index.css
    index.js
    index.scss
    logo.svg
    
```

All the components created in this folder will be under the components directive.

Service to get and set bulb(s) are, in a file called BulbServie.js under the services folder. URL's should be changed for the production use


For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.
You need to **put any JS and CSS files inside `src`**, otherwise, Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.
They will not be included in the production build, so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode and also compiles the scss file to css.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts, so you can tweak them. At this point, you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you could not customize it when you are ready for it.




