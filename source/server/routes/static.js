// region import
import fs from 'fs'
import robogen from 'robogen'
// endregion

// region memory
const memory = {
	html: fs.readFileSync(`${__dirname}/../../client/index.html`)
}
// endregion

// region respond
export const html = {
	status: 200,
	body: memory.html,
	headers: {
		'Content-Type': 'text/html; charset=utf-8'
	}
}

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
