import React from 'react'

const HOC=(WrappedComponent)=> {
    const colors=["red","yellow","green","blue","orange","pink"]
    
    const number=colors[Math.floor(Math.random()*5)]
    const colo= number +"-text"
    return(props)=>{
    return (
        <div className={colo}>
            <WrappedComponent {...props} />
        </div>
    )
    }
}

export default HOC
