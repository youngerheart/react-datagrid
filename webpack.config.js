
module.exports = {
    entry: './index.jsx',
    output: {
        publicPath: '/assets'
    },
    module: {
        loaders: require('./loaders.config')
    },
    externals: {
        'react-datagrid': 'DataGrid',
        'react': 'React'
    },
    resolve: {
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        // contentBase: 'http://192.168.1.4:8080',
        publicPath: '/assets',
        info: true,
        quiet: false,

        stats: {
            colors: true,
            progress: true
        }
    }
}