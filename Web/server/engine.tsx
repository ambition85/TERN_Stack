// engine.js
/*
var createElement = require('react').createElement;
var renderToString = require('react-dom/server').renderToString;
*/
/**
 * Templating engine for Express.
 *
 * @param {String} filepath
 * @param {Object} props
 * @param {Function} callback
 */
/*
function engine(filepath, props, callback) {
    console.log("HELLO THERE");
    try {
        var Component = require(filepath);

        // first argument is the error
        // second argument is the rendered view (html)
        callback(null, renderToString(createElement(Component, props)));
    } catch (error) {
        callback(error);
    }
}

module.exports = engine;
*/
import * as React from "react";
import * as ReactDOM from "react-dom/server";
import * as Path from "path";

function engine(filepath, props, callback) {
    console.log("Rendering component in file: " + filepath);
    try {
        var componentJS = require(filepath);

        // Derive name of the component within the javascript from the name of the file.
        var name = Path.basename(filepath).replace(Path.extname(filepath),"");

        name = name.charAt(0).toUpperCase() + name.slice(1);

        console.log("Component Name: " + name);

        // Access the component in the JS
        var component = new componentJS[name](props);

        // Render the component to HTML
        callback(null, ReactDOM.renderToString(component.render()));
    } catch (error) {
        callback(error);
    }
}

module.exports = engine;