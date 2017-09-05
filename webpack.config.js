module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        presets: ["react", "es2015", "stage-0"]
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /(node_modules)/,
        loader: 'url-loader'
      }
    ]
  }
};
