import React, {Component} from "react"

export default class SliderItem extends Component{
    render(){
        const {href, title, src}= this.props;
        return (
            <div>
                <a href={href}><img alt={title} src={src}/></a>
            </div>
        )
    }
}