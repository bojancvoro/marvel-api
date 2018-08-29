import React from "react";

const Search = ({ handleInputChange }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search Marvel Characters"
                autoComplete="off"
                onChange={handleInputChange}
            ></input>
        </div>
    );
}

export default Search;