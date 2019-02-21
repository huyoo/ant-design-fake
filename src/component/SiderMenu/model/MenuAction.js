/**
 * 菜单点击
 * create by huyoo ON 2019/2/21
 */

export default function handleClick(state = ['000', '00'], action) {
    switch (action.type){
        case 'CLICK': return action.data;
        default: return state;
    }
}