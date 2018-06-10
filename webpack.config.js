module.exports = {
    entry: './test.js',
    output:
    {
        path: __dirname,
        filename: 'bundle.js'
    },
    module:
    {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};