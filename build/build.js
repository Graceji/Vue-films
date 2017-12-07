'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora') // 用于开启loading动画
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

// [[ 2. 开启loading动画 ]]
const spinner = ora('building for production...')
spinner.start()
// 删除创建打包的目标文件夹
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  // [[ 4. webpack编译 ]]
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    // 输出相关信息
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    //  输出提示信息 ～ 提示用户请在 http 服务下查看本页面，否则为空白页
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
