import React from 'react'

const Work = (props) => {
    setTimeout(()=>{
        props.history.push('/')
    },10000)
    return (
        <div>
            <h4>Work</h4>
            <p>the list of tasks to be done</p>
        </div>
    )
}

export default Work