import React, { Component } from 'react';

export class Controls extends Component {
	render() {
		return (
			<div>
				<form action="">
					<input placeholder="type title" name="title" onChange={handleChange} />
					<input placeholder="type note details" name="note" onChange={handleChange} />
					<input role="button" />
				</form>
			</div>
		);
	}
}

export default Controls;
