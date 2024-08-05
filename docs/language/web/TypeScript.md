---
title: TypeScript
toc: content
order: 2
group: 
  title: 前端语言
  order: 2
---

# TypeScript
&emsp;详情:<https://baike.baidu.com/item/typescript/4314718?fr=ge_ala>  

&emsp;TypeScript是微软开发的一个开源的编程语言，通过在JavaScript的基础上添加静态类型定义构建而成。TypeScript通过TypeScript编译器或Babel转译为JavaScript代码，可运行在任何浏览器，任何操作系统。  

&emsp;TypeScript添加了很多尚未正式发布的ECMAScript新特性（如装饰器 [2]）。2012年10月，微软发布了首个公开版本的TypeScript，2013年6月19日，在经历了一个预览版之后微软正式发布了正式版TypeScript。当前最新正式版本为TypeScript 5.2, 2023年8月发布

## 编码示例
```typescript
// 定义一个简单的TypeScript类
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting + "!";
  }
}

// 使用类
let greeter = new Greeter("World");
console.log(greeter.greet()); // 输出: Hello, World!
```
