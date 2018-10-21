

const webpack_config = {
    mode: 'production',
    entry: {
        // app: './src/javascripts/app.js',
        editResume:'./src/javascripts/editResume.js',
        home: './src/javascripts/home.js',
        login: './src/javascripts/login.js',
        'home-job-detail': './src/javascripts/home-job-detail.js',
        'home-company-detail': './src/javascripts/home-company-detail.js'
    },
    // entry: ['./src/javascripts/app.js', './src/javascripts/vendor.js'],
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [ // 在这里通过配置规则来使用loader
            { 
                test: /\.html$/, // 查找被当作模块引入到js中的后缀名是.html的文件
                use: 'string-loader' // 利用string-loader来处理它
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, // 代表不包括哪些
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}

module.exports = webpack_config;