import React, { Component } from 'react';
import './App.css';
import ComponentsContent from './components/components-content'
import Quotes from './components/quotes'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isFetching: false,
      planetInfo: null,
      quotes: null
    }

    this.getPlanetInfo = this.getPlanetInfo.bind(this)
    this.nextPlanet = this.nextPlanet.bind(this)
    this.getQuotes = this.getQuotes.bind(this)
    this.getRandomElement = this.getRandomElement.bind(this);
   
  }

  componentWillMount() {
    this.setState({quotes: Quotes()})
    this.nextPlanet()
  }

  getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  getQuotes() {
    const quotesObj = this.state.quotes
    const quotesAuthors = Object.keys(quotesObj)
    const randomAuthor = quotesObj[this.getRandomElement(quotesAuthors)]
    const quoteArr = this.getRandomElement(randomAuthor).split('\n')

    return {quote: quoteArr[0], author: quoteArr[1]} ;
  }

  getPlanetInfo() {
    const planetNumber = Math.floor(Math.random() * 61) + 1;
    return `https://swapi.co/api/planets/${planetNumber}` 
  }

  nextPlanet() {
    this.setState({isFetching: true})
    const promise = fetch(this.getPlanetInfo())
    
    promise.then(response => response.json())
           .then(planet => {
             const planetFetched = {
               name: planet.name,
               population: planet.population,
               climate: planet.climate,
               terrain: planet.terrain,
               films: planet.films.length
             }
             console.dir(planetFetched)
             this.setState({isFetching: false, planetInfo: planetFetched})
           }).catch(err => console.log(err))
      
  }

  render() {
    return (
      <div className="App">
        <ComponentsContent
          planetInfo={this.state.planetInfo}
          isFetching={this.state.isFetching}
          nextPlanet={()=> this.nextPlanet()}
          getQuotes={()=> this.getQuotes()}
        />
      </div>
    );
  }
}

export default App;
