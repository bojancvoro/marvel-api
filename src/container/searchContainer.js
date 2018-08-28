import React, { Component } from "react";
import Search from "../presentation/search";

class SearchContainer extends Component {
    handleTakeSearchInput = (e) => {
        // take search term from element
        const searchTerm = e.target.value;
        console.log(searchTerm);
        // call searchHandler passed through props and pass it the term
    }

    render() {
        return (
            <div>
                <Search
                    handleTakeSearchInput={this.handleTakeSearchInput}
                />
            </div>
        );
    }
}

export default SearchContainer;