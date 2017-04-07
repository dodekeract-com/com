// region import
import {readFileSync as read} from 'fs'
// endregion

// region serve
export const html = {
	status: 200,
	body: read(`${__dirname}/../../client.html`).toString('utf-8'),
	headers: {
		'Content-Type': 'text/html; charset=utf-8'
	}
}

export const script = {
	status: 200,
	body: read(`${__dirname}/../../client.js`).toString('utf-8'),
	headers: {
		'Content-Type': 'application/javascript; charset=utf-8'
	}
}
// endregion
