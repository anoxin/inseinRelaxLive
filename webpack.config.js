const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'), // папка по умолчанию
    entry: {
        main: './index.js',
        admin: './backend/index.js'
    },
    output: {
        filename: 'js/[name].js', // название файла
        path: path.resolve(__dirname, 'dist') // корневой каталог и куда будет помещен
    },
    devServer: {
        hot: true, // горячая перезагрузка
        static: {
            directory: './dist',
            watch: true // для того чтобы сервер следил за нашими файлами
        }

    }
};