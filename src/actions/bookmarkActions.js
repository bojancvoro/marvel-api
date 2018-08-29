// ACTION

export const loadBookmarks = () => {
	const bookmarks = JSON.parse(localStorage.getItem("bookmarkedCharacters"));
	return {
		type: "BOOKMARKS_LOADED",
		data: {
            bookmarks
        }
	}
}

export const bookmark = (character) => (dispatch) => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarkedCharacters"));
    character.bookmarked = true;
    bookmarks.push(character);
    localStorage.setItem("bookmarkedCharacters", JSON.stringify(bookmarks));
	dispatch({
		type: "BOOKMARK_CHARACTER",
		data: {
            character
        }
	})
}