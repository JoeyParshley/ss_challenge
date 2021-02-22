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
        <main className='wrapper'>
          <section className='top'>
            <h1>The Force is Strong in This One</h1>
          </section>
          <section className='people' id='people'>
            <ListLoading isLoading={appState.loading} people={appState.people} />
          </section>
        </main>
      </div>
  );
}
export default App;
