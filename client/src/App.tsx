import React from 'react'
import { useState } from 'react'
import logo from './logo.svg'
import client from './ApolloClient'
import { ApolloProvider } from '@apollo/react-hooks'
import './App.css'
import Users from './Components/Users'
import PostUser from './Components/PostUser'

const App: React.FC = () => {
    const [query, setQuery] = React.useState('')
    const handleQuery = (event: any) => {
        console.log('setting stater',event)
        setQuery(event)
        console.log(query)
    }

    const newreload = query

    return (
        <ApolloProvider client={client}>
            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    {/* <p> */}
                    {/*     Edit <code>src/App.tsx</code> and save to reload. */}
                    {/* </p> */}
                    <PostUser
                        handleQuery={handleQuery}
                        name={''}
                        email={''}
                        password={''}
                    />
                    <Users query={query} />
                </header>
            </div>
        </ApolloProvider>
    )
}

export default App
