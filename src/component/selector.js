import React, { Component } from 'react'
import Select, { Option } from 'rc-select'

export default class Selector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: {...this.props.initValue}
    }
  }

  render() {
    return (
      <Select>
        <Option value="jack">jack</Option>
        <Option value="lucy">lucy</Option>
        <Option value="yiminghe">yiminghe</Option>

        {
          // _.map(this.state.items, (item) => {
          //   <Option value={item.id}>{item.name}</Option>
          // })
        }
      </Select>
    )
  }

  fetch() {
    let root = 'http://jsonplaceholder.typicode.com'

    return $.ajax({
      url: `${root}/${this.props.remote}`,
      data: {
        // _start: state.table.pageIndex * state.table.pageSize,
        _limit: 20
      },
      context: this
    }).then(items => {
      this.setState({ items })
    })
  }
}
