/**
 * create by huyoo ON 2019/1/10
 */
import React, {Fragment} from "react"
import {Breadcrumb, Steps} from "antd";
import "./StepForm.less"

const {Step} = Steps;

export default class StepForm extends React.Component{
    render(){
        const {children, currentStep} = this.props;
        return (
            <Fragment>
                <div className="head">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/home">首页</Breadcrumb.Item>
                        <Breadcrumb.Item>表单页</Breadcrumb.Item>
                        <Breadcrumb.Item>{"分布表单("+getTitle(currentStep)+")"}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="title">分布表单</div>
                    <div>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</div>
                </div>
                <div className="step-form-body">
                    <Steps current={currentStep}>
                        <Step title="填写转账信息" />
                        <Step title="确认转账信息" />
                        <Step title="完成" />
                    </Steps>
                    {children}
                </div>
            </Fragment>
        )
    }
}

function getTitle(value) {
    return {
        0: "填写转账信息",
        1: "确认转账信息",
        2: "完成"
    }[value] || value;
}