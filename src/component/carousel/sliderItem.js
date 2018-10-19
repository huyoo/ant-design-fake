import React, {Component} from "react"

export default class SliderItem extends Component{
    constructor(){
        super();
        this.domName=null;
    }
    refHb(){
        console.log(this.domName.current);
    }
    render(){
        const {href, title, src}= this.props;
        return (
            <div>
                <a ref={ref=>{this.domName=ref;}} href={href}><img alt={title} src={src}/></a>
            </div>
        )
    }
}