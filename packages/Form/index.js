// 导入组件，组件必须声明 name
import PHForm from './src'

// 为组件提供 install 安装方法，供按需引入
PHForm.install = function (Vue) {
  Vue.component(PHForm.name, PHForm)
}

// 导出组件
export default PHForm