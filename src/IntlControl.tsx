import React, {useMemo} from "react";
import {observer} from "mobx-react";
import {useStores} from "@/stores";
import zhCN from "@/locales/zh-CN";
import enUS from "@/locales/en-US";
import {IntlProvider} from "react-intl";

const IntlControl: React.FC<React.PropsWithChildren> = (props) => {
  const {login: {locale}} = useStores();

  const msg = useMemo(() => {
    return {
      'zh-CN': zhCN,
      'en-US': enUS,
    }[locale] || zhCN;
  }, [locale]);

  return (
    <IntlProvider locale={locale || 'zh-CN'} messages={msg}>
      {props.children}
    </IntlProvider>
  );
};

export default observer(IntlControl);
