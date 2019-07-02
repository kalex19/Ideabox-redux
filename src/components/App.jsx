import React from 'react';
import NoteContainer from '../containers/NoteContainer';
import Controls from '../containers/Controls';

function App(){
	return (
		<div className="App">
			<Controls handleSubmit={this.handleSubmit} />
			<NoteContainer handleDelete={this.handleDelete} notes={this.state.notes} />
		</div>
	);
}

export default App;
