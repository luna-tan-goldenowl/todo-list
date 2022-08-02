import {SET_JOB, ADD_JOB, DELETE_JOB, FILTER_ACTIVE, FILTER_COMP} from './constants'

export const setJob = payload => {
    return {
    type: SET_JOB,
    payload
    }
}

export const addJob = payload => {
    return {
    type: ADD_JOB,
    payload
    }
}

export const deleteJob = payload => {
    return {
    type: DELETE_JOB,
    payload
    }
}

export const filter_active = payload => {
    return {
    type: FILTER_ACTIVE,
    payload
    }
}

export const filter_comp = payload => {
    return {
    type: FILTER_COMP,
    payload
    }
}