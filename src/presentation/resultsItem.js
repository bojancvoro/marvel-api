import React from "react";

const ResultsItem = ({ character }) => {
    const { name, image, isBookmarked } = character;
    return (
        // need to display image, name, and bookmark status of the character
        <div>
            Name: {name}
            <img alt={name} src={image}></img>
            {isBookmarked ? "bookmarked" : "not bookmarked"}
        </div>
    );
}

export default ResultsItem; 