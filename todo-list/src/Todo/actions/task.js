import {TASK} from '../constants'

export const addJob = name => ({
    type: TASK.ADD_JOB,
    payload: {
        name
    }
});

export const deleteJob = id=> ({
    type: TASK.DELETE_JOB,
    payload: id
})

export const filter = filter => {
    return {
    type: TASK.FILTER,
    payload: {filter}
    }
}

const Action = {
    addJob,
    deleteJob,
    filter
};

export default Action;




