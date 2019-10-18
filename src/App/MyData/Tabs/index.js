import React from 'react'
import PropTypes from 'prop-types'
import TabDualHeader from '@bit/vitorbarbosa19.ziro.tab-dual-header'
import TabDualTransition from '@bit/vitorbarbosa19.ziro.tab-dual-transition'

export const Tabs = ({ pathOne, tabNameOne, pathTwo, tabNameTwo, children }) =>
	<>
		<TabDualHeader
			pathOne={pathOne}
			tabNameOne={tabNameOne}
			pathTwo={pathTwo}
			tabNameTwo={tabNameTwo}
		/>
		<TabDualTransition components={[
			{ path: pathOne, children: children[0] },
			{ path: pathTwo, children: children[1] }
		]}/>
	</>

Tabs.propTypes = {
	pathOne: PropTypes.string.isRequired,
	tabNameOne: PropTypes.string.isRequired,
	pathTwo: PropTypes.string.isRequired,
	tabNameTwo: PropTypes.string.isRequired,
	children: PropTypes.arrayOf(PropTypes.element)
}