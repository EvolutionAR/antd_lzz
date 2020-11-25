import React from "react";
import { Form, Input, Button, Checkbox,Image } from 'antd';
import {getCityName,getCode,getLoginKey,login} from '../api'
import { fnencrypt } from '../utils/commonTool'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '1111', 
            lastGistUrl: '',
            baseUrl:'',
            publicKey:'',
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
       
        this.getCode = this.getCode.bind(this)
        this.onFinish = this.onFinish.bind(this)
        this.onFinishFailed = this.onFinishFailed.bind(this)
    }
    componentDidMount(){
       this.getCode()
       console.log('什么东西啊')
    }   
    onFinish = (values) => {
            let params = {}
            getLoginKey(params).then(res => {
              console.log(res)
              if (res.code === '0') {
                  this.setState({
                      publicKey:res.data
                  })
                // this.publicKey = res.data
                this.login(values,this.state.publicKey)
                // console.log(this.state.publicKey,'ssss')
              } else {
                this.$message('获取权限出错')
              }
            })
      
      }
    login(values){
        values.password = fnencrypt(values.password, this.state.publicKey)
        const body = values
        login(body).then(res=>{
          this.props.history.push('/home')
        })
    }
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
     handleClick() {
      getCityName({}).then(res =>{
       })
    }
    getCode(){
        getCode().then(res=>{
            this.setState({
                baseUrl:`data:image/gif;base64,${res.data.data}`
            })
            // this.state.baseUrl = `data:image/gif;base64,${res.data.data}`
            // console.log(this.state.baseUrl,res.data)
        })
    }
    render() {
      return <Form
      {...this.state.layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={this.onFinish}
      onFinishFailed={this.onFinishFailed}
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
      <Image src={this.state.baseUrl}/>
      <Form.Item
        label="验证码"
        name="code"
        rules={[{ required: true, message: '请输入验证码' }]}
      >
        <Input />
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