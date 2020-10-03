import React from 'react';
import './card.styles.css';

export const Card = props=>(
    <div className='card-container'>
        
        <h2>Country : {props.covidData.country}</h2>
        <p>Active cases :{props.covidData.cases.active}</p>
        <p>New cases : {props.covidData.cases.new}</p>
        <p>Recovered : {props.covidData.cases.recovered}</p>
        <p>Total : {props.covidData.cases.total}</p>

    </div>
)