import {RangePickerProps} from "antd/es/date-picker/generatePicker";
import moment from "moment";

export const formatNumber = (num: number) => {
  return num.toString().replace(/(?!^)(?=(\d{3})+$)/g, ',');
};

type RangePickerValue = RangePickerProps<moment.Moment>['value'];

/**
 * 计算时间巨鹿
 * @param {string} type 日期类型
 * @return {RangePickerValue} value
 */
export function getTimeDistance(type: 'today' | 'week' | 'month' | 'year'): RangePickerValue {
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment(now), moment(now.getTime() + (oneDay - 1000))];
  }

  if (type === 'week') {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime() - day * oneDay;

    return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
  }
  const year = now.getFullYear();

  if (type === 'month') {
    const month = now.getMonth();
    const nextDate = moment(now).add(1, 'months');
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();

    return [
      moment(`${year}-${(month + 1).toString().padStart(2, '0')}-01 00:00:00`),
      moment(moment(`${nextYear}-${(nextMonth + 1).toString().padStart(2, '0')}-01 00:00:00`).valueOf() - 1000),
    ];
  }

  return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
}

export const localStorageUtil = {
  setItem(key, value) {
    localStorage.setItem(key, value);
  },
  getItem(key) {
    return localStorage.getItem(key);
  },
  clear() {
    localStorage.clear();
  }
};

/**
 * 多语言 localStorage 存储
 */
export const intlStorage = {
  setValue(value) {
    localStorageUtil.setItem('fake-locale-value', value);
  },
  getValue() {
    return localStorageUtil.getItem('fake-locale-value') || 'zh-CN';
  }
};
