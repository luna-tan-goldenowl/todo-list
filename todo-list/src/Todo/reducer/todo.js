import { ADD_JOB, DELETE_JOB} from '../constants'

export const initState = {
    jobs: []
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_JOB:{
            console.log("state: ", state)
            return {
                jobs: [
                    ...state.jobs,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        complete: false
                    }
                ]
            }
        }
        case DELETE_JOB: {
            const id = action.payload;
            const jobs = state.jobs.map(job => job.id === id ? {...job, complete: !job.complete} : job);
            return {jobs}
        }
         
        // case FILTER: {
        //     console.log("NHẬN FILTER")
        //     console.log('LOẠI FILTER', action.payload.filter)
        //     const jobs = [...state.jobs]
        //     return {jobs}
        // }
        default:{
            // const jobs = [...state.jobs]
            // return {jobs};
            return state;
        }
    }
}

export default reducer

