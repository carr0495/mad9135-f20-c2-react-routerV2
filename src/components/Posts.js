import React from 'react'
function Posts (props) {
    if (!props.data || !props.data.map) return (<div className="Loader">Loading</div>)
return(

<div className="album_container">
{props.data.map(post=>(
    <div key={post.id} className="album_card">
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
))}
    
</div>
)
}
export default  Posts