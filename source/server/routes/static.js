// region import
import robogen from 'robogen'
// endregion

// region respond
export const robots = {
	status: 200,
	body: robogen([{
		allow: '/'
	}]),
	headers: {
		'Content-Type': 'text/plain; charset=utf-8'
	}
}
// endregion
