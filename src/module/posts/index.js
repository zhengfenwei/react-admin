import React, { Component } from 'react'

import TableView from './table'
import EditView from './edit'

export default class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      params: {},
      query: {},
      table: {
        isFetching: false,
        items: [],
        pageIndex: 0,
        totalCount: 0
      },
      edit: {
        open: false,
        isFetching: false,
        isSaving: false,
        params: {},
        formData: {}
      }
    }
  }

  componentDidMount() {
    this.queryTable()
  }

  render() {
    return (
      <div>
        <TableView
          {...this.state.table}
          onEditBtnClick={this.onEditBtnClick.bind(this)}
          onPageIndexChange={this.onPageIndexChange.bind(this)}
        ></TableView>
        <EditView
          {...this.state.edit}
          onClose={this.onEditCloseBtnClick.bind(this)}
          onSave={this.onEditSaveBtnClick.bind(this)}
        ></EditView>
      </div>
    )
  }

  updateState(scope, data={}) {
    this.setState(_.merge(this.state, {
      [scope]: data
    }))
  }

  //Table

  queryTable() {
    let root = 'http://jsonplaceholder.typicode.com'
    let path = 'posts'

    this.setState(_.merge(this.state, {
      table: {
        isFetching: true
      }
    }))

    return $.ajax({
      url: `${root}/${path}`,
      data: {
        // _start: state.table.pageIndex * state.table.pageSize,
        _limit: 20
      },
      context: this
    }).then(items => {
      this.updateState('table',{
        isFetching: false,
        items,
        totalCount: 300
      })
    })
  }

  onPageIndexChange(index) {
    this.updateState('table', {
      pageIndex: index - 1
    })
    this.queryTable()
  }

  //Edit
  onEditBtnClick(data) {
    this.updateState('edit', {
      open: true,
      isFetching: true,
      params: {...data}
    })
    setTimeout(() => {
      this.updateState('edit', {
        isFetching: false,
        formData: data
      })
    }, 3000)
  }
  onEditCloseBtnClick() {
    this.updateState('edit', {
      open: false
    })
  }
  onEditSaveBtnClick() {
    this.updateState('edit', {
      isSaving: true
    })
    setTimeout(() => {
      this.updateState('edit', {
        isSaving: false,
        open: false
      })
      this.queryTable()
    }, 3000)
  }
}
