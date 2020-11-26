import React from "react";
import { Menu} from 'antd';
import {findMenuByUserId} from '../../api'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class LZmenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
          };
    }
    componentDidMount(){
        this.findMenuByUserId()
    }
    findMenuByUserId = ()=>{
        findMenuByUserId().then(res=>{
            console.log(res)
        })
    }
    toggleCollapsed = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
    };
    render() {
      return  <div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/home/users">users</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        <Link to="/home/tacos">tacos</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          nav 4
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}> 
          nav 5
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          nav 6
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
          nav 7
        </Menu.Item>
        <Menu.Item key="8" icon={<ShopOutlined />}>
          nav 8
        </Menu.Item>
      </Menu>
    </div>
    }
}