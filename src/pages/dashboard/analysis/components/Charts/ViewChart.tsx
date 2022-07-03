import React, {useEffect, useRef} from "react";
import {throttle} from "lodash";
import * as echarts from "echarts";
import {useMemorizedFn} from "@/utils/hooks";
import {dateBeforeToday} from "@/pages/dashboard/analysis/util";

let saleChartInstance = null;

const chartOptions = {
  color: ['#9e6ae6'],
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

const ViewChart: React.FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    saleChartInstance = echarts.init(ref.current);

    const option = {
      ...chartOptions,
      series: [
        {
          smooth: true,
          type: 'line',
          data: [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5],
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#c3a3ef'
              },
              {
                offset: 1,
                color: '#f2ebfc'
              }
            ])
          },
        },
      ],
    };
    saleChartInstance.setOption(option);
  }, []);

  const resizeChart = useMemorizedFn(throttle(() => {
    saleChartInstance && saleChartInstance.resize();
  }, 33));

  useEffect(() => {
    window.addEventListener('resize', resizeChart);

    return () => {
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  return <div ref={ref} style={{height: 46}} />;
};

export default ViewChart;
