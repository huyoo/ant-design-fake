import {useRef} from "react";

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
