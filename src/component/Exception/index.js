/**
 * create by huyu_ ON 2019/2/24
 */
import React from "react"
import config from './typeConfig'
import {Link} from "react-router-dom";
import intl from 'react-intl-universal'
import {Col, Row} from "antd";
import "./style.less"

const Exception = ({type, img, link, title, desc}) => {
    return (
        <Row className='exception'>
            <Col sm={24} md={12} xl={{span: 12, offset: 1}} >
                <div className='exception-img' style={{backgroundImage: `url(${img || config[type].img})`}}/>
            </Col>
            <Col className='exception-content' sm={24} md={12} xl={{span: 8, offset: 1}}>
                <h1>{title || config[type].title}</h1>
                <h2>{desc || config[type].desc}</h2>
                <Link to={link || '/'}>
                    <button className='ant-btn ant-btn-primary'>{intl.get('app.exception.back')}</button>
                </Link>
            </Col>
        </Row>
    )
};

export default Exception;