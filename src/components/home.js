import React from "react";
import { Button } from 'antd';
import {getCityName,singlePoetry} from '../api'
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', lastGistUrl: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
      getCityName({}).then(res =>{
       })
    }
    render() {
      return <div>
                <h1>网站名称1221</h1>
                <Button onClick={this.handleClick}>点击</Button>
             </div>
    }
}