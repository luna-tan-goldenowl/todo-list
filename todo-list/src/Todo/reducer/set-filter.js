import { TASK} from "../actionType";

const initState = TASK.SET_FILTER.FILTER_ALL;

const setFilter = (state = initState, action) => {
    switch(action.type) {
        case TASK.FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
}

export default setFilter;