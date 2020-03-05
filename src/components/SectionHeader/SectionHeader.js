import React from 'react'

import './SectionHeader.scss'

const SectionHeader = ({ title, loading }) => {

    const spinnerVisibility = loading ? 'visible' : 'hidden'

    return (
        <h3 className='section-header'>{title}
            <div style={{ visibility: spinnerVisibility }} className='spinner'></div>
        </h3>
    )
}

export default React.memo(SectionHeader)