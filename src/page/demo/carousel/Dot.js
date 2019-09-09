import React, {Component} from "react"

export default class Dot extends Component{

    render(){
        let {current, total, clickHandle} = this.props,
            items =[];

        for(let i=0;i<total;i++){
            items.push(<span key={i}
                             onClick={()=> clickHandle(i)}
                             className={current===i? "current hand":"hand"}/>)
        }
        return (
            <div className="dot">{items}</div>
        )
    }
}