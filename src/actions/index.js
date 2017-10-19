import axios from 'axios';

export const FETCH_OXFORD = 'FETCH_OXFORD';

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