module.exports = {
    entry: `./src/index.js`,

    output: {
        path: `${__dirname}/dist`,
        filename: "main.js"
   },

   devServer: {
       contentBase: "dist",
       open: true
   },

   mode: "development"
};