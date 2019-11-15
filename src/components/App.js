import React from 'react';
import UserCreate from './UserCreate';
// named export requires braces
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<LanguageStore>
					<LanguageSelector />
					{/* when we render the prvoider we pass the value prop */}
					{/* evrytime we use a provider a new 'pipe' of information is created. */}
					<ColorContext.Provider value="red">
						<UserCreate />
					</ColorContext.Provider>
				</LanguageStore>
			</div>
		);
	}
}

export default App;
