// INITIAL STATE

const charactersReducerInitialState = {
	searchResults: [],
	bookmarks: [],
}

// REDUCER

export default (state = charactersReducerInitialState, action) => {
    const { type, data } = action;
	switch (type) {
		case "BOOKMARKS_LOADED": 
			return {
				...state,
				bookmarks: data.bookmarks,
			}
		case "BOOKMARK_CHARACTER": 
			return {
				...state,
				bookmarks: [...state.bookmarks, data.character],
            }
        case "SEARCH_CHARACTERS":
            return {
                ...state,
                searchResults: data.characters
            }
        default:
            return state;
	}
}