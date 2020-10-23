import React, {useEffect, useState} from 'react';
import { HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Albums from './components/Albums'
import Posts from './components/Posts'
import './App.css';

function App() {
  const [link, setLink] = useState('users')
  const [data, setData] = useState()



  useEffect(() => {
    getData()
    .then(data => setData(data))
  }, [link])

  async function getData () {
    const URL = `https://jsonplaceholder.typicode.com/${link}`
    console.log(URL);
    try {
      const response = await fetch(URL)
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    } catch (error) {
      // handle error
      console.log(error)
    }
  }
  return (
    <Router>
    <div className="App">
      <header>
        <h1>Navigation</h1>
      <nav className="home_nav_links">
        <NavLink to="/" onClick={()=>{setLink('users')}}>Home</NavLink>
        <NavLink to="#/albums" onClick={()=>{setLink('albums')}}>Albums</NavLink>
        <NavLink to="#/posts" onClick={()=>{setLink('posts')}}>Posts</NavLink>
      </nav>
      </header>
    <Switch>
    <Route exact path="/">
      <Home data={data} setLink={setLink}/>
    </Route>
    <Route  path={["#/albums"]}>
      <Albums data={data}/>
    </Route>
    <Route  path={["#/posts"]}>
      <Posts data={data}/>
    </Route>
  </Switch>
    </div>
    </Router>
  );
}

export default App;
