// region import

import React from 'react'

// endregion

// region helper

const mod = (n, m) =>
	((n % m) + m) % m

// endregion

// region Welcome

export default class MainView extends React.Component {

	context = null
	requestAnimationFrame = null
	items = []

	// region mount

	componentDidMount = () => {
		this.resize()
		for (let i = 0; i <= 1<<20; i++) {
			this.items.push({
				position: {
					x: this.width / 2 ,//Math.floor(Math.random() * this.width),
					y: this.height / 2//Math.floor(Math.random() * this.height)
				},
				velocity: {
					strength: Math.random(),
					angle: Math.random() * 2 * Math.PI
				}
			})
		}
		this.requestAnimationFrame = window.requestAnimationFrame(this.step)
		window.addEventListener('resize', this.resize)
	}

	componentWillUnmount = () => {
		delete this.context
		window.cancelRequestAnimationFrame(this.requestAnimationFrame)
		window.removeEventListener('resize', this.resize)
	}

	resize = () => {
		this.height = window.innerHeight - 32
		this.width = window.innerWidth

		this.refs.canvas.height = this.height
		this.refs.canvas.width = this.width

		this.context = this.refs.canvas.getContext('2d')
	}

	// endregion

	// region draw

	step = () => {
		// this.requestAnimationFrame = window.requestAnimationFrame(this.step)
		this.context.fillStyle = 'rgba(255,0,0,0.25)'
		this.context.clearRect(0, 0, this.width, this.height)
		this.items.forEach(({position, velocity: {angle, strength}}) => {
			position.x += strength * Math.sin(angle)
			position.y += strength * Math.cos(angle)
			if (false
				|| position.x < 0
				|| position.x > this.width
				|| position.y < 0
				|| position.y > this.height
			) {
				position.x = this.width / 2
				position.y = this.height / 2
			}
			position.x = mod(position.x, this.width)
			position.y = mod(position.y, this.height)
			this.context.fillRect(position.x, position.y, 1, 1)
		})

		setTimeout(this.step, 0)
	}

	// endregion

	// region render

	render = () =>
		<main>
			<div className="jumbo">
				<canvas ref="canvas"/>
			</div>
		</main>

	// endregion
}

// endregion
