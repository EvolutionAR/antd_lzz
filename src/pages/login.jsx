import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import {getCityName,singlePoetry} from '../api'
const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '1111', 
            lastGistUrl: '',
            layout : {
                labelCol: {
                  span: 8,
                },
                wrapperCol: {
                  span: 8,
                },
              },
              tailLayout :{
                wrapperCol: {
                  offset: 8,
                  span: 8,
                },
              }
        }
       
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
       this.handleClick()
       this.setState({username:'sdsadsa'})
       console.log('什么东西被调用了')
    }   
     handleClick() {
      getCityName({}).then(res =>{
       })
    }
    render() {
      return <Form
      {...this.state.layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="验证码"
        name="password2"
        rules={[{ required: true, message: '请输入验证码' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...this.state.tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...this.state.tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    }
}