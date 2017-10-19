import React from 'react';

export default (props) => {
  const definitions = props.definitions.results[0].lexicalEntries[0].entries[0].senses;

  return (
    <div className="col-sm-4">
      <h2 className="text-center">{props.provider}</h2>
      <ul>
        {definitions.map(def => {
          return <li key={def.id}>{def.definitions[0]}</li>
        })}
      </ul>
    </div>
  )
}


