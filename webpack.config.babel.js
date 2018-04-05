import { join } from 'path';

const include = join(__dirname, 'dist');

export default {
  entry: './index',

  output: {
    path: join(__dirname, 'dale'),
    libraryTarget: 'umd',
    filename: 'dale.umd.js',
    library: 'DaleUmd',
  },

  devtool: 'source-map',

  target: 'node',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include,
      },
    ],
  },
};
