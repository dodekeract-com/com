// region import

import React from 'react'
import {ServerRouter, createServerRenderContext} from 'react-router'
import {renderToStaticMarkup, renderToString} from 'react-dom/server'

// internal

import App from '../../client/components/app'
import Main from '../components/main'
import * as error from '../error'

// endregion

// region server rendering

export const render = location => {
	const context = createServerRenderContext()
	const body = `<!doctype html>${renderToStaticMarkup(
		<Main content={renderToString(
			<ServerRouter {...{location, context}}>
				<App/>
			</ServerRouter>
		)}/>
	)}`

	const {redirect, missed} = context.getResult()

	if (redirect) return {
		status: 301,
		headers: {
			Location: redirect.pathname
		}
	}

	if (missed) return error.notFound

	return {
		status: 200,
		body,
		headers: {
			'Content-type': 'text/html; charset=utf-8'
		}
	}
}

// endregion
