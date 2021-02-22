/**
 *  Basic react list component to display the repositories bane and their descriptions in a list
 */
import React from 'react';
const List = (props) => {
  const { people } = props;
  if (!people || people.length === 0) return <p>No people, sorry</p>;
  return (
      <ul>
        <h2 className='list-head'>Available Public Repositories</h2>
        {people.map((p, index) => {
          return (
              <li key={index} className='list'>
                <span className='repo-text'>{p.name}</span>
                <span className='repo-origin'> Origin: {p.homeworld}</span>
                <span className='repo-height'> Height: {p.height}</span>
                <span className='repo-mass'> Mass: {p.mass}</span>
                <span className='repo-birth_year'> Birth Year: {p.birth_year}</span>
              </li>
          );
        })}
      </ul>
  );
};
export default List;
