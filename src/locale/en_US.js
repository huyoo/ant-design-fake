/**
 * create by huyoo ON 2019/2/20
 */
import menu from "./en_US/menu"
import form from "./en_US/form"
import analysis from "./en_US/analysis";
import exception from "./en_US/exception";
import globalHeader from "./en_US/globalHeader";
import login from "./en_US/login";
import monitor from "./en_US/monitor";
import result from "./en_US/result";
import settingDrawer from "./en_US/settingDrawer";
import settings from "./en_US/settings";
import pwa from "./en_US/pwa";

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