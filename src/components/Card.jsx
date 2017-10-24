import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  
  return (
    <div >   
      <Link className="card" to={`/create_flashcard/${props.def.word}/${props.type}/${props.def.definition}`} >
        <div className="text-xs-center">
          {props.type}
        </div>
        <div>
          <em>{props.def.definition}</em>
        </div>
      </Link>
    </div>
  )
}


