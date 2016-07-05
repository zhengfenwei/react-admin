import React, { Component } from 'react'

import Table from 'rc-table'
import Pager from 'rc-pager'

class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = this.getInitState()
  }

  getInitState() {
    return {
      items: [],
      pageIndex: 0,
      totalPage: 0
    }
  }

  render() {
    if (this.props.isFetching) {
      return <span>loading...</span>
    }

    return (
      <div>
        {
          <Table columns={this.getColumnsData()} data={this.props.items}></Table>
        }
        {
          <Pager
            total={this.props.totalPage}
            current={this.props.pageIndex}
            onSkipTo={this.pageIndexChange.bind(this)}
          ></Pager>
        }
      </div>
    )
  }

  onBtnClick(data) {
    console.log(data)
  }

  getColumnsData() {
    return [{
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    }, {
      title: '操作',
      key: 'ops',
      render: (text, data) => {
        return (
          <button className="btn btn-link"
                  onClick={this.onBtnClick.bind(this, data)}
          >操作</button>
        )
      }
    }]
  }

  pageIndexChange(pageIndex) {

  }
}

export default Posts
