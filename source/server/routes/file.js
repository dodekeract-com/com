// region import

import {readFileSync as read} from 'fs'

// endregion

// region read

const memory = {
	style: read(`${__dirname}/../../client/main.css`).toString('utf-8'),
	script: read(`${__dirname}/../../client/main.js`).toString('utf-8')
}

// endregion

// region serve

export const style = {
	status: 200,
	body: memory.style,
	headers: {
		'Content-Type': 'text/css; charset=utf-8'
	}
}

export const script = {
	status: 200,
	body: memory.script,
	headers: {
		'Content-Type': 'application/javascript; charset=utf-8'
	}
}

// endregion
