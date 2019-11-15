import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class Field extends Component {
	// adds property to the class (static), must be called context type
	static contextType = LanguageContext;

	render() {
		const text = this.context === 'english' ? 'Name' : 'Naam';
		return (
			<div>
				<div className="ui field">
					<label htmlFor="">{text}</label>
					<input type="text" />
				</div>
			</div>
		);
	}
}

export default Field;
