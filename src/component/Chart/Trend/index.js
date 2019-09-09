/**
 * 带上升下降标识的数据展示栏
 * create by huyu_ ON 2019/2/22
 */
import React from "react"
import {Icon} from "antd";
import "./style.less"

const Trend = ({ className = '', style={}, title = '', data = 0, flag='up'}) => {
    return (
        <div className={`card-trend ${className}`} style={style}>
            {title}
            <span className='trend_data'>{data}</span>
            <span className={`card-trend-${flag}`}>
                <Icon type={`caret-${flag}`}/>
            </span>

        </div>
    )

};

export default Trend