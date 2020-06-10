### Vant UI + Vue + Cli3.0 + Rem移动端项目搭建

#### 1. 创建`vue`项目

- 创建项目

```js
vue create vant-demo
```

- 引入`less` (通过`vue ui` 可视化页面安装依赖插件）

```js
vue ui
```

---

#### 2. 引入`vant ui`

```js
npm i vant -S
```

---

#### 3. 按需引入

##### 3-1. 安装`babel` 插件

```js
npm i babel-plugin-import -D
```

温馨提示：在使用自动按需引入的时候，在使用相关组件的时候，需要在`maim.js`中一一引入，如下：

```js
import { Button,Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup)
Vue.use(Button);
```

##### 3-2. 配置`babel.config.js`

```js
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
```

---

#### 4. `Rem`适配

##### 4-1. 安装`postcss-pxtorem`与`amfe-flexible`

```js
npm install postcss-pxtorem --save-dev
npm i -S amfe-flexible
```

##### 4-2. 配置`vue.config.js`

```js
module.exports = {
  lintOnSave: true,
  css: {
      loaderOptions: {
          postcss: {
              plugins: [
                  require('postcss-pxtorem')({
                      rootValue : 37.5, // 换算的基数
                      propList   : ['*'],
                  }),
                  require('autoprefixer')({
                    browsers: ['Android >= 4.0', 'iOS >= 8']
                  })
              ]
          }
      }
  	},
}
```

##### 4-3. 配置`main.js`

```js
import 'amfe-flexible/index.js'
```

---

### 5. 配置完成



