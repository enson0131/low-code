# 低代码平台

## 如何开发

```shell

pnpm install

pnpm dev

```

# 低代码平台思路

各个低代码平台思路很多都是相似的，都是通过拖拽组件+配置组件配置栏生成类似 AST 抽象语法树的低代码数据，然后通过这个数据生成代码或生成应用。
而低代码平台核心难点是处理组件之间的交互，在这点上，各个平台差别很大。这个是要重点思考的。

参看了百度的 amis ，一个组件想和另外一个组件交互，直接在自身事件属性中，选中另外一个组件抛出的方法即可。

```json
{
  "type": "page",
  "body": [
      {
        "type": "input-text", // 一个基础输入框组件
        "name": "input1",
        "label": "我是一个输入框",
        "placeholder": "请输入",
      },
      {
      "type": "tpl",//一个展示数据的组件，类似html的<span>标签
      "text": "${input1}" // 需要展示的数据，通过${}+其他组件的name，即可拿到其他组件数据
    },
      
  ]
}
```

# Schema 数据结构

```json
{
  "type": "page", // 
  "body": [
    {
      "type": "input-text",
      "name": "input1",
      "label": "我是一个输入框",
      "placeholder": "请输入",
    }
  ]
}

```
`type`, `data`, `body` 这三个字段组成的 JSON 对象，便是一个 Schema，它由 `type` 字段作为标识，指明当前 Schema 是 `Page` 组件节点

根据不同的 type 渲染不同的组件

# 参考文章
- https://juejin.cn/post/7326432875955437579?searchId=20250523094352970A3216EE0258AAB14A
- 协议：https://juejin.cn/post/7326432875955437579?searchId=20250523094352970A3216EE0258AAB14A