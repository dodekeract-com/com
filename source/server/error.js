export const notFound = {
	status: 404,
	body: JSON.stringify({
		error: 'Not Found'
	}),
	headers: {
		'Content-Type': 'application/json; charset=utf-8'
	}
}
