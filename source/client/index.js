// region import
import {app, Router} from 'hyperapp'

// internal
import actions from './actions'
import view from './views'

// style
import './main.sass'
// endregion

// region load

app({
	actions,
	model: 1,
	plugins: [Router],
	view
})

// endregion
