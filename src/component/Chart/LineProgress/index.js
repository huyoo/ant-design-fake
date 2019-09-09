/**
 * 线型进度条
 * create by huyu_ ON 2019/2/24
 */
import React from "react"
import "./style.less"

const LineProgress = ({data=0}) => {

    return (
        <div className='line-progress-content'>
            <div className='line-progress-line' style={{
                width: data+'%'
            }}/>
        </div>
    )
};

export default LineProgress;