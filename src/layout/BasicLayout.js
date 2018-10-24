import React, {PureComponent} from "react"
import {Layout} from "antd"
import "antd/dist/antd.css"
import  SiderMenu from "../component/SiderMenu/SiderMenu"
import ContentHeader from "../component/ContentHeader/ContentHeader"
import Foot from "../component/Foot/Foot"

const { Content, Footer} = Layout;

export default class BasicLayout extends PureComponent{
    render(){
        return (
            <Layout>
                <SiderMenu />
                <Layout>
                    <ContentHeader/>
                    <Content>{this.props.children}</Content>
                    <Footer>
                        <Foot/>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}