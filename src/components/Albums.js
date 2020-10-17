import React from 'react'
function Albums (props) {
    if (!props.data) return <h2>Loading</h2>
return(
<p>{JSON.stringify(props.data)}</p>
)
}
export default  Albums