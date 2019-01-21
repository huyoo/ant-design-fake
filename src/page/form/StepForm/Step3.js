/**
 * create by huyu_ ON 2019/1/10
 */
import React from "react"
import StepForm from "./StepForm";
import {Button} from "antd";
import "./StepForm.css"

export default class StepResult extends React.Component{
    handleNext = () => {
        this.props.history.push("/form/step-form/info");
    };
    handlePreview = () =>{};

    render(){

        return (
            <StepForm currentStep={2}>
                <div className="">√</div>
                <div style={{width: 200, margin:"0 auto"}}>
                    <Button type="primary" onClick={this.handleNext}>再转一笔</Button>
                    <Button style={{marginLeft: 10}} onClick={this.handlePreview}>查看账单</Button>
                </div>
            </StepForm>
        )
    }
}