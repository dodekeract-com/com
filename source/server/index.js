// import external

import http from 'http';
import route from 'spirit-router';
import spirit from 'spirit';

// import internal

import {robots} from './routes';

// config

const {port, address} = {
	port: process.env.PORT || 8080,
	address: '0.0.0.0'
};

// alias

const {node: {adapter}} = spirit;

// routes

const app = route.define([
	route.get('/robots.txt', robots),
	route.any('*', () => {return {status: 404, body: 'Not Found', headers: {'content-type': 'text/plain'}}})
]);

// listen

http.createServer(adapter(app)).listen(port, address, () => {
	console.info(`Listening on http://${address}:${port}`);
});
