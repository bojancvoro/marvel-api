// ACTION

import _ from "lodash";

const characterObjectFactory = (character) => ({
    name: character.name,
    image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    bookmarked: false
})

const searchHelper = _.debounce((searchTerm, dispatch) => {
    const url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchTerm}&ts=1&apikey=2e6260d78cf824873fdc7339927d0cf9&hash=78a594b3e2f7ea097defbfc5c9347a43`;
    fetch(url)
        .then(response => response.json())
        .then(data => data.data.results)
        .then(results => results.map(characterObjectFactory))
        .then((characters) => {
            dispatch({
                type: "SEARCH_CHARACTERS",
                data: {
                    characters
                }
            })
        })
        .catch(error => console.error(error));
}, 500)

export const search = (searchTerm) => (dispatch) => searchHelper(searchTerm, dispatch);
