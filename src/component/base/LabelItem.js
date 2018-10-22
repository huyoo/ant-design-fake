import React, {Component} from "react";

//顶部栏label
export default class LabelItem extends Component{
    render(){
        return (
            <div className={this.props.left?"left": "right"}>
                <a title={this.props.name} href={this.props.value}>{this.props.name}</a>
            </div>
        )
    }
}