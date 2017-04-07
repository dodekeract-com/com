// region import
import error from 'spirit-error'
import http from 'http'
import route from 'spirit-router'
import spirit from 'spirit'

// internal
import {render} from './routes/app'
import {robots} from './routes/static'
import {html, script} from './routes/file'
// endregion

// region config
const {port, host} = {
	port: process.env.PORT || 1234,
	host: '0.0.0.0'
}
// endregion

// region routes
const app = route.define([
	route.get('/robots.txt', robots),
	route.get('/main.js', script),
	route.get('/*', html),
	route.any('*', error.notFound)
])
// endregion

// region start
http.createServer(spirit.node.adapter(app)).listen({host, port}, () =>
	console.info(`listening on http://${host}:${port}`)
)
// endregion
