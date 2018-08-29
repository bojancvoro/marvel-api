import React from "react";

const ResultsItem = (props) => {
    const { name, image, bookmarked } = props.character;
    return (
        <div>
            Name: {name}
            <img alt={name} src={image}></img>
            {bookmarked ? 
            "Bookmarked character" : 
            <button onClick={props.handleAddBookmark} className={props.index} >Add bookmark</button>}
        </div>
    );
}


export default ResultsItem; 