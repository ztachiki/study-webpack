module.exports = {
    entry: `./src/main.ts`,

    output: {
        path: `${__dirname}/dist`,
        filename: "main.js"
   },

   module: {
       rules: [
           {
               test: /\.ts$/,
               use: 'ts-loader',
           },
       ],
   },

   resolve: {
       extensions: [
           '.ts', '.js',
       ],
   },

   devServer: {
       contentBase: "dist",
       open: true
   },

   mode: "development"
};