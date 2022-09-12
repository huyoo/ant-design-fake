import React, {FC} from "react";
import UserBar from "@/pages/dashboard/workplace/components/UserBar";
import {observer} from "mobx-react";
import {useStores} from "@/stores";
import styles from "./styles.less";

const Workplace:FC = () => {
  const {login:{userInfo}} = useStores();

  return (
    <div className={styles.container}>
      <UserBar currentUser={userInfo} />
    </div>
  );
};

export default observer(Workplace);
