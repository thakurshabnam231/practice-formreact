import React from 'react'

const List=(props)=> {
    return (
        <div>
        <ul>
        {props.users.map((value)=>
            (<li> {value.name}
                {value.age} </li>))}</ul>
        </div>
    )
}

export default List
