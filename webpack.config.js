module.exports = {
    mode: "development",

    entry: `./src/main.tsx`,

    output: {
        path: `${__dirname}/dist`,
        filename: "main.js"
   },

   module: {
       rules: [
           {
               test: /\.tsx$/,
               use: 'ts-loader',
           },
       ],
   },

   resolve: {
       extensions: [
           ".ts", ".tsx",  ".js", ".json",
       ],
   },

   devServer: {
       contentBase: "dist",
       open: true
   },

   target: ["web", "es5"]

};