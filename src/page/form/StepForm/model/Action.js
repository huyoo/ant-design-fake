/**
 * create by huyu_ ON 2019/1/14
 */

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type){
        case "NEXT":
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}