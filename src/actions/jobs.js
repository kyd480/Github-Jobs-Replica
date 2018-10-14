import axios from 'axios';
import { generateQueryParams } from '../helpers';

const ROOT_URL = '/positions';

export const FETCH_JOBS = 'FETCH_JOBS';
export const FETCH_DETAILED_JOB = 'FETCH_DETAILED_JOB';
export const CLEAR_DETAILED_JOB = 'CLEAR_DETAILED_JOB';

export function fetchJobs({ description = '', location = '', page = '' }) {
  const url = `${ROOT_URL}.json${generateQueryParams({ description, location, page })}`;

  console.log(url);
  const request = axios.get(url);

  return {
    type: FETCH_JOBS,
    payload: request
  }
}

export function fetchDetailedJob(id) {
  if (!id) {
    return {
      type: CLEAR_DETAILED_JOB,
      payload: ""
    }
  }

  const url = `${ROOT_URL}/${id}.json`
  const request = axios.get(url);

  return {
    type: FETCH_DETAILED_JOB,
    payload: request
  }
}
