import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export class Button extends Component {
	// adds property to the class (static), must be called context type
	static contextType = LanguageContext;

	renderButton(color) {
		return (
			<button className={`ui button ${color}`}>
				{/* consumer get provider data, always passed a function. Value is first argument. */}
				<LanguageContext.Consumer>
					{({ language }) => (language === 'english' ? 'Sumbit' : 'Vorleggen')}
				</LanguageContext.Consumer>
			</button>
		);
	}

	render() {
		return <ColorContext.Consumer>{(color) => this.renderButton(color)}</ColorContext.Consumer>;
	}
}

export default Button;
