import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
// eslint-disable-next-line import/first
import { AtCard, AtSegmentedControl,AtTabBar } from 'taro-ui'

export default class Index extends Component {
  // eslint-disable-next-line react/sort-comp
  constructor (){
    super(...arguments)
    this.state = {
      current: 0,
      subCurrent: 0,
      content: {}, // 内容
      segmentList: [
        {
          tagsData:[
            {
              title:'历史',
              content:{
                name:'历史内容',
                value: 'lishi'
              }
            },
            {
              title:'政治',
              content:{
                name:'政治内容',
                value: 'zhengzhi'
              }
            },
            {
              title:'地理',
              content:{
                name:'地理内容',
                value: 'dili'
              }
            },
          ]
        },
        {
          tagsData:[
            {
              title:'化学',
              content:{
                name:'化学内容',
                value: 'huaxue'
              }
            },
            {
              title:'物理',
              content:{
                name:'物理内容',
                value: 'wuli'
              }
            },
            {
              title:'生物',
              content:{
                name:'生物内容',
                value: 'shengwu'
              }
            },
          ]
        }
      ],
    }
  }

  componentWillMount () { }

  componentDidMount () {
    this.setState({
      content: this.state.segmentList[0].tagsData[0].content
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value) {
    console.log(value)
    this.setState({
      current: value,
      subCurrent:0 ,
      content: this.state.segmentList[value].tagsData[0].content
    })
  }

  chooseSecondTab (data){
    console.log(data)
    this.setState({
      subCurrent: data,
      content: this.state.segmentList[this.state.current].tagsData[data].content
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
        {this.state.content?<view>
          <AtCard
            note={this.state.content.value}
            extra={this.state.content.value}
            title={this.state.content.name}
            thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          >
            <Text>{this.state.content.name}</Text>
          </AtCard>
        </view>:null}
      </View>
    )
  }
}
