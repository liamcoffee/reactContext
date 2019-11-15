import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
export class LanguageSelector extends Component {
	// only need one so we get it using contextType
	static contextType = LanguageContext;
	render() {
		console.log(this.context);
		return (
			<div>
				Select a language:
				<i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
				<i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')} />
			</div>
		);
	}
}

export default LanguageSelector;
