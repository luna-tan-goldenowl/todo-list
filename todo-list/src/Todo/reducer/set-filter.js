import { TASK} from "../constants";

const initState = TASK.SET_FILTER.FILTER_ALL;

const setFilter = (state = initState, action) => {
    switch(action.type) {
        case TASK.FILTER: {
            console.log('hhhh', action.payload.filter)
            console.log('ggg', state)
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
}

export default setFilter;