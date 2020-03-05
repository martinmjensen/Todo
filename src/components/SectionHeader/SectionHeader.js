import React from 'react'
import PropTypes from 'prop-types'

import './SectionHeader.scss'

const SectionHeader = ({ title, children }) => (
    <h3 className='section-header'>
        {title}
        {children}
    </h3>
)

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default React.memo(SectionHeader)