const ADD_ITEM = 'ADD_ITEM';

const initialForm = {
    name: '111',
    rate: "132"
};

export default function add(state = initialForm, action) {
    switch (action.type){
        case ADD_ITEM: {
            return {
                ...state,
                name: action.payload.name+"test"
            }
        }
        default:{
            return state;
        }
    }
}