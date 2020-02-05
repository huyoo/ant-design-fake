/**
 * 加载动画
 * create by hy ON 2020/2/5
 */
import React, {Component} from "react";
import * as PropTypes from "prop-types";
import './Loading.less'

export default class Loading extends Component {
	static propTypes = {
		style: PropTypes.shape({
			position: PropTypes.oneOf(['position', 'relative', 'fixed']),
			margin: PropTypes.oneOfType([  PropTypes.string, PropTypes.number,]),
			padding: PropTypes.oneOfType([  PropTypes.string, PropTypes.number,]),
		})
	};

	render() {
		const {style} = this.props;

		return <div className='loading' style={style}>
			<div className='loading-center-absolute'>
				<div className='point point-top-left'/>
				<div className='point point-top-right'/>
				<div className='point point-bottom-left'/>
				<div className='point point-bottom-right'/>
			</div>
		</div>
	}
}
