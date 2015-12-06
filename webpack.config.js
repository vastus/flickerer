module.exports = {
  context: __dirname + '/app',

  entry: {
    html: './index.html',
    javascript: './main.js'
  },

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.html?$/,
        loader: 'file?name=[name].[ext]'
      },

      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']

        }
      }
    ]
  },

  devServer: {
    inline: true
  }
};
