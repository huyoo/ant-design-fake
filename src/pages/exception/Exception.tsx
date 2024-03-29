import React from "react";
import config from './typeConfig';
import {Link} from "react-router-dom";
import {Col, Row} from "antd";
import style from "./style.less";
import {FormattedMessage} from "react-intl";

interface ExceptionProp {
  type: string;
  title?: string;
  img?: string;
  link?: string;
  desc?: string
}

const Exception: React.FC<ExceptionProp> = ({type, img, link, title, desc}) => {
  return (
    <Row className={style.exception}>
      <Col sm={24} md={12} xl={{span: 12, offset: 1}}>
        <div className="exception-img" style={{backgroundImage: `url(${img || config[type].img})`}} />
      </Col>
      <Col className="exception-content" sm={24} md={12} xl={{span: 8, offset: 1}}>
        <h1><FormattedMessage id={config[type].title} defaultMessage={title} /></h1>
        <h2><FormattedMessage id={config[type].desc} defaultMessage={desc} /></h2>
        <Link to={link || '/'}>
          <button className="ant-btn ant-btn-primary"><FormattedMessage id="global.backHome" /></button>
        </Link>
      </Col>
    </Row>
  );
};

export default Exception;
