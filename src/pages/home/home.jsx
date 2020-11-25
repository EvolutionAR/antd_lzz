import React from "react";
import { Layout, Breadcrumb  } from 'antd';
import LZmenu from './LZmenu'

const { Header, Content, Footer, Sider } = Layout;

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
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </Layout>
  </Layout>
    );
  }
}