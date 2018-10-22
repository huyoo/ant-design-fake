import React, {Component} from "react"
import {Link} from "react-router"
import {Form, Breadcrumb, Input, Button, Icon} from "antd"
import "antd/dist/antd.css"
import BasicLayout from "../../layout/BasicLayout"
import "./BasicForm.css"

const {Item} = Form;
export default class BasicForm extends Component{
    handleSubmit = e => {
        return null;
    }
    render(){
        return (
            <BasicLayout>
                <div className="head">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/home">首页</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>表单页</Breadcrumb.Item>
                        <Breadcrumb.Item>基础表单</Breadcrumb.Item>
                    </Breadcrumb>
                    <div>基础表单</div>
                    <div>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</div>
                </div>
                <div className="basic_form">
                    <Form onSubmit={this.handleSubmit}>
                        <Item>
                            <Input prefix={<Icon type="user"/>} placeholder="username"/>
                        </Item>
                        <Item>
                            <Input prefix={<Icon type="password"/>} placeholder="password"/>
                        </Item>
                    </Form>
                </div>
            </BasicLayout>
        )
    }
}