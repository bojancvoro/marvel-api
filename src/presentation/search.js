import React from "react";

const Search = (props) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search Marvel Characters"
                autoComplete="off"
                onChange={props.handleTakeSearchInput}
            ></input>
        </div>
    );
}

export default Search;