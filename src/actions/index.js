import axios from 'axios';

export const FETCH_OXFORD = 'FETCH_OXFORD';
export const FETCH_WEBSTER = 'FETCH_WEBSTER';
export const LOAD_FLASHCARD = 'LOAD_FLASHCARD';
export const CREATE_FLASHCARD = 'CREATE_FLASHCARD';
export const GET_FLASHCARDS = 'GET_FLASHCARDS';

export const fetchOxford = (word) => {
  const request = axios.get(`/oxford`, {
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
  const request = axios.get(`/webster`, {
    params: {
      word: word
    }
  });
     
  return {
    type: FETCH_WEBSTER,
    payload: request
  }
}

export const loadFlashcard = (card) => {
  return {
    type: LOAD_FLASHCARD,
    payload: card
  }
}

export const createFlashcard = (values, callback) => {
  const request = axios.post(`/flashcards/createCard`, values)
    .then(() => callback())
  
  return {
    type: CREATE_FLASHCARD, 
    payload: request
  }
}

export const getFlashcards = () => {
  const request = axios.get(`/flashcards/getflashcards`)
    

  return {
    type: GET_FLASHCARDS,
    payload: request
  }
}
