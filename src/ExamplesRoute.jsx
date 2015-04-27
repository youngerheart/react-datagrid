'use strict';

import React from 'react'
import normalize from 'react-style-normalizer'
import menu from './examplesMenu'
import { map as examples} from './examples'
import { RouteHandler } from 'react-router'

const style = normalize({
	display: 'flex',
	marginBottom: 10,
	marginRight: 10,
	flex: 1,
	maxWidth: '100%'
})

const Examples = class extends React.Component {

	render(){
		var exampleName = this.context.router.getCurrentParams().name || 'basic'
		var Cmp = examples[exampleName]
		var content

		if (!Cmp){
			content = <b>Sorry, example not found</b>
		} else {
			content = <Cmp />
		}

		return <div
			className="flexbox flex-row"
			style={style}
		>
			<div style={normalize({paddingTop: 20, paddingLeft: 20, flex: 'none'})}>{menu()}</div>
			<div style={normalize({minWidth: 0, flex: '1 1 100%'})}>
				{content}
			</div>

		</div>
	}
}

Examples.contextTypes = {
	router: React.PropTypes.func
}

Examples.displayName = 'Examples'

export default Examples