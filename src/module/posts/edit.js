import React, { Component } from 'react'
import Dialog from 'rc-dialog'
import Selector from 'component/selector'

export default class Edit extends Component {

  render() {
    return (
      <Dialog
        title={this.props.title}
        visible={this.props.open}
        style={this.props.style}
        maskClosable={false}
        onClose={this.props.onClose}
        footer={this.renderFooter()}
      >
        {this.props.isFetch ? <div>loading...</div> : this.renderBody()}
      </Dialog>
    )
  }
  renderBody() {
    return (
      <div>
        <Selector
          initValue={{
            id: 0,
            name: 'init'
          }}
          remote='posts'
        ></Selector>
      </div>
    )
  }
  renderFooter() {
    return (
      [
        <button type="button" className="btn btn-default"
                disabled={this.props.isSaving}
                key="close"
                onClick={this.props.onClose}
        >Close</button>
        ,
        <button type="button" className="btn btn-primary"
                disabled={this.props.isFetching || this.props.isSaving}
                key="save"
                onClick={this.props.onSave}
        >{this.props.isFetch ? 'Save...':'Save'}</button>
      ]
    )
  }
}
