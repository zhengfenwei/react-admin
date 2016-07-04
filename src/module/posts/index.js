import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTableIfNeed } from 'store/actions'

import Table from 'rc-table'

class Posts extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    // }
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchTableIfNeed('posts'))
  }

  render() {
    return (
      (this.props.items.length ?
          <Table columns={this.getColumnsData()} data={this.props.items}></Table>
          :
          <span>loading...</span>
      )
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
}

function select(state) {
  const { tableByPath={} } = state
  const {
    isFetching,
    items
  } = tableByPath['posts'] || {
    isFetching: true,
    items: []
  }
  return {
    isFetching,
    items
  }
}
export default connect(select)(Posts)
