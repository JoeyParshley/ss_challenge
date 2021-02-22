/**
 *  Basic react list component to display the repositories bane and their descriptions in a list
 */
import React from 'react';
const List = (props) => {
  const { people } = props;
  if (!people || people.length === 0) return <p>No people, sorry</p>;
  return (
      <ul className='clearfix'>
        {people.map((p, index) => {
          return (
              <li key={index} className='list'>
                <span className='field'>{p.name}</span>
                <span className='field'>Origin:<span> {p.homeworld}</span></span>
                <span className='field'>Height:<span> {p.height}</span></span>
                <span className='field'>Mass:<span> {p.mass}</span></span>
                <span className='field'>Birth Year:<span> {p.birth_year}</span></span>
              </li>
          );
        })}
      </ul>
  );
};
export default List;
