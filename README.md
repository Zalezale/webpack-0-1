一、起步  
#如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用。  
#webpack4 默认会将与package.json同级的src文件下的index.js文件打包到同级的dist文件下  
二、管理资源  
#提取css，图片压缩，转换成base64，加载ttf、excel、json等文件  
三、管理输出  
#将入口文件直接打包到新生成的html中，并清理原来的dist文件夹中的文件  
四、开发环境  
#sourcemap  
#生产环境：source-map可以看到错误模块源码，nosources-source-map看不到错误模块源码，但两者的可以正确展示错误代码的行号  
#测试环境：没看出来啥区别都是vm+模块名  eval-source-map是官网推荐的方式  cheap-eval-source-map与eval-source-map打包之后sourcemap是一样的，但是前者构建速度快且只限行
#选定工具：
#使用 webpack-dev-middleware，以便根据需求添加更多自定义的配置