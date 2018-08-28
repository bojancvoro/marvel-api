import React, { Component } from 'react';
import './App.css';
import SearchContainer from "./container/searchContainer";
import Results from './presentation/results';

class App extends Component {

  // publicKey = "2e6260d78cf824873fdc7339927d0cf9";
  // api = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${this.searchTerm}&ts=1&apikey=2e6260d78cf824873fdc7339927d0cf9&hash=78a594b3e2f7ea097defbfc5c9347a43`;

  constructor(props) {
    super(props);
    this.state = { results: [], isLoading: true, error: null }
  }

  characterObjectFactory(character) {
    // creates an object for each character that is added to state
    // a way to handle "bookmark state" property for each item
    return {
      name: character.name,
      image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      bookmarked: false
    }
  }

  handleFetchData = (searchTerm) => {
    // take search term (search container takes and provides search term)
    // and fetch coresponding data from api

    const characters = [];

    const url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchTerm}&ts=1&apikey=2e6260d78cf824873fdc7339927d0cf9&hash=78a594b3e2f7ea097defbfc5c9347a43`;
    fetch(url)
      .then(response => response.json())
      .then(data => data.data.results.forEach((character) => {
        const characterObj = this.characterObjectFactory(character);
        characters.push(characterObj);
      }))
      .then(() => {
        this.setState({ results: characters, isLoading: false })
      })
      .catch(error => this.setState(
        { error, isLoading: false }
      ));
    // is there a more elegant way to do this?

    // need throthe
  }

  // componentDidMount() {
  //   this.handleFetchData("adam");
  // }

  // handleGetDataFromLocalStorage() {
  //   // when componet mounts get data stored in local storage and save it into state
  // }

  // handleSearchCharacters(searchTerm) {
  //   // take search term
  //  // call handleFetchData passing it the term 
  // }

  // handeAddBookmark() {
  //   // take item and save it to local storage
  // }


  // componentDidMount() {
  //   // take data from local storage and save it into state
  //   handleGetDataFormLocalStorage();
  // }


  render() {
    const { results, isLoading, error } = this.state;
    return (
      <div className="App">
        <SearchContainer
          handleFetchData={this.handleFetchData}
        />
        <Results
          searchResults={results}
          isLoading={isLoading}
          error={error}
        />
      </div>
    );
  }
}

export default App;
