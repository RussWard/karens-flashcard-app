import axios from 'axios';

export const FETCH_OXFORD = 'FETCH_OXFORD';
export const FETCH_WEBSTER = 'FETCH_WEBSTER';

export const fetchOxford = (word) => {
  const request = axios.get(`http://localhost:3000/oxford`, {
    params: {
      word: word
    }
  });
     
  return {
    type: FETCH_OXFORD,
    payload: request
  }
}

export const fetchWebster = (word) => {
  const request = axios.get(`http://localhost:3000/webster`, {
    params: {
      word: word
    }
  });
     
  return {
    type: FETCH_WEBSTER,
    payload: request
  }
}