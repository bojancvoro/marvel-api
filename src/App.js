import _ from "lodash";
import React, { Component } from 'react';
import './App.css';
import SearchContainer from "./container/searchContainer";
import Results from "./presentation/results";
import { connect } from "react-redux";
import { loadBookmarks, bookmark } from "./actions/bookmarkActions";
import search from "./presentation/search";

class App extends Component {
  componentDidMount() {
    this.props.loadBookmarks();
  }

  render() {
    return (
      <div className="App">
        <div>test: {JSON.stringify(this.props.bookmarks)}</div>
        <SearchContainer />
        <Results
          handleAddBookmark={this.props.bookmark}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookmarks: state.bookmarks,
  }
}

const mapDispatchToProps = {
  loadBookmarks,
  bookmark,
  search
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

