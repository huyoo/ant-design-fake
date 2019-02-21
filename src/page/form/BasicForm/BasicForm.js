import React, {Component} from "react"
import {connect} from "react-redux"
import intl from "react-intl-universal"
import {Breadcrumb, Button, DatePicker, Form, Icon, Input, InputNumber, Radio, Select, Tooltip, message} from "antd"
import BasicLayout from "../../../layout/BasicLayout"
import "./BasicForm.css"
import axios from "axios/index";

const { Item} = Form,
    { TextArea} = Input,
    { RangePicker } = DatePicker,
    { Group} = Radio,
    { Option} = Select;

const formItemLayout = {
    labelCol: {
        sm: { span: 7},
        xs: { span: 24}
    },
    wrapperCol: {
        md: { span: 9},
        sm: { span: 12},
        xs: { span: 24}
    }
};

@Form.create()
@connect(state => ({formState: state.form}))
export default class BasicForm extends Component{
    componentDidMount(){
        this.getList();
    }
    getList = () => {
        axios.post("/api/getForm")
            .then(re => {
                message.info('数据获取：'+JSON.stringify(re.data));
            })
            .catch(re => { message.error("获取数据异常") })
    };

    handleSubmit = e => {
        e.preventDefault();

        const {form, dispatch } = this.props;

        form.validateFieldsAndScroll((err, value) => {
            if (!err) {
                dispatch({
                    type: "ADD_ITEM",
                    payload: {...value}
                })
            }
        });
    };
    render(){
        const { form:{getFieldDecorator, getFieldValue}, formState} = this.props;

        return (
            <BasicLayout>
                <div className="head">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/home">首页</Breadcrumb.Item>
                        <Breadcrumb.Item>表单页</Breadcrumb.Item>
                        <Breadcrumb.Item>基础表单</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="title">基础表单</div>
                    <div>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</div>
                </div>
                <div className="basic_form">
                    <Form onSubmit={this.handleSubmit}>
                        <Item {...formItemLayout}  label={intl.get('form.title.label')}>
                            {getFieldDecorator("name", {
                                rules: [{
                                    required: true,
                                    message:  intl.get('validation.title.required')
                                },{
                                    whitespace: false,
                                    message: "禁止使用空格"
                                }],
                                initialValue: this.props.formState.name
                            })(<Input  placeholder={intl.get('form.title.placeholder')}/>)}
                        </Item>
                        <Item {...formItemLayout} label={intl.get('form.date.label')}>
                            {getFieldDecorator(["date1", "date2"], {
                                rules: [{
                                    required: true,
                                    message: intl.get('validation.date.required')
                                }]
                            })(<RangePicker style={{width: "100%"}} />)}
                        </Item>
                        <Item {...formItemLayout} label={intl.get('form.goal.label')}>
                            {getFieldDecorator("desc", {
                                rules: [{

                                }, {
                                    required: true,
                                    message: intl.get('validation.goal.required')
                                }]
                            })(<TextArea placeholder={intl.get('form.goal.placeholder')} rows={4}/>)}
                        </Item>
                        <Item {...formItemLayout} label={intl.get('form.standard.label')}>
                            {getFieldDecorator("standard", {
                                rules: [{
                                    required: true,
                                    message: intl.get('validation.standard.required')
                                }]
                            })(<TextArea placeholder={intl.get('form.standard.placeholder')}
                                         rows={4} />)}
                        </Item>
                        <Item {...formItemLayout} label={
                            <span>{intl.get('form.client.label')}
                                <span style={{color: "grey"}}>&nbsp;&nbsp;(选填)&nbsp;</span>
                                <Tooltip title={intl.get('form.client.label.tooltip')}>
                                    <Icon type="info-circle-o" style={{color:"grey"}}/>
                                </Tooltip>
                            </span>
                        }>
                            {getFieldDecorator("customer", {})(
                                <Input placeholder={intl.get('form.client.placeholder')}/>
                            )}
                        </Item>
                        <Item {...formItemLayout} label={
                            <span>
                                {intl.get('form.invites.label')}
                                <span style={{color:"grey"}}>&nbsp;&nbsp;(选填)&nbsp;</span>
                            </span>
                        }>
                            {getFieldDecorator("evaluator", {})(
                                <Input placeholder={intl.get('form.invites.placeholder')}/>
                            )}
                        </Item>
                        <Item {...formItemLayout} label={
                            <span>
                                {intl.get('form.weight.label')}
                                <span style={{color:"grey"}}>&nbsp;&nbsp;(选填)&nbsp;</span>
                            </span>
                        }>
                            {getFieldDecorator("rate", {})(
                                <InputNumber placeholder={intl.get('form.weight.placeholder')} min={0} max={100} />
                            )}
                            <span className="ant-form-text">%</span>
                        </Item>
                        <Item {...formItemLayout}
                              label={intl.get('form.public.label')}
                              help="客户、邀评人默认被分享">
                            <div>{
                                getFieldDecorator("public", {
                                    initialValue:1
                                })(<Group options={
                                    [{
                                        label: "公开",
                                        value: 1
                                    }, {
                                        label: "部分公开",
                                        value: 2
                                    },{
                                        label: "不公开",
                                        value: 3
                                    }]}
                                />)
                            }
                                <Item style={{
                                    marginBottom: 0,
                                    display: getFieldValue("public") === 2 ? "block": "none"
                                }}>
                                    {
                                        getFieldDecorator("publicUsers", {})(
                                            <Select mode="multiple" placeholder="公开给">
                                                <Option value="1">同事甲</Option>
                                                <Option value="2">同事乙</Option>
                                                <Option value="3">同事丙</Option>
                                            </Select>)
                                    }
                                </Item>
                            </div>
                        </Item>

                        <Item wrapperCol={
                            {
                                xs:{ span: 12, offset: 6},
                                sm: { span: 16, offset: 8}
                            }
                        }>
                            <Button type="primary" htmlType="submit">{intl.get('form.submit')}</Button>
                            <Button>{intl.get('form.save')}</Button>
                        </Item>
                    </Form>
                </div>
            </BasicLayout>
        )
    }
}