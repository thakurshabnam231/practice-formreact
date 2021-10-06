import React from 'react'
import  classes from'./Card.module.css'

function Card(props) {
    return (
        <div className= {`${props.className} ${classes.card} ${classes.input}`}>{props.children}
        </div>
    )
}

export default Card
