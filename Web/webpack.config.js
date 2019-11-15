/// <binding AfterBuild='Run - Development' />
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var CopyWebpackPlugin = require('copy-webpack-plugin');

// Output to dist directory.
module.exports = {
//    entry: "./client/index.tsx",
    entry: {
//        index: "./client/index.js",
//        users: './client/users.js'
        index: "./dist/client/index.js",
        users: './dist/client/users.js'
    },

    output: {
        filename: "[name]-bundle.js",
//        path: __dirname + "/client/public/javascripts"
        path: __dirname + "/dist/client/public/javascripts"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js", ".json"]//,
//        extensions: [".ts", ".tsx", ".js", ".json"]//,
        //modules: [__dirname +"node_modules"],
    },
//    resolveLoader: {
//        modules: [
//            __dirname + "node_modules"
//        ]
//    },

    module: {
        rules: [
//            {
//                test: /\.tsx?$/,
//                exclude: /node_modules/,
//                //include: __dirname + "/public/javascripts",
//                loader: "babel-loader"
//            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
//            {
//                test: /\.tsx?$/,
//                exclude: /node_modules/,
//                loader: "awesome-typescript-loader",
//            }
//            ,

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            //{ enforce: "pre", test: /\.js$/, loader: "babel-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
//        new webpack.DefinePlugin({
//            'process.env.NODE_ENV': JSON.stringify('development')
//        }),
        // Copy over the parts that are not part of the build.
        new CopyWebpackPlugin([
            {from:__dirname+'/database/config/',
             to:__dirname+'/dist/database/config/'} 
        ]),
        new WebpackNotifierPlugin({ title: 'Webpack' })
    ],
};
