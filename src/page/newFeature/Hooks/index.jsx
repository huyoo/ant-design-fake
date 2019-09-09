/**
 * Hooks
 * create by hy ON 2019/5/29
 */
import React, {Component, Fragment} from "react";
import HookChildA from "./HookChildA";
import ComponentHook from "./ComponentHook";

class HooksComponent extends Component{
	state= {
		childA: "",
		childB: ''
	};
	handleSelect = value => {
		this.setState({childA: value})
	};
	handleSelectB = value => {
		this.setState({childB: value})
	};
    render(){
    	return <Fragment>
		    <span>Hooks</span>
		    {/*组件A使用的是高阶组件进行扩展*/}
		    <div>
			    组件A:
			    <HookChildA onClick={this.handleSelect}/>
			    选择: {this.state.childA}
		    </div>
		    {/*组件B使用的是Hooks进行扩展*/}
		    <div>
			    组件B:
			    <ComponentHook onClick={this.handleSelectB}/>
			    选择: {this.state.childB}
		    </div>
	    </Fragment>
    }
}

export default HooksComponent;