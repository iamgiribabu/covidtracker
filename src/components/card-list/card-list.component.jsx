import React from  'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = props => (
    <div className ='card-list'>
        {
            props.covidData.map(covid => (
                <Card key={covid.indexOf} covidData = {covid}/>               
            ))         
        }       
    </div> 
)