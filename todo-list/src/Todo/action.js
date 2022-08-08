import { ADD_JOB, DELETE_JOB, FILTER} from './constants'

let jobId = 0;

export const addJob = name => ({
    type: ADD_JOB,
    payload: {
        id: jobId++,
        name
    }
});

export const deleteJob = id=> ({
    type: DELETE_JOB,
    payload: id
})

export const filter = filter => {
    return {
    type: FILTER,
    payload: {filter}
    }
}

// export const filter_comp = filter_comp => {
//     return {
//     type: FILTER_COMP,
//     payload: {filter_comp}
//     }
// }

// export const filter_all = filter_all => {
//     return {
//     type: FILTER_ALL,
//     payload: {filter_all}
//     }
// }



