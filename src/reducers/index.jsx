import { combineReducers } from 'redux';
import { addNotes } from '../actions/';
import { allNotes } from '../actions/';
import { editNote } from '../actions/';
import { deleteNote } from '../actions/';
import { toggleFav } from '../actions/';
import { setError } from '../actions/';
import { isLoading } from '../actions/';

export const rootReducer = combineReducers({
	addNotes,
	allNotes,
	editNote,
	deleteNote,
	toggleFav,
	setError,
	isLoading
});
