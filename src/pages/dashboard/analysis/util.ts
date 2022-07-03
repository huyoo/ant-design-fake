import moment from "moment";

// 获取今天以前的日期，以字符串形式返回
export const dateBeforeToday: (number: number) => string[] = (number = 7) => {
  let today = moment();

  const dates = [];
  for (let i = 1; i <= number; i++) {
    today = today.add(-1, 'day');

    dates.unshift(today.format('MM-DD'));
  }

  return dates;
};
