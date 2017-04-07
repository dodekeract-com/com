// region import

import Match from 'react-router/Match'
import React from 'react'

// components

import Footer from './layout/footer'
import Header from './layout/header'

// views

import Welcome from './views/welcome'

// endregion

// region App

export default () =>
	<div>
		<Header/>
		<Match pattern="/" component={Welcome}/>
		<Footer/>
	</div>

// endregion
