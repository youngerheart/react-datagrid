'use strict';

import React from 'react'
import example from './example-template'

const all = [
	example('basic', {height: 470,
		description: <div>
			<h3>DataGrid features:</h3>
			<ul style={{lineHeight: '1.5em'}}>
				<li>Great rendering performance - even with millions of records</li>
				<li>Sized and flexible columns</li>
				<li>Single and multiple selection support</li>
				<li>Grouping</li>
				<li>Custom styling</li>
				<li>Custom cell rendering</li>
				<li>Support for sorting</li>
				<li>Support for filtering</li>
				<li>Visible/hidden columns</li>
			</ul>
		</div>
	}),
	example('reorder-columns', {height: 450}),
	example('column-resizing', {
		height: 350,
			description: <div>
				<p>
				Columns are flexible via flexbox. Specify a <b><code>flex</code></b> property for this. Unless a column specifies a <b><code>flex</code></b> or a <b><code>width</code></b> property, it is assumed to have <b><code>flex: 1</code></b>. You can also specify a <b><code>minWidth</code></b> property.
				</p>
				<p>
					And of course, horizontal scrollbars show when needed. (<b>shift + scroll</b> for horizontal scrolling)
				</p>

			</div>
		}),
	example('single-selection', {
		height: 350
	}),
	example('multiple-selection', {
		height: 350
	}),
	example('large-data-array', {
							height: 450,
							description: <div>
								<p>You can have <b>huge</b> amounts of data in a grid.</p>
								<p>We have tested it with <b>1.000.000</b> records. </p>
								<p>In this demo, we are remotely fetching a json with <b>50.000 records</b> and showing them in the grid, so please wait a bit until the json is loaded. The browser might freeze for a moment while doing the JSON.parse. After this, the grid does its job and keeps everything running smoothly.</p>
								<p>In any case, the grid remains snappy no matter how large the data array is, since we only render a small subset of all data.</p>
							</div>
					}),

	example('sorting', {
		height: 550,
		description: <div>
			<p>The grid below is initially rendered as sorted, but you can modify sorting by clicking a column header.</p>
			<p>You can sort by multiple columns. Clicking on a column header multiple times sorts by that column ascending, then descending and them removes the sorting. Clicking again repeats this cicle</p>
			<p>For numeric columns, specify <b><code >type: "number"</code></b> in the column props.</p>
		</div>
	}),
	example('grouping', {
						height: 350
					}),

	example('filtering', {height: 450 }),
	example('empty-text-for-no-records', {height: 350 }),
	example('loading-grid', {height: 350 }),
	example('custom-column-styling', {height: 350 }),
	example('custom-column-rendering', {height: 350 }),
	example('custom-row-styling', {height: 350 }),
	example('custom-cell-borders', {height: 350 }),
	example('text-align-and-custom-row-height', {height: 350 }),
	example('restore-grid-state', {height: 750 }),
	example('remote-data-source', {
		height: 400,
		description: <div>
			<p>
				Based on the type of the <b>dataSource</b> prop, you have:
				<ul>
					<li>Array - local data</li>
					<li>String/Function/Promise - remote data</li>
				</ul>
			</p>
		</div>
	}),
	example('remote-data-source-with-jquery', {height: 450 }),
	example('remote-data-source-custom-page-size', {height: 450 }),
	example('remote-data-source-pagesizes', {height: 450 }),
	example('remote-data-source-no-pagination', {height: 450 }),
	example('remote-data-source-custom-reload', {height: 450,
		description: <div>
			<p>
				The example proves both controlled <b>page</b> and <b>pageSize</b> props,
				as well as using the <b>reload</b> method on the grid
			</p>
			<p>
				Hit the reload button to refresh the grid.
			</p>
		</div>
	}),
	example('remote-data-source-hide-page-size', {
		height: 450,
		description: <div>
			You can hide the <b>pageSize &lt;select&gt;</b> if you want to.
		</div>
	}),
	example('remote-data-source-colored-buttons', {
		height: 450,
		description: <div>
			The example below shows how you can change icon colors and height, and also hide the refresh icon
		</div>
	})
]

const allMap = {}

all.map(function(item){
	allMap[item.prototype.name] = item
})

module.exports = {
	map  : allMap,
	array: all
}
