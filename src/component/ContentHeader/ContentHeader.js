import React, {Component} from "react"
import {Icon, Layout} from "antd"
import "antd/dist/antd.css"

const {Header} = Layout;
const style = {
    zIndex: 9,
    boxShadow: "0 1px 3px rgba(0,21,41,.15)",
    backgroundColor: "white"
};
export default class ContentHeader extends Component {
    render() {
        return (
            <Header style={style}>
                <span onClick={this.props.handleMenuCollapse}>
                    <Icon type={this.props.collapsed ? "menu-unfold" : "menu-fold"} theme="outlined"/>
                </span>
            </Header>
        )
    }
}