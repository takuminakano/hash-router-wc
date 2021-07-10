const path = require("path");
webpack = require("webpack");
module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "./main.ts"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
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
        ]
    }
}
