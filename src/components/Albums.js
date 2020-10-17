import React from 'react'
import "./Albums.css"
function Albums (props) {
    if (!props.data || !props.data.map) return (<div className="Loader">Loading</div>)
return(

<div className="album_container">
{props.data.map(album=>(
    <div key={album.id} className="album_card">
      <p>Album: {album.id}</p>
      <p>{album.title}</p>
    </div>
))}
    
</div>
)
}
export default  Albums