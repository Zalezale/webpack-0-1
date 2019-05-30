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
五、模块热替换
#官网例子是基于webpack-dev-server，当前例子是基于webpack-dev-middleware，实时刷新的方式对js进行替换
六、tree shaking（通过中文常量来鉴别是否存在未使用的也被打包的现象）
#使用 ES2015 模块语法（即 import 和 export）
#在项目 package.json 文件中，添加一个 "sideEffects" 属性。（经过验证这项存并无存在意义）
#通过将 mode 选项设置为 production，启用 minification(代码压缩) 和 tree shakin
七、生产环境
#process.env.NODE_ENV在src目录下有效
#分离生产与测试的webpack-config配置
八、代码分离
#防止重复可以有效地将重复的代码抽离出来形成一个公共的js文件
#动态引入
#预取预存
#budle分析
九、懒加载
#通过用户的交互来触发动态引入js的时机
十、缓存
#将node_modules下面的需要使用的包打包成一个vendor，如若依赖不变，那么该vendor就不变，一直使用缓存，其他的文件改变不会影响vender名