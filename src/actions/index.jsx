export const allNotes = notes => ({
	type: 'ALL_NOTES',
	notes
});

export const addNote = notes => {
	const newNote = {
		...notes,
		id: Date.now()
	};
	return {
		type: 'ADD_NOTE',
		newNote
	};
};

export const editNote = editedNote => ({
	type: 'EDIT_NOTE',
	editedNote
});

export const deleteNote = deletedNote => ({
	type: 'DELETE_NOTE',
	deletedNote
});

export const toggleFav = id => ({
	type: 'TOGGLE_FAV',
	id
});

export const setError = error => ({
	type: 'SET_ERROR',
	error
});

export const isLoading = bool => ({
	type: 'IS_LOADING',
	bool
});
