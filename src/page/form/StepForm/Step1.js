/**
 * create by huyoo ON 2019/1/10
 */
import React from "react"
import StepForm from "./StepForm";
import {Button, Divider, Form, Input, Select} from "antd";
import "./StepForm.less"
import {connect} from "react-redux";

const FormItem = Form.Item, {Option}=Select;
const formItemLayout = {
    labelCol: {
        sm: { span: 8},
        xs: { span: 24}
    },
    wrapperCol: {
        md: { span: 9},
        sm: { span: 12},
        xs: { span: 24}
    }
};

@connect(state  => ({
    formValue: state.stepForm
}))
@Form.create()
class StepInfoForm extends React.Component{
    handleNext = () => {
        const {dispatch, form:{validateFields}} = this.props;

        validateFields((err, values) => {
            if(err) return;
            dispatch({
                type: "NEXT",
                data: values
            });
            this.props.history.push("/form/step-form/confirm");
        });
    };
    render(){
        const {getFieldDecorator} = this.props.form;

        return (
            <StepForm currentStep={0}>
                <Form>
                    <FormItem style={{marginTop: 20}} {...formItemLayout} label="付款账户">
                    {getFieldDecorator('payAccount', {
                        initialValue: "ant-design@alipay.com",
                        rules: [{ required: true, message: '请选择付款账户' }],
                    })(
                        <Select placeholder="test@example.com">
                            <Option value="ant-design@alipay.com">ant-design@alipay.com</Option>
                        </Select>
                    )}
                </FormItem>
                    <FormItem {...formItemLayout} label="收款账户">
                        <Input.Group compact>
                            <Select defaultValue="alipay" style={{ width: 100 }}>
                                <Option value="alipay">支付宝</Option>
                                <Option value="bank">银行账户</Option>
                            </Select>
                            {getFieldDecorator('receiverAccount', {
                                initialValue: "test@example.com",
                                rules: [
                                    { required: true, message: '请输入收款人账户' },
                                    { type: 'email', message: '账户名应为邮箱格式' },
                                ],
                            })(<Input style={{ width: 'calc(100% - 100px)' }} placeholder="test@example.com" />)}
                        </Input.Group>
                    </FormItem>
                    <FormItem {...formItemLayout}  label="收款人姓名">
                        {getFieldDecorator("name", {
                            rules: [{
                                required: true,
                                message: "不能为空"
                            },{
                                whitespace: false,
                                message: "禁止使用空格"
                            }],
                            initialValue: "Alex"//this.props.formState.name ||
                        })(<Input  placeholder="请输入收款人姓名"/>)}
                    </FormItem>
                    <FormItem {...formItemLayout}  label="转账金额">
                        {getFieldDecorator("money", {
                            rules: [{
                                required: true,
                                message: "不能为空"
                            },{
                                pattern: /^\d*$/,
                                message: "请输入合法的金额"
                            }],
                            initialValue: 500//this.props.formState.name
                        })(<Input prefix="¥"  placeholder="请输入金额"/>)}
                    </FormItem>
                    <FormItem {...formItemLayout} label=" " colon={false}>
                        <Button type="primary" onClick={this.handleNext}>下一步</Button>
                    </FormItem>
                </Form>
                <Divider style={{margin: "20px 0",backgroundColor: "#e8e8e8"}}/>
                <div className="step-form-tip">
                    <p>说明</p>
                    <p>转账到支付宝账户</p>
                    <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
                    <p>转账到银行卡</p>
                    <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
                </div>
            </StepForm>
        )
    }
}

export default StepInfoForm;

/**
 * 不使用装饰器 use redux without decorator
 */
// const mapStateToProps = state => {
//     console.log(state);
// };
// const mapDispatchToProps = (dispatch) => {
//     console.log(dispatch);
//     return {
//         setFormValue: data => dispatch({
//             type: "NEXT",
//             data: data
//         })
//     }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(StepInfoForm);