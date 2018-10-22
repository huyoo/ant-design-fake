import React, {PureComponent} from "react"
import {Layout} from "antd"
import "antd/dist/antd.css"
import  SiderMenu from "../component/SiderMenu/SiderMenu"

const { Content} = Layout;

export default class BasicLayout extends PureComponent{
    render(){
        return (
            <Layout>
                <SiderMenu />
                <Layout>
                    <Content>{this.props.children}</Content>
                </Layout>
            </Layout>
        )
    }
}