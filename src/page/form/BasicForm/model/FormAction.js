const ADD_ITEM = 'ADD_ITEM';

const initialForm = {
    name: '111',
    rate: 12.5
};

export default function add(state = initialForm, action) {
    switch (action.type){
        case ADD_ITEM: {
            return {
                ...state,
            }
        }
        default:{
            return state;
        }
    }
}