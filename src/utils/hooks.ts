import {MutableRefObject, useCallback, useEffect, useRef} from "react";
import {throttle} from "lodash";
import {EChartsType} from "echarts";

/*
 * 持久缓存函数
 */
export const useMemorizedFn = <T = Function>(fn: T): T => {
  const ref = useRef(null);

  ref.current = fn;

  const memorizedFn = useRef(null);

  if (!memorizedFn.current) {
    memorizedFn.current = (...args) => {
      ref.current && ref.current.apply(this, args);
    };
  }

  return memorizedFn.current as T;
};

/**
 * 响应式监听图表容器宽度变化，重新绘制图标内容
 * @param {MutableRefObject} ref dom Ref
 * @return {MutableRefObject} ref 存储的 echarts 图标实例
 */
// TODO 需要移除
export const useResizeChart = (ref: MutableRefObject<any>):MutableRefObject<EChartsType> => {
  const chartInstance = useRef(null);

  const resizeChart = useCallback(throttle(() => {
    chartInstance?.current && chartInstance.current.resize();
  }, 33), [chartInstance]);

  useEffect(() => {
    const ro = new ResizeObserver(resizeChart);

    ro.observe(ref.current);

    // TODO 卸载函数会报错
    // return () => {
    //   ro.unobserve(ref.current);
    // };
  }, []);

  return chartInstance;
};
