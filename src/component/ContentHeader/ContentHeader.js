import React, {Component} from "react"
import {Icon } from "antd"
import "antd/dist/antd.css"
import {Layout} from "antd"

const {Header} = Layout;
const style= {
    zIndex: 99,
    boxShadow: "0 1px 3px rgba(0,21,41,.15)",
    backgroundColor: "white"
};
export default class ContentHeader extends Component{
    render(){
        return (
            <Header style={style}>
                <Icon type="menu-fold" theme="outlined" />
            </Header>
        )
    }
}