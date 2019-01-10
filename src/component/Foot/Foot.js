import React, {PureComponent} from "react"
import {Icon} from "antd"
import {Link} from "react-router-dom"
import "./Foot.css"

export default class Foot extends PureComponent{
    render(){
        return (
            <div className="page_foot">
                <div>
                    <span>
                        <Link to="/home">Pro 首页</Link>
                    </span>
                    <span>
                        <a href="https://github.com/ant-design/ant-design-pro" ><Icon type="github" theme="outlined" /></a>
                    </span>
                    <span>Ant Design</span>
                </div>
                <div>Copyright&nbsp;<Icon type="copyright" theme="outlined" />&nbsp;2018&nbsp;蚂蚁金服体验技术部出品</div>
            </div>
        )
    }
}