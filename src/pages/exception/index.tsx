import React from "react"
import config from './typeConfig'
import {Link} from "react-router-dom";
// import intl from 'react-intl-universal'
import {Col, Row} from "antd";
import style from "./style.less"

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
        <div className='exception-img' style={{backgroundImage: `url(${img || config[type].img})`}}/>
      </Col>
      <Col className='exception-content' sm={24} md={12} xl={{span: 8, offset: 1}}>
        <h1>{title || config[type].title}</h1>
        <h2>{desc || config[type].desc}</h2>
        <Link to={link || '/'}>
          <button className='ant-btn ant-btn-primary'>后退</button>
        </Link>
      </Col>
    </Row>
  )
};

export default Exception;

export const Exception404 = () => <Exception type='404'/>;
export const Exception403 = () => <Exception type='403'/>;
export const Exception500 = () => <Exception type='500'/>;
