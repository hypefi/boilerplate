import React from 'react'
import {useState} from 'react'
import logo from './logo.svg'
import client from './ApolloClient'
import { ApolloProvider } from '@apollo/react-hooks'
import './App.css'
import Users from './Components/Users'
import PostUser from './Components/PostUser'

const App: React.FC = () => {
  const [query, setQuery] = React.useState('');
 
  const handleQuery = (event: any) => {
    setQuery(event.target.value);
  };

  console.log(query);

  var newreload = query;

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <PostUser query={query} handleQuery={handleQuery} name={''} email={''} password={''}/>
          <Users newreload={newreload} />
        </header>
      </div>
    </ApolloProvider>
  )
}

export default App
