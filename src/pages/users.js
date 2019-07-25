import React, { Component } from 'react'
import { Card } from 'antd'
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
  render() {
    const { userList } = this.props
    return (
      <div>
        {
          userList.map(user => {
            return (
              <Card key={user.id}>
                {user.username}
              </Card>
            )
          })
        }
      </div>
    )
  }
}

export default Users