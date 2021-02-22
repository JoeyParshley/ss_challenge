import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import peopleLoading from "./components/peopleLoading";
function App() {
  const ListLoading = peopleLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const people =  fetch('https://swapi.dev/api/people/')
        .then((response) => response.json())
        .then((people) => {
          console.log(people.results);
          setAppState({ loading: false, people: people.results });
        });
  }, [setAppState]);
  return (
      <div className='App'>
        <div className='container'>
          <h1>My Repositories</h1>
        </div>
        <div className='repo-container'>
          <ListLoading isLoading={appState.loading} people={appState.people} />
        </div>
        <footer>
          <div className='footer'>
            Built{' '}
            <span role='img' aria-label='love'>
            💚
          </span>{' '}
            with by Shedrack Akintayo
          </div>
        </footer>
      </div>
  );
}
export default App;
