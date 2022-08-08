import {SET_FILTER} from "./constants";

export const getTodosByFilter = (store, filter) => {
  switch(filter) {
    case SET_FILTER.FILTER_COMP:
      return store.jobs.filter(job => job.complete === true);
    case SET_FILTER.FILTER_ACT:
      return store.jobs.filter(job => job.complete === false);
    default:
      return store.jobs;
  }
}