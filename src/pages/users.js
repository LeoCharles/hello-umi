import React, { Component } from 'react'
import { Table } from 'antd'
import { connect } from 'dva'

const namespace = 'users'

const mapStateToProps = (state) => {
  return {
    userList: state[namespace].list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDidMount: () => {
      dispatch({type: `${namespace}/queryUsers`})
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Users extends Component {
  componentDidMount() {
    this.props.onDidMount()
  }
  columns = [
    {
      title: '用户名',
      dataIndex: 'name',
    }, {
      title: '邮箱',
      dataIndex: 'email',
    }, {
      title: '电话',
      dataIndex: 'phone',
    }, {
      title: '操作'
    }
  ]
  render() {
    const { userList } = this.props
    return (
      <div>
        <Table
          dataSource={userList}
          columns={this.columns}
          rowKey={record => record.id}/>
      </div>
    )
  }
}

export default Users