const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + '/app/main.js', //唯一入口文件
  output: {
    path: __dirname + '/build', //打包后的文件存放地址
    filename: "bundle.js", //打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "es2015", "react"
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            }
          },
          {
            loader: "postcss-loader",
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究！'),
    new HtmlWebpackPlugin({
           template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
       }),
    new webpack.HotModuleReplacementPlugin(), //热加载插件
  ]
}
// 注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。_是两个...

// 有了这个配置之后，再打包文件，只需在终端里运行webpack(非全局安装需使用node_modules/.bin/webpack)命令就可以了，
// 这条命令会自动引用webpack.config.js文件中的配置选项
