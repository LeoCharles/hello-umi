import { Component } from 'react'
import Link from 'umi/link'
import withRouter from 'umi/withRouter'
import styles from './index.less'
import logo from 'public/img/logo.png'
import { Layout, Menu, Icon } from 'antd'

const { Header, Footer, Sider, Content} = Layout
const { SubMenu, Item } = Menu

class BasicLayout extends Component {
  componentDidUpdate(prevProps) {
    // 路由不同滚动到顶部
    if(this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  render () {
    // 登录页使用不同的 layout 
    if (this.props.location.pathname === '/login') {
      return <div>{ this.props.children }</div>
    }
    return (
      <Layout>
        <Sider className={styles.sider}>
          <div className={styles.logo}>
            <img alt="logo" src={logo} />
            <h1 className={styles.title}>Antd-Admin</h1>
          </div>
          <Menu
            className={styles.menu}
            theme="dark"
            mode="inline"
            defaultOpenKeys={['1']}>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard"/>Dashboard</span>}>
                <Item key="1"><Link to="/dashboard/analysis">分析页</Link></Item>
                <Item key="2"><Link to="/dashboard/mointor">监控页</Link></Item>
                <Item key="3"><Link to="/dashboard/workplace">工作台</Link></Item>
            </SubMenu>
            <Item key="4">
              <Icon type="team" />
              <Link to="/users"><span>用户管理</span></Link>
            </Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>header</Header>
          <Content className={styles.content}>{this.props.children}</Content>
          <Footer className={styles.footer}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )}
}

export default withRouter(BasicLayout);
