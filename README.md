```js
使用tsx和jsx有在引入一些插件和组件的写法上有一些不同
引用react的一些插件时不仅要下载插件还要下载插件的使用方式
例如：npm install redux thunk react-router-dom --save
同时要下载
  npm install @type/redux @type/thunk @type/react-router --save

  @type 主要作用是定义了 typescript怎么来使用redux thunk等这些插件

但是其他的js插件基本正常使用
  

tsx中写组件用到的数据需要先有接口定义数据类型详见src/pages/Login/Login.tsx



tslint 错误
 object access via string literals is disallowed

 instance.defaults.headers.common['token'] = localStorage.getItem('token');改为
 instance.defaults.headers.common.token = localStorage.getItem('token');


 常见报错修改

1./Users/liyajun/Documents/react/ts-react/node_modules/_@types_react@16.4.13@@types/react/index.d.ts
解决方法 把@types/react 升级到最新版本

2.使用typescript暂时没有解决项目不支持@connect修饰符的解决办法
 只能使用传统的方法就行连接reduex
// const mapStatetoProps=(state)=>{
//   return state
// };
// const actionCreators = {  addGun, removeGun,changeData };
// App = connect(mapStatetoProps,actionCreators)(App)


如何在VSCode中删除experimentalDecorators警告
tsconfig.json添加
"compilerOptions": {
        "experimentalDecorators": true,
        "allowJs": true
    }
 ```   
