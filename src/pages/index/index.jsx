import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
// eslint-disable-next-line import/first
import { AtButton, AtSegmentedControl,AtTabBar } from 'taro-ui'

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
      current: 0,
      subCurrent: 0,
      segmentList: [
        {
          tagsData:[
            {title:'历史'},
            {title:'政治'},
            {title:'地理'},
          ]
        },
        {
          tagsData:[
            {title:'化学'},
            {title:'物理'},
            {title:'生物'},
          ]
        }
      ],
    }
  }

  handleClick (value) {
    console.log(value)
    this.setState({
      current: value,
      subCurrent:0 ,
    })
  }

  chooseSecondTab (data){
    console.log(data)
    this.setState({
      subCurrent: data,
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
        <AtTabBar tabList={this.state.segmentList[this.state.current].tagsData}
          onClick={this.chooseSecondTab.bind(this)}
          current={this.state.subCurrent}
        ></AtTabBar>
      </View>
    )
  }
}
