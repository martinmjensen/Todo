import React from 'react'

import './SectionHeader.scss'

const SectionHeader = ({ title, children }) => (
    <h3 className='section-header'>
        {title}
        {children}
    </h3>
)

export default React.memo(SectionHeader)