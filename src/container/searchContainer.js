import React, { Component } from "react";
import Search from "../presentation/search";

class SearchContainer extends Component {
    handleInputChange = (e) => {
        const searchTerm = e.target.value;
        this.props.searchCharacters(searchTerm);
    }

    render() {
        return (
            <div>
                <Search
                    handleInputChange={this.handleInputChange}
                />
            </div>
        );
    }
}

export default SearchContainer;