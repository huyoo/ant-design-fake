/**
 * 菜单配置文件
 */
import BasicForm from "../page/form/BasicForm/BasicForm";
import TableList from "../page/list/TableList";
import Carousel from "../page/demo/carousel/Carousel";
import StepInfoForm from "../page/form/StepForm/Step1";
import StepConfirmForm from "../page/form/StepForm/Step2";
import StepResult from "../page/form/StepForm/Step3";
import Analysis from "../page/dashboard/Analysis";
import {Exception403, Exception404, Exception500} from "../page/exception"
import Context from "../page/newFeature/Context";
import HooksComponent from "../page/newFeature/Hooks";
import AutoTable from "../page/component/AutoTable";
import BasicLayout from "../layout/BasicLayout";
import Game from "../page/demo/game/game";

export default [
    {
        name: "dashboard",
        icon: "dashboard",
	    component: BasicLayout,
        routes: [{
            path: "/dashboard/analysis",
            name: "分析页",
            component: Analysis,
        }]
    }, {
        name: "表单页",
        icon: "form",
		component: BasicLayout,
        routes: [{
            path: "/form/basic-form",
            component: BasicForm,
            name: "基础表单",
        }, {
            path: "/form/step-form/info",
            name: "分步表单",
            component: StepInfoForm,
            hideChildInMenu: true,
            routes: [{
                path: "/form/step-form/confirm",
                component: StepConfirmForm,
            },{
                path: "/form/step-form/result",
                component: StepResult,
            }]
        }]
    },
	{
        name: "列表页",
        icon: "table",
		component: BasicLayout,
        routes: [{
            name: "查询表格",
            path: "/list/table-list",
            component: TableList,
            hideChildInMenu: true,
            routes: [{
                name: "查询表格",
                path: "/list/table-list",
                component: TableList,
            }]
        }]
    },
	{
        name: "异常页",
        icon: "warning",
		component: BasicLayout,
        routes: [{
            path: "/exception/403",
            component: Exception403,
            name: "403",
        }, {
            path: "/exception/404",
            component: Exception404,
            name: "404",
        }, {
            path: "/exception/500",
            component: Exception500,
            name: "500",
        }]
    }, {
		name: "新功能",
		icon: "more",
		component: BasicLayout,
		routes: [{
			path: "/feature/context",
			name: "Context",
			component: Context,
		}, {
			path: "/feature/hooks",
			name: "Hooks",
			component: HooksComponent,
		}]
	}, {
		name: "组件库",
		icon: "build",
		component: BasicLayout,
		routes: [{
			path: "/component/auto-height-table",
			name: "AutoHeightTable",
			component: AutoTable,
		}]
	},
	{
        name: "demo",
        icon: "gift",
		component: BasicLayout,
        routes: [{
            path: "/demo/carousel",
            name: "轮滚图",
            component: Carousel,
        }, {
	        path: "/demo/game",
	        name: "五子棋",
	        component: Game,
        }]
    }
]