/*
  Higher order React Component that takes in another component and then returns
  some logic.
  This component will wait to check if the current isLoading state of the component
  it take is true. If so it will display the message. Immediately the isLoading state
  changes to false it will render the component it took in. The PeopleList component
 */
import React from 'react';

function peopleLoading(Component) {
  return function peopleLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
        <p style={{ textAlign: 'center', fontSize: '30px' }}>
          From a Galaxy Far Far Away .  .  .
        </p>
    );
  };
}
export default peopleLoading;
