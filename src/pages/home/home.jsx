import React from "react";
import { Layout, Breadcrumb  } from 'antd';
import LZmenu from './LZmenu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from './user'
const { Header, Content, Footer, Sider } = Layout;
const routes = [
  {
    path: "/home/users",
    component: Users
  },
  {
    path: "/home/tacos",
    component: ssss,
  }
];
export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
    <Sider
      collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
      style={{
        overflow: 'auto',
        height: '100vh',
      }}
    >
      <div className="logo" />
      <LZmenu/>
    </Sider>
    <Layout className="site-layout">
    <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 , background:'#fff'}} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {routes.map((route, i) => (
                <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
             ))}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </Layout>
  </Layout>
    );
  }
}
function ssss(){
  return <div>
    ssss
  </div>
}