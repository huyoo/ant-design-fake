/**
 * create by huyoo ON 2019/2/20
 */
import menu from "./zh_CN/menu"
import form from "./zh_CN/form"
import settings from "./zh_CN/settings";
import analysis from "./zh_CN/analysis";
import pwa from "./zh_CN/pwa";
import settingDrawer from "./zh_CN/settingDrawer";
import login from "./zh_CN/login";
import monitor from "./zh_CN/monitor";
import exception from "./zh_CN/exception";
import result from "./zh_CN/result";
import globalHeader from "./zh_CN/globalHeader";

export default {
    ...analysis,
    ...exception,
    ...form,
    ...globalHeader,
    ...login,
    ...menu,
    ...monitor,
    ...result,
    ...settingDrawer,
    ...settings,
    ...pwa,
};