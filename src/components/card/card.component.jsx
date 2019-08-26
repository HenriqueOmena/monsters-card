import React from 'react';
import './card.styles.css'

export const Card = props => {
    const {name, email, id} = props.monster;
    return <div className='card-container'>
             <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt=""/>
             <h1> { name } </h1>
             <h2> { email }</h2>
           </div>
};
