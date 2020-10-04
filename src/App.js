import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';
// import { render } from 'react-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      covidData : [],
      searchField : ''
    }
  }
  
  componentDidMount(){
    fetch("https://covid-193.p.rapidapi.com/statistics", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }
    })
    .then(response => response.json())
    .then(info => info.response)
    .then(data => {this.setState({covidData : data})} )
    .catch(err => {
      console.log(err);
    });
  }
  
  render(){
    const { covidData, searchField } = this.state;
    const filteredCountry = covidData.filter(covidData=> covidData.country.toLowerCase().includes(searchField.toLowerCase()))
   
    return(
      
      <div className="App">
        <h1>COVID-19 Tracker</h1>
        <SearchBox
         placeholder = 'Country' 
         handleChange = { e => this.setState({ searchField : e.target.value})}
        />
        
        <CardList covidData = {filteredCountry} />  {/**prop is object of any properties that you write on this component */}
        {/**this is called children, the main properties that exit on props (anything in between barkets of our component)*/}
        
      
      </div>
    )
  }
}
export default App;
