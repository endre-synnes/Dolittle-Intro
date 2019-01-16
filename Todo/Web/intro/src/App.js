import React from 'react';
import './App.css';
import Header from './components/sub/Header';

export default ({ children }) => {
	return (
		<div>
      <Header/>
			{children}
		</div>
	);
};