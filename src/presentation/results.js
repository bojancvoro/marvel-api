import React from "react";
import ResultsItem from "./resultsItem";

const Results = (props) => {
    // take results array from state and render the component for each result
    // need image, name, bookmark status for each character

    // also need stuff to display if no data is yet received (loading),
    // and if there is an error
    return (
        <div>
            Characters:
            {props.searchResults.map((character, i) => {
                return (
                    <ResultsItem
                        key={i}
                        character={character}
                    />
                );
            })}
        </div>
    );
}

export default Results;
