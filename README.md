# Mustache模板解析引擎原理

## 1. 起步

### 1.1. 安装依赖

```
npm install
```

### 1.2. 启动项目

```
npm run dev
```

### 1.3. 查看项目演示

浏览器访问：http://localhost:8080

## 2. 目录结构

- public
  - index.html ：演示代码在此处，网页的入口
- src ：核心代码
  - js：mustache的实现源代码
    - lookup.js: 函数
    - mustache.js
    - paseTemplate2tokens.js：将模板转换成tokens
    - renderTemplate.js：将tokens转换为dom,并将数据填充进去
    - Scanner.js：用于将dom字符串解析成tokens的类

> 参考mustache语法源码思想,加深对mustache语法原理的认识!