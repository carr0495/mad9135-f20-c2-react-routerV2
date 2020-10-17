import React from 'react'
import { BrowserRouter as Router,NavLink } from 'react-router-dom';
import './Home.css'
import icon from './user.png'

function Home (props) {
    console.log(props.data);
   
    if (!props.data) return <h2>Loading</h2>
return(
    <div className="users_container">
      {props.data.map(user => (
          <div key={user.id} className="user_card">
              <div className="user_info">
                    <img src={icon}></img>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.username}</p>
              </div>
              <div className="button_container">
                    <NavLink className="NavButton" onClick={() => {props.setLink(`users/${user.id}/albums`)}} to={`/albums`}>Albums</NavLink>
                    <NavLink className="NavButton" to="/posts">Posts</NavLink>
              </div>
          </div>
      ))} 
   </div>
)
       
}
export default  Home