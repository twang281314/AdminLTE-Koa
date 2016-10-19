/**
 * @function 配置文件
 * @author anytao
 * @created 2016-10-19 13:21
 */

'use strict';

const fs = require('fs');
const path = require('path');

let config = {
    title: "Admin",
    //生产环境  production
    //开发环境 development
    env: "development", // 
    appName: "admin-lte admin",
    //端口号配置
    port: 3000,
    //模板所在的目录
    viewDir: path.join(__dirname, '..', 'view'),
    //log所在的目录
    logDir: path.join(__dirname, '..', 'log'),
    //静态文件所在的目录
    staticDir: path.join(__dirname, '..', 'public'),
};

module.exports = config;