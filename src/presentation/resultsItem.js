import React from "react";

const ResultsItem = (props) => {
    const { name, image } = props.character;
    return (
        <div>
            Name: {name}
            <img alt={name} src={image}></img>
            <button onClick={() => props.handleAddBookmark(props.character)} className={props.index}>
            Add bookmark</button>
        </div>
    );
}

export default ResultsItem; 