import React from "react";
import ResultsItem from "./resultsItem";

const Results = ({ searchResults, handleAddBookmark, error }) => {
    return (
        <div>
            {error ? error.measage :
                <div>
                    {searchResults.map((character, i) => {
                        return (
                            <ResultsItem
                                handleAddBookmark={handleAddBookmark}
                                key={i}
                                character={character}
                                index={i}
                            />
                        );
                    })}
                </div>
            }
        </div>
    );
}

export default Results;
