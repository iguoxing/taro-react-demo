import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
// eslint-disable-next-line import/first
import { AtButton, AtSegmentedControl } from 'taro-ui'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // eslint-disable-next-line react/sort-comp
  constructor (){
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  handleClick (value) {
    console.log(value)
    this.setState({
      current: value
    })
  }

  render () {
    return (
      <View className='index'>
        <AtSegmentedControl
          values={['关注页', '发现页']}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
        {this.state.current===0?<view>关注页内容</view>:null}
        {this.state.current===1?<view>发现页内容</view>:null}
      </View>
    )
  }
}
