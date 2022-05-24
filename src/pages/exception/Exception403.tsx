/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-08-17
 */
import React, {useEffect} from "react";
import Exception from "./Exception";

export default () => {
  useEffect(() => {
    console.log(111);
  }, []);

  return (
    <>
      <div>111</div>
      <Exception type="403" />
    </>
  );
};

