// region import

import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router/BrowserRouter'

// internal

import App from './components/app'

// endregion

// region load

window.addEventListener('load', () => {
	ReactDOM.render(
		<Router>
			<App/>
		</Router>
	, document.getElementById('app'))
})

// endregion
