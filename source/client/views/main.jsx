// region import
import {h} from 'hyperapp'

// components
import Footer from '../components/footer'
import Header from '../components/header'
// endregion

// region Main
export default () =>
	<div id="app">
		<Header/>
		<main>
			<div class="container">
				Hello World
			</div>
		</main>
		<Footer/>
	</div>
// endregion
