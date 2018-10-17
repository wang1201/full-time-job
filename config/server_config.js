
const proxy = require('http-proxy-middleware');

// 开发服务器的配置
const server_config = {
    host: 'localhost',
    port: 8080,
    livereload: true,
    open:true,
    middleware: [
        proxy('/quanzhi', { // /quanzhi 这个是判断依据 当我们请求'http://localhost:8080/quanzhi/abc'的时候，这个代理就生效了
            target: 'https://m.quanzhi.com', // 配置目标服务器 当前服务器回去请求 https://m.quanzhi.com/quanzhi/abc
            changeOrigin: true,
            pathRewrite: { // https://m.quanzhi.com/abc
                '^/quanzhi': ''
            }
        }),
        proxy('/api', {
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    ]
    // open: true,
    // 以gulp file.js文件路径为基准
    // directoryListing: true
}

// CommonJS
// 其实暴露的是module.exports这是一个对象
module.exports = server_config