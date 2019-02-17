var path = require('path');
var webpack = require('webpack');


var config = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
  //  path: __dirname + '../public/js',
   // path: path.resolve(__dirname,'../'),
   // path: path.resolve('../'),
	//path: path.resolve(__dirname, '../public/js/'),
	//publicPath : '../public/js',
	
   // path : path.join(__dirname, './dist'),
   // path : path.resolve(__dirname, 'dist'),
   // publicPath: '/',
   // path: path.resolve(__dirname, './dist'),
   //  filename: '../../public/js/niko.js'
  //  filename: 'bundle.js'
  path: path.join(__dirname, '../public/js'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  //  contentBase: '../public/'
  }
};

module.exports = config;
/*
var compiler = webpack(config);
compiler.run(function (err, stats) {
	console.log(stats.toJson()); // по завершению, выводим всю статистику
});
*/
console.log('***** 1 ******** = ',path.join(__dirname, '../public'));
console.log('***** 2 ******** = ',path.resolve(__dirname, '../public'));
console.log('***** 3 ******** = ',__dirname + '../public');