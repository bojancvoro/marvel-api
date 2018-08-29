import _ from "lodash";
import React, { Component } from 'react';
import './App.css';
import SearchContainer from "./container/searchContainer";
import Results from './presentation/results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [], error: null }
  }

  characterObjectFactory(character) {
    // creates an object for each character that is added to results array on state
    // the way to handle "bookmark state" property for each character
    return {
      name: character.name,
      image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      bookmarked: false
    }
  }

  fetchCharacterData(searchTerm) {
    const url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchTerm}&ts=1&apikey=2e6260d78cf824873fdc7339927d0cf9&hash=78a594b3e2f7ea097defbfc5c9347a43`;
    fetch(url)
      .then(response => response.json())
      .then(data => data.data.results)
      .then(results => {
        return results.map((character) => {
          return this.characterObjectFactory(character);
        });
      })
      .then(characters => { this.setState({ results: characters }) })
      .catch(error => this.setState({ error }));
  }

  searchCharacters = (searchTerm) => {
    if (searchTerm) {
      this.fetchCharacterData(searchTerm);
    } else {
      this.getLocalStorageData();
    }
  }

  handleAddBookmark = (e) => {
    const bookmarkedCharacters = JSON.parse(localStorage.getItem("bookmarkedCharacters")) || [];
    const newBookmarkIndex = e.target.className;
    const newBookmark = this.state.results[newBookmarkIndex];
    newBookmark.bookmarked = true;
    bookmarkedCharacters.push(newBookmark);
    localStorage.setItem("bookmarkedCharacters", JSON.stringify(bookmarkedCharacters));
  }

  getLocalStorageData() {
    const bookmarkedCharacters = JSON.parse(localStorage.getItem("bookmarkedCharacters"));
    if (bookmarkedCharacters) {
      this.setState({ results: bookmarkedCharacters });
    } else {
      this.setState({ results: [] })
      // more elegant way to handle showing no characters after search input emptied?
    }
  }

  componentDidMount() {
    this.getLocalStorageData();
  }

  render() {
    const { results, error } = this.state;
    const searchCharacters = _.debounce((searchTerm) => { this.searchCharacters(searchTerm) }, 2000);
    return (
      <div className="App">
        <SearchContainer
          searchCharacters={searchCharacters}
        />
        <Results
          handleAddBookmark={this.handleAddBookmark}
          searchResults={results}
          error={error}
        />
      </div>
    );
  }
}

export default App;