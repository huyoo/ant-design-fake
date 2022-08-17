import React, {FC, useEffect, useMemo, useRef} from "react";
import {Card, Col, DatePicker, Row, Tabs} from "antd";
import type {RangePickerProps} from "antd/es/date-picker/generatePicker";
import type moment from 'moment';
import * as echarts from "echarts";
import {throttle} from "lodash";
import ResizeObserver from "resize-observer-polyfill";
import styles from '../styles.less';
import {formatNumber} from "@/utils/tools";
import {useMemorizedFn} from "@/utils/hooks";

type RangePickerValue = RangePickerProps<moment.Moment>['value'];
export type TimeType = 'today' | 'week' | 'month' | 'year';

const {RangePicker} = DatePicker;
const {TabPane} = Tabs;

const rankingListData: { title: string; total: number }[] = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 1323234,
  });
}

const chartOptions = {
  color: ['#6395f9'],
  xAxis: {
    data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  },
  grid: {
    top: '4%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  yAxis: {},
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    textStyle: {
      color: "#fff",
      align: "left",
      fontSize: 14,
    },
    backgroundColor: "rgba(0,0,0,0.8)",
  },
};

type SalesCardProps = {
  rangePickerValue: RangePickerValue;
  isActive: (key: TimeType) => string;
  salesData: any[];
  loading: boolean;
  handleRangePickerChange: (dates: RangePickerValue, dateStrings: [string, string]) => void;
  selectDate: (key: TimeType) => void;
}

let viewChartInstance = null;
let saleChartInstance = null;

const SalesCard: FC<SalesCardProps> = (
  {
    rangePickerValue,
    // salesData,
    isActive,
    handleRangePickerChange,
    loading,
    selectDate,
  }
) => {
  const saleRef = useRef(null);
  const viewRef = useRef(null);

  useEffect(() => {
    saleChartInstance = echarts.init(saleRef.current);

    const option = {
      ...chartOptions,
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [717, 426, 1139, 595, 1103, 817, 687, 586, 814, 821, 1062, 515]
        },
      ],
    };
    saleChartInstance.setOption(option);

    viewChartInstance = echarts.init(viewRef.current);
    const viewOption = {
      ...chartOptions,
      series: [
        {
          name: '访问量',
          type: 'bar',
          data: [717, 426, 1139, 595, 1103, 817, 687, 586, 814, 821, 1062, 515]
        },
      ],
    };
    viewChartInstance.setOption(viewOption);
  }, []);

  const resizeChart = useMemorizedFn(throttle(() => {
    saleChartInstance && saleChartInstance.resize();
    viewChartInstance && viewChartInstance.resize();
  }, 33));

  useEffect(() => {
    const ro = new ResizeObserver(resizeChart);
    ro.observe(saleRef.current);
    ro.observe(viewRef.current);

    // TODO 卸载函数会报错
    // return () => {
    //   ro.unobserve(saleRef.current);
    //   ro.unobserve(viewRef.current);
    // };
  }, []);

  // echarts 重新计算画布宽高
  const handleTabChange = () => {
    setTimeout(() => {
      resizeChart();
    }, 0);
  };

  const extraDom = (
    <div className={styles.salesExtraWrap}>
      <div className={styles.salesExtra}>
        <a className={isActive('today')} onClick={() => selectDate('today')}>
          今日
        </a>
        <a className={isActive('week')} onClick={() => selectDate('week')}>
          本周
        </a>
        <a className={isActive('month')} onClick={() => selectDate('month')}>
          本月
        </a>
        <a className={isActive('year')} onClick={() => selectDate('year')}>
          本年
        </a>
      </div>
      <RangePicker
        value={rangePickerValue}
        onChange={handleRangePickerChange}
        style={{width: 256}}
      />
    </div>
  );

  const listDom = useMemo(() => (
    <ul className={styles.rankingList}>
      {rankingListData.map((item, i) => (
        <li key={item.title}>
          <span className={`${styles.rankingItemNumber} ${i < 3 ? styles.active : ''}`}>
            {i + 1}
          </span>
          <span className={styles.rankingItemTitle} title={item.title}>
            {item.title}
          </span>
          <span className={styles.rankingItemValue}>
            {formatNumber(item.total)}
          </span>
        </li>
      ))}
    </ul>
  ), [rankingListData]);

  return (
    <Card loading={loading} bordered={false} bodyStyle={{padding: 0}}>
      <div className={styles.salesCard}>
        <Tabs
          tabBarExtraContent={extraDom}
          size="large"
          tabBarStyle={{marginBottom: 24}}
          onChange={handleTabChange}
        >
          <TabPane tab="销售额" key="sales">
            <Row>
              <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.salesBar}>
                  <div ref={saleRef} style={{height: 320}} />
                </div>
              </Col>
              <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.salesRank}>
                  <h4 className={styles.rankingTitle}>门店销售额排名</h4>
                  {listDom}
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="访问量" key="views" forceRender>
            <Row>
              <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.salesBar}>
                  <div ref={viewRef} style={{height: 320}} />
                </div>
              </Col>
              <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.salesRank}>
                  <h4 className={styles.rankingTitle}>门店访问量排名</h4>
                  {listDom}
                </div>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </Card>
  );
};

export default SalesCard;
