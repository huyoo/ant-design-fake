/**
 * create by huyu_ ON 2019/1/10
 */
import React from "react"
import StepForm from "./StepForm";
import {Form, Button, Alert} from "antd";
import "./StepForm.css"
import {connect} from "react-redux";

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        md: { span:8},
        sm: { span: 9},
        xs: { span: 24}
    },
    wrapperCol: {
        md: { span: 9},
        sm: { span: 12},
        xs: { span: 24}
    }
};

@connect(state => ({
    data: state.stepForm
}))
@Form.create()
export default class StepConfirmForm extends React.Component{
    handleNext = () => {
        this.props.history.push("/form/step-form/result");
    };
    handlePre = () =>{
        this.props.history.push("/form/step-form/info");
    };
    render(){
        const {data, form:{getFieldDecorator}} = this.props;

        return (
            <StepForm currentStep={1}>
                <Form>
                    <FormItem style={{marginTop: 20}} {...formItemLayout} >
                        <Alert closable
                               type="info"
                               message="确认转账后，资金将直接打入对方账户，无法退回。"/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="付款账户">
                        {data.payAccount}
                    </FormItem>
                    <FormItem {...formItemLayout} label="收款账户">
                        {data.receiverAccount}
                    </FormItem>
                    <FormItem {...formItemLayout}  label="收款人姓名">
                        {data.name}
                    </FormItem>
                    <FormItem {...formItemLayout}  label="转账金额">
                        <span>{data.money}</span>
                        <span>五百元人民币整</span>
                    </FormItem>
                    <FormItem {...formItemLayout} label=" " colon={false}>
                        <Button type="primary" onClick={this.handleNext}>提交</Button>
                        <Button onClick={this.handlePre}>上一步</Button>
                    </FormItem>
                </Form>
            </StepForm>
        )
    }
}