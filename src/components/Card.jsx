import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  
  return (
    <div className="card" >   
      <Link to={`/flashcard/${props.def.word}/${props.type}/${props.def.definition}`} >{props.def.definition}</Link>
    </div>
  )
}


