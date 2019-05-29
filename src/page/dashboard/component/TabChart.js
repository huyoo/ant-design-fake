/**
 * create by huyu_ ON 2019/2/24
 */

import React from "react"
import {Col, DatePicker, Row, Tabs} from "antd";
import intl from 'react-intl-universal'
import {Axis, Chart, Geom, Tooltip} from "bizcharts";


const {TabPane} = Tabs, {RangePicker} = DatePicker;
const rankingListData = [];

for (let i = 0; i < 7; i += 1) {
    rankingListData.push({
        title: intl.get('app.analysis.test', {no: i}),
        total: '323,234',
    });
}

export default class TabChart extends React.Component {
    render() {
        const {
            isActive,
            selectDate,
            rangePickerValue,
            handleRangePickerChange
        } = this.props;

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
            <Tabs tabBarExtraContent={
                <div>
                    <div className='tab-extra-wrap'>
                        <a className={isActive('today')} onClick={() => selectDate('today')}>{
                            intl.get('app.analysis.all-day')
                        }</a>
                        <a className={isActive('week')} onClick={() => selectDate('week')}>{
                            intl.get('app.analysis.all-week')
                        }</a>
                        <a className={isActive('month')} onClick={() => selectDate('month')}>{
                            intl.get('app.analysis.all-month')
                        }</a>
                        <a className={isActive('year')} onClick={() => selectDate('year')}>{
                            intl.get('app.analysis.all-year')
                        }</a>
                    </div>
                    <RangePicker
                        value={rangePickerValue}
                        onChange={handleRangePickerChange}
                        style={{width: 256}}
                    />
                </div>
            }>
                <TabPane tab={intl.get('app.analysis.sales')} key="sales">
                    <Row>
                        <Col sm={24} md={12} xl={16}>
                            <span className="tab-chart-mar-50">{intl.get('app.analysis.sales-trend')}</span>
                            <Chart height={300}
                                   data={data}
                                   scale={cols}
                                   forceFit
                                   padding={{left: 80, bottom: 60, right: 30, top: 30}}>
                                <Axis name="year"/>
                                <Axis name="sales"/>
                                <Tooltip/>
                                <Geom type="interval" position="year*sales"/>
                            </Chart>
                        </Col>
                        <Col sm={24} md={12} xl={8}>
                            <span className='tab-chart-mar-50'>{intl.get('app.analysis.sales-ranking')}</span>
                            <ul className='tab-chart-rank'>
                                {rankingListData.map((item, i) => {
                                    return <li key={i}>
                                        <span className={i < 3 && 'active'}>{i + 1}</span>
                                        <span>{intl.get('app.analysis.test', {no: i})}</span>
                                        <span>{item.total}</span>
                                    </li>
                                })}
                            </ul>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab={intl.get('app.analysis.visits')} key="views">
                    <Row>
                        <Col sm={24} md={12} xl={16}>
                            <span className="tab-chart-mar-50">{intl.get('app.analysis.sales-trend')}</span>
                            <Chart height={300}
                                   data={data}
                                   scale={cols}
                                   forceFit
                                   padding={{left: 80, bottom: 60, right: 30, top: 30}}>
                                <Axis name="year"/>
                                <Axis name="sales"/>
                                <Tooltip/>
                                <Geom type="interval" position="year*sales"/>
                            </Chart>
                        </Col>
                        <Col sm={24} md={12} xl={8}>
                            <span className='tab-chart-mar-50'>{intl.get('app.analysis.sales-ranking')}</span>
                            <ul className='tab-chart-rank'>
                                {rankingListData.map((item, i) => {
                                    return <li key={i}>
                                        <span className={i < 3 && 'active'}>{i + 1}</span>
                                        <span>{intl.get('app.analysis.test', {no: i})}</span>
                                        <span>{item.total}</span>
                                    </li>
                                })}
                            </ul>
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        )
    }
}