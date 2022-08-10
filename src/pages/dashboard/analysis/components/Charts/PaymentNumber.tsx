import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {throttle} from "lodash";
import ResizeObserver from "resize-observer-polyfill";
import {useMemorizedFn} from "@/utils/hooks";
import {dateBeforeToday} from "@/pages/dashboard/analysis/util";

let saleChartInstance = null;

const chartOptions = {
  color: ['#6395f9'],
  xAxis: {
    show: false,
    type: 'category',
    data: dateBeforeToday(17)
  },
  grid: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  },
  yAxis: {
    show: false,
  },
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

const PaymentNumber: React.FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    saleChartInstance = echarts.init(ref.current);

    const option = {
      ...chartOptions,
      series: [
        {
          type: 'bar',
          data: [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]
        },
      ],
    };
    saleChartInstance.setOption(option);
  }, []);

  const resizeChart = useMemorizedFn(throttle(() => {
    saleChartInstance && saleChartInstance.resize();
  }, 33));

  useEffect(() => {
    const ro = new ResizeObserver(resizeChart);
    ro.observe(ref.current);

    return () => {
      ro.unobserve(ref.current);
    };
  }, []);

  return <div ref={ref} style={{height: 46}} />;
};

export default PaymentNumber;
