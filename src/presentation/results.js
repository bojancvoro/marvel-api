import React from "react";
import ResultsItem from "./resultsItem";
import { connect } from "react-redux";

const Results = ({ results, handleAddBookmark, error }) => {
    return (
        <div>
            {error ? error.measage :
            results ?
                <div>
                    {results.map((character, i) => {
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
                : <div></div>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        results: state.searchResults,
        bookmarks: state.bookmarks
    }
}

export default connect(mapStateToProps)(Results);

