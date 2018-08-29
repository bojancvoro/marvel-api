import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../presentation/search";
import { search } from "../actions/search";

class SearchContainer extends Component {
    handleInputChange = (e) => {
        const searchTerm = e.target.value;
        this.props.search(searchTerm);
    }

    render() {
        return (
            <div>
                <Search
                    handleInputChange={(e) => this.handleInputChange(e)}
                />
            </div>
        );
    }
}

export default connect(null, {
    search
})(SearchContainer);