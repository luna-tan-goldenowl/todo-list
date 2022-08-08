import {TASK} from '../constants/'

export const initState = {
    jobs: []
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case TASK.ADD_JOB:{
       const id=new Date().getTime()
            return {
                jobs: [
                    ...state.jobs,
                    {
                        id,
                        name: action.payload.name,
                        complete: false
                    }
                ]
            }
        }
        case TASK.DELETE_JOB: {
            const id = action.payload;
            const jobs = state.jobs.map(job => job.id === id ? {...job, complete: !job.complete} : job);
            return {jobs}
        }      
        default:{
            return state;
        }
    }
}

export default reducer

