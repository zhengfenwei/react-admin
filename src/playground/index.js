import React, { Component } from 'react'

import Table from 'rc-table'

export default class App extends Component {
  onBtnClick(data) {
    console.log(data)
  }

  render() {

    const columns = [{
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    }, {
      title: 'Body',
      dataIndex: 'body',
      key: 'body'
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
    const data = [{
      title: 1,
      body: 11
    }, {
      title: 2,
      body: 22
    }]

    return (
      <Table columns={columns} data={data}></Table>
    )
  }
}
