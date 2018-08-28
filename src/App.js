import React, { Component } from 'react';
import './App.css';
import SearchContainer from "./container/searchContainer";
import Results from './presentation/results';

class App extends Component {

  // publicKey = "2e6260d78cf824873fdc7339927d0cf9";
  // api = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${this.searchTerm}&ts=1&apikey=2e6260d78cf824873fdc7339927d0cf9&hash=78a594b3e2f7ea097defbfc5c9347a43`;

  constructor(props) {
    super(props);
    this.state = { results: [] }
  }

// consider creating and object for each character and adding it state
// as a way to handle "bookmark state" property for each item


  handleFetchData(searchTerm) {
    // take search term - pass it to search container that will take search term from input
    // and pass it here
    
    // and fetch coresponding data from api
    const url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchTerm}&ts=1&apikey=2e6260d78cf824873fdc7339927d0cf9&hash=78a594b3e2f7ea097defbfc5c9347a43`;
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data.data.results));
  }

  componentDidMount() {
    this.handleFetchData("adam");
  }

  // handleGetDataFromLocalStorage() {
  //   // when componet mounts get data stored in local storage and save it into state
  // }

  // handleSearchCharacters(searchTerm) {
  //   // take search term
  //  // call handleFetchData passing it the term 
  // }

  // handeAddBockmark() {
  //   // take item and save it to local storage
  // }


  // componentDidMount() {
  //   // take data from local storage and save it into state
  //   handleGetDataFormLocalStorage();
  // }


  render() {
    return (
      <div className="App">
        <SearchContainer />
        <Results />
      </div>
    );
  }
}

export default App;
