const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            //指定加载器
            loader: 'babel-loader',
            //设置babel
            options:{
              //设置预定义的环境
              presets:[
                [
                  //指定环境的插件
                  "@babel/preset-env",
                  //配置信息
                  {
                    //需要兼容的目标浏览器
                    targets:{
                      "chrome":"58",
                      "ie":"11"
                    },
                    "corejs":"3",
                    //使用corejs的方式 usage按需加载
                    "useBuiltIns":"usage"
                  }
                ]
              ]
            }
          },
          'ts-loader',
        ],
        exclude: '/node_modules/',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  //用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'development',
}
