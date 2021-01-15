module.exports = {
    // options...
    devServer: {
        disableHostCheck: true
    },
    publicPath: process.env.NODE_ENV === "production" ? "/trent-assignment-2-vue/" : "/"

}