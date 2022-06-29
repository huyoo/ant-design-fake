// import {EllipsisOutlined} from "@ant-design/icons";
// import {Menu} from "antd";
import type {RangePickerProps} from "antd/es/date-picker/generatePicker";
import React, {FC, useState} from "react";
import SalesCard, {TimeType} from "./components/SalesCard";
import moment from "moment";
import {getTimeDistance} from "@/utils/tools";
import styles from "./styles.less";
import IntroduceRow from "@/pages/dashboard/analysis/components/IntroduceRow";

type RangePickerValue = RangePickerProps<moment.Moment>['value'];
// type SalesType = 'all' | 'online' | 'stores';

const Analysis: FC = () => {

  // const [salesType, setSalesType] = useState<SalesType>('all');
  // const [currentTabKey, setCurrentTabKey] = useState<string>('');
  const [rangePickerValue, setRangePickerValue] = useState<RangePickerValue>(
    getTimeDistance('year'),
  );

  // const { loading, data } = useRequest(fakeChartData);
  const [data] = useState<any>({
    offlineData: []
  });

  const selectDate = (type: TimeType) => {
    setRangePickerValue(getTimeDistance(type));
  };

  const handleRangePickerChange = (value: RangePickerValue) => {
    setRangePickerValue(value);
  };

  const isActive = (type: TimeType) => {
    if (!rangePickerValue) {
      return '';
    }
    const value = getTimeDistance(type);
    if (!value) {
      return '';
    }
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0] as moment.Moment, 'day') &&
      rangePickerValue[1].isSame(value[1] as moment.Moment, 'day')
    ) {
      return styles.currentDate;
    }
    return '';
  };

  // let salesPieData;
  // if (salesType === 'all') {
  //   salesPieData = data?.salesTypeData;
  // } else {
  //   salesPieData = salesType === 'online' ? data?.salesTypeDataOnline : data?.salesTypeDataOffline;
  // }

  // const menu = (
  //   <Menu>
  //     <Menu.Item>操作一</Menu.Item>
  //     <Menu.Item>操作二</Menu.Item>
  //   </Menu>
  // );

  // const dropdownGroup = (
  //   <span>
  //     <Dropdown overlay={menu} placement="bottomRight">
  //       <EllipsisOutlined />
  //     </Dropdown>
  //   </span>
  // );
  //
  // const handleChangeSalesType = (e: RadioChangeEvent) => {
  //   setSalesType(e.target.value);
  // };
  //
  // const handleTabChange = (key: string) => {
  //   setCurrentTabKey(key);
  // };
  //
  // const activeKey = currentTabKey || (data?.offlineData[0] && data?.offlineData[0].name) || '';

  return (
    <>
      <IntroduceRow loading={false} />
      <SalesCard
        rangePickerValue={rangePickerValue}
        salesData={data?.salesData || []}
        isActive={isActive}
        handleRangePickerChange={handleRangePickerChange}
        loading={false}
        selectDate={selectDate}
      />
    </>
  );
};

export default Analysis;
