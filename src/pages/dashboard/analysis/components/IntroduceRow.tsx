import React from "react";
import {Col, Progress, Row, Tooltip} from "antd";
import numeral from "numeral";
import {InfoCircleOutlined} from "@ant-design/icons";
import ChartCard from '@/pages/dashboard/analysis/components/Charts/ChartCard';
import Trend from "./base/Trend";
import Field from "@/pages/dashboard/analysis/components/Charts/Field";
import styles from "../styles.less";
import ViewChart from "@/pages/dashboard/analysis/components/Charts/ViewChart";
import PaymentNumber from "@/pages/dashboard/analysis/components/Charts/PaymentNumber";

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

const iconTip = (
  <Tooltip title="指标说明">
    <InfoCircleOutlined />
  </Tooltip>
);

export interface IntroduceRowProps {
  loading: boolean;
}

const IntroduceRow: React.FC<IntroduceRowProps> = (
  {
    loading = false
  }
) => {


  return (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          title="总销售额"
          action={iconTip}
          loading={loading}
          total={() => <span>¥{numeral(126560).format('0,0')}</span>}
          footer={<Field label="日销售额" value={`¥ ${numeral(12423).format('0,0')}`} />}
          contentHeight={46}
        >
          <Trend flag="up" style={{marginRight: 16}}>
            周同比
            <span className={styles.trendText}>12%</span>
          </Trend>
          <Trend flag="down">
            日同比
            <span className={styles.trendText}>11%</span>
          </Trend>
        </ChartCard>
      </Col>

      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="访问量"
          action={iconTip}
          total={numeral(8846).format('0,0')}
          footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
          contentHeight={46}
        >
          <ViewChart />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="支付笔数"
          action={iconTip}
          total={numeral(6560).format('0,0')}
          footer={<Field label="转化率" value="60%" />}
          contentHeight={46}
        >
          <PaymentNumber />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          loading={loading}
          bordered={false}
          title="运营活动效果"
          action={iconTip}
          total="78%"
          footer={
            <div style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>
              <Trend flag="up" style={{marginRight: 16}}>
                周同比
                <span className={styles.trendText}>12%</span>
              </Trend>
              <Trend flag="down">
                日同比
                <span className={styles.trendText}>11%</span>
              </Trend>
            </div>
          }
          contentHeight={46}
        >
          <Progress percent={78} strokeLinecap="butt" strokeColor="#1fc5c5" showInfo={false} />
        </ChartCard>
      </Col>
    </Row>
  );
};

export default IntroduceRow;
