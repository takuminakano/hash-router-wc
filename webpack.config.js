const path = require("path");
webpack = require("webpack");
module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "./src/hash-router.ts"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    "ts-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts", ".js"
        ],
        module: [
            path.resolve(__dirname, "src"), "node_modules"
        ]
    }
}
