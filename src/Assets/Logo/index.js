import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'cloudinary-react'

export const Logo = ({ width }) =>
    <Image
    	cloudName='ziro'
    	width={width}
    	publicId='logo-app_fwothv'
    	version='1561160634'
    	format='png'
    	secure='true'
    	alt='logo'
    />

Logo.defaultProps = {
	width: '45'
}

Logo.propTypes = {
	width: PropTypes.string
}