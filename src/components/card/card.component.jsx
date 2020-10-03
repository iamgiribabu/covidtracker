import React from 'react';
import './card.styles.css';

export const Card = props=>(
    <div className='card-container'>
        
        <h2>{props.covidData.country}</h2>
        <p>{props.covidData.cases.active}</p>
    </div>
)