import BasicForm from "../page/form/BasicForm/BasicForm";
import TableList from "../page/list/TableList";
import ImgPage from "../page/ImgPage";
import Home from "../page/Home";

/**
 * 菜单配置文件
 */
export default [
    /*{
        name: "dashboard",
        icon: "dashboard",
        
        routes: [{
            path: "/",
            name: "分析页",
            
        }, {
            path: "/",
            name: "监控页",
            
        }, {
            path: "/",
            name: "工作台",
            
        }]
    },*/ {
        name: "表单页",
        icon: "form",
        routes: [{
            path: "/form/basicForm",
            component: BasicForm,
            name: "基础表单",
        }, {
            // path: "/",
            name: "分步表单",
        }]
    }, {
        name: "列表页",
        icon: "table",
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
        }, {
            // path: "/",
            name: "标准列表",
        }, {
            // path: "/",
            name: "卡片列表",
        }, {
            name: "搜索列表",
            // hideChildInMenu: true,
            routes: [{
                // path: "/",
                name: "搜索列表(项目)",
            }, {
                // path: "/",
                name: "搜索列表(文章)",
            }, {
                // path: "/",
                name: "搜索列表(应用)",
            }]
        }]
    }, {
        name: "demo",
        icon: "gift",
        routes: [{
            path: "/carousel",
            name: "轮滚图",
            component: ImgPage,
        }]
    },{
        name: "首页",
        hideInMenu: true,
        path: "/",
        component: Home
    }
]