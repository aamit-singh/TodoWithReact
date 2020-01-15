import React from 'react'

const Home = (props) => {
    setTimeout(()=>{
        props.history.push('/')
    },10000)
    return (
        <div>
            <h4>Home</h4>
            <p>the list of tasks to be done</p>
        </div>
    )
}
 
export default Home