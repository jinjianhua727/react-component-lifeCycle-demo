# react-component-lifeCycle-demo
通过console.log，打印出一个组件从创建、更新、消失的过程
## 安装
git clone https://github.com/jinjianhua727/react-component-lifeCycle-demo.git
## 运行
webpack-dev-server --open
## 效果
打开控制台

【Mounted】

【Mounted1】已设置默认属性hello：world

【Mounted2】已设置默认状态name：child

【Mounted3】componentWillMount

【Mounted4 & update4】render

【Mounted5】componentDidMount

【Update】

【update1】componentWillReceiveProps

【update2】shouldComponentUpdate

【update3】componentWillUpdata

【Mounted4 & update4】render

【update5】componentDidUpdate

【Unmount】删除子组件，触发子组件的componentWillUnmount

【Unmount1】componentWillUnmount

