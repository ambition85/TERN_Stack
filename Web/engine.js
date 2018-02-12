"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactDOM = require("react-dom/server");
var Path = require("path");
function engine(filepath, props, callback) {
    console.log("Rendering component in file: " + filepath);
    try {
        var componentJS = require(filepath);
        // Derive name of the component within the javascript from the name of the file.
        var name = Path.basename(filepath).replace(Path.extname(filepath), "");
        name = name.charAt(0).toUpperCase() + name.slice(1);
        console.log("Component Name: " + name);
        // Access the component in the JS
        var component = new componentJS[name](props);
        // Render the component to HTML
        callback(null, ReactDOM.renderToString(component.render()));
    }
    catch (error) {
        callback(error);
    }
}
module.exports = engine;
//# sourceMappingURL=engine.js.map