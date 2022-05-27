import React from "react";
import {Link} from "react-router-dom";
import {CopyrightOutlined, GithubOutlined} from "@ant-design/icons";
import "./style.less";

const Footer = () => {
  return (
    <div className="page_foot">
      <div>
        <span>
          <Link to="/home">Pro 首页</Link>
        </span>
        <span>
          <a href="https://github.com/huyoo/ant-design-fake">
            <GithubOutlined />
          </a>
        </span>
        <span>Ant Design Fake</span>
      </div>
      <div>&nbsp; <CopyrightOutlined /> &nbsp;2018&nbsp;大象银服山寨技术部出品</div>
    </div>
  );
};

export default Footer;
