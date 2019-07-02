const notes = (state = [], action) => {
	switch (action.type) {
		case 'ADD_NOTE':
			return [
				...state,
				{ title: action.newNote.title, note: action.newNote.note, completed: false, id: action.newNote.id }
			];
		case 'ALL_NOTES':
			return action.notes;
		case 'EDIT_NOTE':
			return action.notes;
		//not done
		case 'DELETE_NOTE':
			return state.filter(note => {
				return action.payload !== note.id;
			});
		case 'TOGGLE_FAV':
			return state.map(note => {
				if (note.id !== action.id) {
					return note;
				}
				return Object.assign({}, note, { favorite: !note.favorite });
			});
		default:
			return state;
	}
};

export default notes;
