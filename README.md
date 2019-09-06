# 记录学习nodeJS的过程

## 基础知识
---
## node.js入门 :bowtie:
学node.js，我认为要先了解它的[历史](https://www.jianshu.com/p/4e45641123dc):smile:。  
##### - node.js问世于2009年  
##### - 2009年 提出了npm
##### - 2010年发布 express框架
##### - 2010年发布 socket.io
##### - 2013年 发布Koa框架
##### - 2016年 Yarn包管理器发布
#### 简介：  
node.js不是一门语言，不是库也不是框架，是一个Javascript运行时环境。  

它是基于 `Chrome Javascript` 运行时搭建的一个平台。  

node.js是用C++开发的，它是一个js运行时，刚才看了node.js作者的演讲，对node的理解更深了。node是基于v8引擎搭建的。作者强调，JS是在同一时间里面只能做一件事情，也就是说是单线程的。之所以我们在浏览器里面可以同时做多件事，是因为浏览器是多线程的，这就涉及到事件循环了  
:anguished: 让我惊讶的是，v8引擎中并没有setTimeout，ajax之类的api，但是我写的JS中使用了这些api，在浏览器中就可以运行，这是为什么呢，因为浏览器提供这些API啊笨蛋

node跟commonJS的关系：  
`node`应用由模块组成，采用`CommonJS`规范。（CommonJS是一种规范：模块化 `module.exports`, `require`）   
所谓规范，就好比ES规范，JS是对ES规范的实现  
2013年，npm作者宣布Node团队废弃CommonJS规范


#### 浏览器中的JS
+ ES
+ BOM
+ DOM

#### Node中的JS
+ ES
+ Node环境提供的API


#### nodeJS回调函数
+ 为什么说nodeJS是非阻塞式的呢 就是因为nodeJS中的所有API都带有回调函数，回调函数是对异步编程的最基本实现
+ 再说一次，为什么nodeJS是非阻塞式的呢  看看nodeJS官网的介绍

#### nodeJS事件循环
+ nodeJS这个环境是单线程单进程的，同一时间能只能执行一段代码，V8引擎提供的异步执行回调函数接口，通过这些接口可以大量的并发。
+ nodeJS中的事件机制都是观察者模式

#### JS实现异步编程的四种方式
+ ajax、io等异步接口（异步回调
+ 事件监听
+ promise
+ setTimeout

#### 阻塞与非阻塞概述
> “I/O”主要指与libuv支持的系统磁盘和网络的交互。
##### 阻塞

+ 阻塞是指nodeJS进行中执行JS时，必须等到同步操作完成。
+ nodeJS的标准库中提供的API都有非阻塞式的异步版本，并且接受回调函数。有些方法也有阻塞式版本，它们的名称以 `sync` 结尾  
    + Node.js主要分为四大部分，Node Standard Library，Node Bindings，V8，Libuv，架构图如下:  
![nodeJS架构](https://note.youdao.com/yws/public/resource/202e81f1551b8e4682fd5a1a4b70dfb0/xmlnote/C9ED58720B9D4938808A047D8CB90925/2386) 
+ Node Standard Library 是我们每天都在用的标准库，如Http, Buffer 模块。
+ Node Bindings 是沟通JS 和 C++的桥梁，封装V8和Libuv的细节，向上层提供基础API服务。
+ 这一层是支撑 Node.js 运行的关键，由 C/C++ 实现。
    +  V8 是Google开发的JavaScript引擎，提供JavaScript运行环境，可以说它就是 Node.js 的发动机。
    + Libuv 是专门为Node.js开发的一个封装库，提供跨平台的异步I/O能力.
    + C-ares：提供了异步处理 DNS 相关的能力。
    + http_parser、OpenSSL、zlib 等：提供包括 http 解析、SSL、数据压缩等其他的能力。

#### nodeJS EventEmitter
+ 官网之所以说nodeJS是事件驱动，因为nodeJS中几乎所有对象都是由事件产生的。事件产生器的父类是`EventEmitter`
```
var EventEmitter = require('events').EventEmitter
var event = new EventEmitter()

var listener1 = function() {
  console.log('1触发')
}

var listener2 = function() {
  console.log('2触发')
}

event.on('connection',listener1)
event.addListener('connection',listener2)

var num = event.listenerCount('connection')
console.log(num,'监听器个数')

var arr = event.listeners('connection')
console.log(arr,'监听器数组')

event.emit('connection')

event.removeListener('connection',listener1)

console.log('------------------------------')

event.emit('connection')
```

+ 大多时候我们不会直接使用 `EventEmitter`，而是在对象中继承它。包括`fs`、`net`、`http` 在内的，只要是支持事件响应核心模块都是 `EventEmitter` 的子类
    + 为什么要这么做呢？ 原因有两点：
        + 首先具有某个实体功能的对象实现事件符合语义，事件监听和触发应该是一个对象的方法
        + 其次，JS的对象机制是基于原型的，支持**部分多重继承**，继承 `EventEmitter` 不会打乱原有的继承关系

#### nodeJS Buffer
+ JS语言自身只有字符串数据类型，不支持二进制数据类型  
但在处理TCP、文件这种stream文件时，需要处理二进制，因此在nodeJS中定义了buffer类，用来创建一个存放二进制数据的**缓存区**  
+ Buffer类为nodeJS提供了存储二进制数据的方法，一个Buffer类似于一个整数数组，但它对应于V8堆内存之外的一块原始内存

##### nodeJS 目前支持的字符编码
+ ascii - 仅支持7位ASCII数据
+ utf8  - 多字节编码的Unicode字符
+ utf16le
+ ucs2
+ base64
+ latin1
+ binary
+ hex

##### 创建一个Buffer实例
```
const buf = Buffer.from('myname','utf8') 
const buf = Buffer.alloc()
```

##### 写入缓存区
```
buf.write(string[,offset[,length[,encoding])
buf.write('hemengke',0,10,'utf8')
```
+ string - 写入缓存区的字符串
+ offset - 缓存区开始写入的索引值，默认为0
+ length - 写入的字节数 默认写入的string的长度
+ encoding - 使用什么编码 默认utf8

师爷，翻译翻译，什么叫惊喜？   :smirk:   
惊喜就是： 用utf8字符编码把'hemengke'写入到buf的第0个位置

##### 从缓存区读取数据
```
buf.toString([encoding[,start[,end])
buf.toString('utf8',0,10)
```
+ encoding - 使用的什么编码 默认utf8
+ start - 从哪个位置开始读取 默认0
+ end - 读到哪个位置结束 默认结尾

##### 把Buffer对象转换成JSON对象
```
buf.toJSON()
```

+ 还有很多方法 不一一介绍了，用的时候再看

#### nodeJS Stream
Stream是一个抽象接口，Node中有很多对象实现了这个接口。  
Node.js，Stream 有四种流类型：
+ Readable - 可读操作
+ Writable - 可写操作
+ Duplex - 可读可写操作
+ Transform - 操作被写入数据，然后读出结果  

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
+ data - 当有数据可读时触发
+ end - 没有更多的数据可读时触发
+ error - 在接收和写入过程中发生错误时触发
+ finish - 所有数据已被写入到底层系统时触发

##### 从流中读取数据
```
var fs = require('fs')
var myData = ''

// 创建可读流
var readerStream = fs.createReadStream('./test.txt')

// 用什么方式读取这个文件流
readerStream.setEncoding('utf8')

// 注册事件
readerStream.on('data',function(chunk){
  console.log(chunk,'chunk')
  myData += chunk
})
readerStream.on('end',function() {
  console.log(myData)
})

readerStream.on('error',function() {
  console.log('error')
})

readerStream.on('finish',function() {
  console.log('finished')
})

```

结果：
```
nodeJS之stream操作 chunk
nodeJS之stream操作
```

还有
+ 写入流
+ 管道流 （复制一个流到另外一个流）
+ 链式流


#### nodeJS 模块系统
+ `exports.<模块名> = ....`
+ ` module.exports = ....... `
    + exports 和 module.exports 的使用

       + 如果要对外暴露属性或方法，就用 `exports` 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 `module.exports`

引入时： `require('名字') from '文件路径'`

require时:  

![require流程图](https://www.runoob.com/wp-content/uploads/2014/03/nodejs-require.jpg)

#### nodeJS 函数

+ 具名函数作为参数
+ 匿名函数作为参数

#### nodeJS 路由

初步认识


```
server.js

var http = require('http')
var url = require('url');

function start(route) {
  http.createServer((request,response)=>{
    var pathname = url.parse(request.url).pathname
    console.log(pathname,'pathname')
    route(pathname)
    response.writeHead(200,{"Content-Type": "text/plain"})
    response.write('Hello,world')
    response.end()
  }).listen(8888)
  console.log('server start')
}
module.exports = start
```

```
router.js

function route(pathname) {
  console.log('this is router:',pathname)
}

module.exports = route
```

```
index.js

var server = require('./server')
var route = require('./router');

server(route)
```

```
控制台输出

server start
/ pathname
this is router: /
/favicon.ico pathname
this is router: /favicon.ico
```

#### nodeJS全局对象

全局对象的属性是全局变量，在浏览器中全局变量是windows，nodeJS中全局变量是global

全局对象最关键的作用是**作为全局属性的宿主**  
全局属性分为：  
+ 全局对象的属性
+ 定义在最外层的属性
+ 没有声明直接赋值的属性

第二点，咱们是没法实现的，因为node中我们写的代码都是模块化的，不可能在最外层

#### 全局属性和方法：

##### __filename
```
console.log(__filename)

输出: D:\github\test\index.js
```

##### __dirname
```
console.log(__dirname)

输出: D:\github\test
```
...

+ setTimeout
+ clearTimeout
+ setInterval
+ console
+ process
+ 

#### nodeJS 工具库

`util` 是nodeJS的核心模块之一，为了弥补JS过于精简的不足

##### util.inherits

`util.inherits(constructor, superConstructor)` 是一个实现对象间原型继承的函数

```
const util = require('util');

function base() {
  this.name = 'base'
  this.age = 19;
  this.say = ()=> {
    console.log('hello world')
  }
}
base.prototype.init = ()=>{
  console.log('this is init');
}

function son(){
  this.name = 'son'
}
util.inherits(son,base)

const sonOBJ = new son()
sonOBJ.init() // 输出 this.is init
sonOBJ.say()  // 报错，没有say()方法
```

##### util.inspect

`util.inspect(object,[showHidden],[depth],[colors])` 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象

```
console.log(util.inspect(sonOBJ,true)); 
输出: son { name: 'son' }
```
##### util.isArray(Object)

```
util.isArray([])  // true
util.isArray({})  // false
```

##### 更多
+ `util.isRegExp(object)`
+ `util.isDate(object)`
+ `util.isError(object)`


#### nodeJS 文件系统

`const fs = require('fs')`

fs提供的api都有异步和同步两种，同步的api以 `Sync` 结尾

```
const fs = require('fs');

fs.readFile('./test.html',(error,data)=>{
  if(error) {
    console.log('发生错误')
    return;
  }
  console.log(data)  // 1
  console.log(data.toString()) // 2
})

1 输出: <Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0d 0a 3c 68 74 6d 6c 20 6c 61 6e 67 3d 22 65 6e 22 3e 0d 0a 3c 68 65 61 64 3e 0d 0a 20 20 3c 6d 65 74 61 ... >
2 输出: 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

</body>
</html>
```
可见data是一个Buffer对象

##### 打开文件
`fs.open(path, flags[, mode], callback)`

参数解释
+ path:  打开的文件的路径
+ flags： 打开文件的方式
+ mode： 设置文件的模式权限
+ callback： 回调函数

flags:
+ r	- 以读取模式打开文件。如果文件不存在抛出异常
+ .... google

##### 获取文件类型
`fs.stat(path,callback)`

##### 写文件
`fs.writeFile(file, data[, options], callback)`

##### 读文件
`fs.read(fd, buffer, offset, length, position, callback)`

##### 更多
+ 关闭文件
+ 截取文件
+ 删除文件
+ 创建目录
+ .....

#### nodeJS get/post请求

##### 获取get请求的内容

```
const http = require('http');
const url = require('url');

function go() {
  http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/plain"})
    res.end(util.inspect(url.parse(req.url,true)))
  }).listen(8888)
}

go()
```

+ 在浏览器中请求 localhost:8888/user?id=1&name=he
    + url.parse作用： 把url转换为url对象
    + util.inspect的作用：对象转字符串
    + 输出
    
```
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?id=1&name=he',
  query: [Object: null prototype] { id: '1', name: 'he' },
  pathname: '/user',
  path: '/user?id=1&name=he',
  href: '/user?id=1&name=he' }
```



#### 工具模块

+ os
+ path
+ net
+ dns
+ domain

#### web模块

##### web服务器
```
const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req,res)=>{
  const pathname = url.parse(req.url).pathname
  console.log('request for',pathname)
  fs.readFile('./test.html',(err,data)=>{
    if(err) {
      res.writeHead(404,{"Content-Type":"text/html"})
    }
    res.end(data.toString())
  })
}).listen(8088)
```

```html
test.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>hello world</h1>
</body>
</html>
```

##### web客户端



