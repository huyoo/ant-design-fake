/**
 * 顶部信息
 * create by huyoo ON 2019/2/22
 */

import React from "react"
import {Card, Col, Icon, Row, Tooltip} from "antd"
import {Chart, Geom} from "bizcharts"
import intl from 'react-intl-universal'
import Trend from "../../../component/Chart/Trend";
import LineProgress from "../../../component/Chart/LineProgress";

export default class HeadRow extends React.Component {
    render() {
        const {loading = true} = this.props;
        const colLayout = {xs: 24, md: 12, xl: 6};
        const data = [
            {
                year: "1951 年",
                sales: 38
            },
            {
                year: "1952 年",
                sales: 52
            },
            {
                year: "1956 年",
                sales: 61
            },
            {
                year: "1957 年",
                sales: 145
            },
            {
                year: "1958 年",
                sales: 48
            },
            {
                year: "1959 年",
                sales: 38
            },
            {
                year: "1960 年",
                sales: 38
            },
            {
                year: "1962 年",
                sales: 38
            }
        ];
        const cols = {
            sales: {
                tickInterval: 20
            }
        };
        return (
            <Row>
                <Col {...colLayout}>
                    <Card loading={loading}>
                        <div className="analysis_card_title">
                            <span>{intl.get('app.analysis.total-sales')}</span>
                            <Tooltip title={intl.get('app.analysis.introduce')}>
                                <Icon type="info-circle-o"/>
                            </Tooltip>
                        </div>
                        <p className='analysis_card_content'>¥{'123,111'}</p>
                        <Row className='analysis_card_chart'>
                            <Col lg={12} xs={12}>
                                <Trend title={intl.get('app.analysis.week')} data={` 12%`} flag={'up'}/>
                            </Col>
                            <Col lg={12} xs={12}>
                                <Trend title={intl.get('app.analysis.day')} data={` 11%`} flag={'down'}/>
                            </Col>
                        </Row>
                        <div className='analysis_card_foot'>{
                            `${intl.get('app.analysis.day-sales')} ￥ ${'12,423'}`
                        }</div>
                    </Card>
                </Col>

                {/*访问量*/}
                <Col {...colLayout}>
                    <Card loading={loading}>
                        <div className="analysis_card_title">
                            <span>{intl.get('app.analysis.visits')}</span>
                            <Tooltip title={intl.get('app.analysis.introduce')}>
                                <Icon type="info-circle-o"/>
                            </Tooltip>
                        </div>
                        <p className='analysis_card_content'>¥{'8,888'}</p>
                        <div className='analysis_card_chart'>
                            <Chart height={42}
                                   data={data}
                                   scale={cols}
                                   forceFit
                                   padding={{left: 0, right: 50}}>
                                <Geom type="area" position="year*sales"/>
                            </Chart>
                        </div>
                        <div className='analysis_card_foot'>{
                            `${intl.get('app.analysis.day-visits')}  1,423`
                        }</div>
                    </Card>
                </Col>

                {/*支付笔数*/}
                <Col {...colLayout}>
                    <Card loading={loading}>
                        <div className="analysis_card_title">
                            <span>{intl.get('app.analysis.payments')}</span>
                            <Tooltip title={intl.get('app.analysis.introduce')}>
                                <Icon type="info-circle-o"/>
                            </Tooltip>
                        </div>
                        <p className='analysis_card_content'>¥{'6,660'}</p>
                        <div className='analysis_card_chart'>
                            <Chart height={42}
                                   data={data}
                                   scale={cols}
                                   forceFit
                                   padding={{left: 0, right: 50}}>
                                <Geom type="interval" position="year*sales"/>
                            </Chart>
                        </div>

                        <div className='analysis_card_foot'>{
                            `${intl.get('app.analysis.conversion-rate')}  50%`
                        }</div>
                    </Card>
                </Col>

                {/*活动效果*/}
                <Col {...colLayout}>
                    <Card loading={loading}>
                        <div className="analysis_card_title">
                            <span>{intl.get('app.analysis.operational-effect')}</span>
                            <Tooltip title={intl.get('app.analysis.introduce')}>
                                <Icon type="info-circle-o"/>
                            </Tooltip>
                        </div>
                        <div className='analysis_card_content'>78%</div>
                        <div className='analysis_card_chart' style={{paddingTop: 10}}>
                            <LineProgress data={78}/>
                        </div>
                        <div className='analysis_card_foot'>
                            <Trend title={intl.get('app.analysis.week')}
                                   data={` 12%`}
                                   flag={'up'}/>

                            <Trend title={intl.get('app.analysis.day')}
                                   data={` 11%`}
                                   flag={'down'}/>
                        </div>
                    </Card>
                </Col>
            </Row>
        )
    }
}