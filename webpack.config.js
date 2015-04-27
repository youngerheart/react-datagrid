
module.exports = {
    entry: './index.jsx',
    output: {
        publicPath: 'http://192.168.1.6:8090/assets'
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
        contentBase: 'http://192.168.1.6:8080',
        info: true,
        quiet: false,

        stats: {
            colors: true,
            progress: true
        }
    }
}