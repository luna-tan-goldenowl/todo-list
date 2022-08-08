import { FILTER, SET_FILTER} from "../constants";

const initState = SET_FILTER.FILTER_ALL;

const setFilter = (state = initState, action) => {
    switch(action.type) {
        case FILTER: {
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