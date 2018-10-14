import { FETCH_JOBS, FETCH_DETAILED_JOB, CLEAR_DETAILED_JOB } from '../actions/jobs';
// import { mapKeys } from 'lodash';

export default function(state = { listing: [], selected: '' }, action) {
  switch(action.type) {
    case FETCH_JOBS:
      if (action.payload.data)
        // return { ...state, listing: mapKeys(action.payload.data, 'id') }
        return { ...state, listing: action.payload.data }
      break;
    case FETCH_DETAILED_JOB:
      if (action.payload.data)
        return { ...state, selected: action.payload.data }
      break;
    case CLEAR_DETAILED_JOB:
      return { ...state, selected: '' }
    default:
      return state;
  }
  return state;
}