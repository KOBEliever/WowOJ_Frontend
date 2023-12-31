# WowOJ_Frontend

Wow OJ's frontend

### Environment prepare

> node.js version : `18` or `16`

Mac-node.js undergrade method(based on homebrew):

```
node -v //check the version
brew install node@18 //install wanted version
brew unlink node@xx //unlink old version
brew link --overwrite --force node@18 //switch to new version
node -v
```

> npm version : `9.5.1`

Mac-npm undergrade method:

```
sudo npm install npm@9.5.1 -g
```

### 项目初始化
> Vue CLI : https://cli.vuejs.org/zh/guide/

> arco.design : https://arco.design/vue/

### 前后端联调部分使用代码生成
> **openapi自动生成**  
> https://github.com/ferdikoomen/openapi-typescript-codegen

```
openapi --input ./spec.json --output ./generated --client xhr
```

macos报错 `zsh: command not found: openapi`

解决方案: 将openapi加入全局环境中`npm install -g openapi-typescript-codegen`

### 页面组件来源
* Markdown 编辑器
  * https://github.com/bytedance/bytemd
  * `npm i @bytemd/vue-next`
  * `npm i @bytemd/plugin-highlight @bytemd/plugin-gfm`
* 代码编辑器 monaco editor
  * https://github.com/microsoft/monaco-editor
  * https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md
  * `npm install monaco-editor`
  * vue-cli项目: https://github.com/microsoft/monaco-editor/blob/main/webpack-plugin/README.md `npm install monaco-editor-webpack-plugin`