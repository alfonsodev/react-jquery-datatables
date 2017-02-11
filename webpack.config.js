module.exports = {
  entry: './src/index',
  output: {
    filename: 'dist/react-jquery-datatables-components.min.js',
    library: 'ReactDataComponents',
    libraryTarget: 'umd',
  },
  externals: {
    'react': {
      root: 'React',
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react',
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['latest-node6', 'react'],
          plugins: [
            'transform-decorators-legacy',
            'transform-object-rest-spread',
            'transform-function-bind',
          ],
        },
      },
    ],
  },
};
