import { Component } from 'react'
import './app.scss'
// eslint-disable-next-line import/first
import 'taro-ui/dist/style/index.scss'
// 全局引入一次即可

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
