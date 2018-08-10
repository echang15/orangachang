import React, { Component } from 'react';
import axios from 'axios';

const API = 'https://olmtnznjo8.execute-api.us-east-1.amazonaws.com/api/beers/';

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function filterBeers(beerlist,status) {
    return beerlist.filter(function (beer) {
      return beer.status == status
    });
    
}

class BeerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      beers_on_tap: [],
      beers_upcoming: [],
      beers_planned: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios.get(API)
      .then(
        result => this.setState({
        //beers: sortByKey(result.data, 'status'),
        beers: result.data,
        beers_on_tap: filterBeers(result.data,'On Tap'),
        beers_upcoming : filterBeers(result.data,'Upcoming'),
        beers_planned: filterBeers(result.data,'Planned'),
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  render() {
    const { beers, beers_on_tap, beers_upcoming, beers_planned, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading Current Beer List...</p>;
    }

    return (
      <div>
      <h1>Beers On Tap</h1>
      {beers_on_tap.map(beer =>
        <div className="card" key={beer.uid}>
          <h5 className="card-header">{beer.name}</h5>
          <div className="card-body">
            <h5 className="card-title">{beer.status}</h5>
            <p className="card-text">{beer.description}</p>                       
          </div>
        </div>
      )}
      <h1>Upcoming Beers</h1>
      These are fermenting or conditioning (or waiting for a free tap)
      {beers_upcoming.map(beer =>
        <div className="card" key={beer.uid}>
          <h5 className="card-header">{beer.name}</h5>
          <div className="card-body">
            <h5 className="card-title">{beer.status}</h5>
            <p className="card-text">{beer.description}</p>                       
          </div>
        </div>
      )}
      <h1>Planned Beers</h1>
      These are planned for the future... One day i'll get to it.
      {beers_planned.map(beer =>
        <div className="card" key={beer.uid}>
          <h5 className="card-header">{beer.name}</h5>
          <div className="card-body">
            <h5 className="card-title">{beer.status}</h5>
            <p className="card-text">{beer.description}</p>                       
          </div>
        </div>
      )}
      </div>
      
    );
  }
}

export default BeerList;