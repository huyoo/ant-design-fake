import React from "react"
import Label from "../../base/label"

export default class OptionItem extends React.Component{
    render(){
        let {value, overHandles} = this.props;
        return (
            <div className="" onMouseOver={()=>overHandles()}>
                <Label left={true} value={value}/>
            </div>
        )
    }
}