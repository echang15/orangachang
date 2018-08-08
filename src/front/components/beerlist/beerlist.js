import React, { Component } from 'react';
import axios from 'axios';

const API = 'https://olmtnznjo8.execute-api.us-east-1.amazonaws.com/api/beers/';
class BeerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios.get(API, { crossdomain: true })
      .then(
        function (response) {
          console.log(response);
        })

        // result => this.setState({
        // hits: result.data.hits,
        // isLoading: false
      //}))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  render() {
    const { hits, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
      {hits.map(hit =>
        <div class="card">
          <h5 class="card-header">{hit.name}</h5>
          <div class="card-body">
            <h5 class="card-title">{hit.status}</h5>
            <p class="card-text">{hit.description}</p>
           
          </div>
        </div>
      )}
      </div>
      
    );
  }
}

export default BeerList;