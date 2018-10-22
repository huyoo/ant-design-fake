import React, {Component} from "react"
import {Icon } from "antd"
import "antd/dist/antd.css"
import {Layout} from "antd"

const {Header} = Layout;

export default class ContentHeader extends Component{
    render(){
        return (
            <Header style={{backgroundColor: "white"}}>
                <Icon type="menu-fold" theme="outlined" />
            </Header>
        )
    }
}