export function robots () {
	return {
		status: 200,
		body: 'User-agent: *\nAllow: /',
		headers: {
			'content-type': 'text/plain'
		}
	};
}
