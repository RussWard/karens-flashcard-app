import React from 'react';

export default (props) => {


  return (
    <div className="col-sm-6">
      <h2 className="text-xs-center">{props.provider}</h2>
      <h5 className="text-xs-center">Word: {props.word}</h5>
      <h5 className="text-xs-center">Type: {props.type}</h5>
      <ul>
        {props.definitions.map(def => {
          return <li >{def}</li>
        })}
      </ul>
    </div>
  )
}


