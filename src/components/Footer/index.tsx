/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-08-17
 */
import React from "react";
import {Link} from "react-router-dom";
import {CopyrightOutlined, GithubOutlined} from "@ant-design/icons";
import "./style.less"

const Footer = () => {
  return (
    <div className="page_foot">
      <div>
        <span>
            <Link to="/home">Pro 首页</Link>
        </span>
        <span>
            <a href="https://github.com/ant-design/ant-design-pro">
              <GithubOutlined/>
            </a>
        </span>
        <span>Ant Design</span>
      </div>
      <div>Copyright &nbsp; <CopyrightOutlined/> &nbsp;2018&nbsp;蚂蚁金服体验技术部出品</div>
    </div>
  )
}

export default Footer;
