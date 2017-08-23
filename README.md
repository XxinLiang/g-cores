
g-cores react

修改node_modules\react-scripts\config\目录下webpack.config.dev.js和webpack.config.prod.js

+ alias添加`'c': path.resolve('./src/Components')`
+ 使用css-modules，在css-loader的options属性下添加`modules: true, localIdentName: '[path][name]__[local]--[hash:base64:5]'`