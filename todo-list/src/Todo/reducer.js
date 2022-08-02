import {SET_JOB, ADD_JOB, DELETE_JOB, FILTER_ACTIVE, FILTER_COMP} from './constants'

export const initState = {
    job: '',
    jobs: [],
    complete: []
}

const reducer = (state, action) => {
    switch(action.type) {
    case SET_JOB:
            return {
            ...state,
            job: action.payload
        }
    case ADD_JOB:
        console.log(state.complete)
        return {
            ...state,
            jobs: [...state.jobs, action.payload],
            complete: [...state.complete, false]
        }
    case DELETE_JOB:
        const newJobs = [...state.jobs];
        return {
            ...state,
            jobs: newJobs,
            complete: state.complete.fill(true, action.payload, action.payload + 1)
        }
    case FILTER_ACTIVE: 
        let arr_act = []
        state.complete.forEach((element,index) => {
            if(element === false)
            {
                arr_act.push(state.jobs[index])
            }
        });
        return {
            ...state,
            jobs: arr_act
        }
    case FILTER_COMP:
        let arr_com = [];
        state.complete.forEach((element,index) => {
            if(element === true)
            {
                arr_com.push(state.jobs[index])
            }
        });
        return {
            ...state,
            jobs: arr_com
        }
    default:
        throw new Error('Invalid action.')
    }
}

export default reducer

