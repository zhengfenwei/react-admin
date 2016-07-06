import React, { Component } from 'react'

import Table from 'rc-table'
import Pagination from 'rc-pagination'

export default class TableView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.isFetching) {
      return <span>loading...</span>
    }

    return (
      <div>
        {this.renderTable()}
        {this.renderPager()}
      </div>
    )
  }
  renderTable() {
    return (
      <div>
        <Table columns={this.getColumnsData()} data={this.props.items}>
        </Table>
      </div>
    )
  }
  renderPager() {
    return (
      <Pagination
        showQuickJumper
        showTotal={total => {
              return `共 ${total} 条数据`
            }}
        current={this.props.pageIndex+1}
        total={this.props.totalCount}
        pageSize={20}
        onChange={this.props.onPageIndexChange}
      ></Pagination>
    )
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
                  onClick={()=> {
                    this.props.onEditBtnClick(data)
                  }}
          >操作</button>
        )
      }
    }]
  }

}
