import React from 'react'
import { BrowserRouter as Router,NavLink } from 'react-router-dom';
import './Home.css'
import icon from './user.png'

function Home (props) {
    console.log(props.data);
   
    if (!props.data) return (<div className="Loader">Loading</div>)
    if (!props.data.map){
        let user = props.data
        return(
        <div className="users_container">
          <div key={user.id} className="user_card">
              <div className="user_info">
                    <img src={icon} alt=""></img>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.username}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
              </div>
              <div className="button_container">
                    <NavLink className="NavButton" onClick={() => {props.setLink(`/users/${user.id}/albums`)}} to={`/albums/${user.id}`}>Albums</NavLink>
                    <NavLink className="NavButton" onClick={() => {props.setLink(`/users/${user.id}/posts`)}} to={`/posts/${user.id}`}>Posts</NavLink>
              </div>
          </div>
    
   </div>
        )
    }
return(
    <div className="users_container">
      {props.data.map(user => (
          <div key={user.id} className="user_card">
              <div className="user_info">
                    <img src={icon} alt="" onClick={() => {props.setLink(`users/${user.id}`)}}></img>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.username}</p>
              </div>
              <div className="button_container">
                    <NavLink className="NavButton" onClick={() => {props.setLink(`users/${user.id}/albums`)}} to={`/albums/${user.id}`}>Albums</NavLink>
                    <NavLink className="NavButton" onClick={() => {props.setLink(`users/${user.id}/posts`)}} to={`/posts/${user.id}`}>Posts</NavLink>
              </div>
          </div>
      ))} 
   </div>
)
       
}
export default  Home