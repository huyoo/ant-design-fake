import React, {PureComponent} from "react"
import {Layout} from "antd"
import "antd/dist/antd.css"
import SiderMenu from "../component/SiderMenu/SiderMenu"
import ContentHeader from "../component/ContentHeader/ContentHeader"
import Foot from "../component/Foot/Foot"

const {Content, Footer} = Layout;

export default class BasicLayout extends PureComponent {
    state = {
        collapsed: false
    };
    handleMenuCollapse = () => {
        console.log(1);
        this.setState({
            collapsed: !this.state.collapsed
        })
    };

    render() {
        const {collapsed} = this.state;

        return (
            <Layout>
                <SiderMenu collapsed={collapsed}/>
                <Layout>
                    <ContentHeader collapsed={collapsed} handleMenuCollapse={this.handleMenuCollapse}/>
                    <Content>{this.props.children}</Content>
                    <Footer>
                        <Foot/>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}