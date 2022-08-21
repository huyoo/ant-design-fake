import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import ResizeObserver from "rc-resize-observer";
import {EChartsType} from "echarts";
import {dateBeforeToday} from "@/pages/dashboard/analysis/util";

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
  const instance = useRef<EChartsType>(null);

  useEffect(() => {
    instance.current = echarts.init(ref.current);

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
    instance.current.setOption(option);
  }, []);

  return (
    <ResizeObserver onResize={() => instance.current.resize()}>
      <div ref={ref} style={{height: 46}} />
    </ResizeObserver>
  );
};

export default ViewChart;
