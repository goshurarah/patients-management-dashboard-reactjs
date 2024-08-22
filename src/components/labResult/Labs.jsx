import React from 'react'
import './labResult.css'
import download from '../../assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg'

function Labs({ data }) {
    let result = data
    console.log('result = ', result);
    return (
        <div className='lab-main-container'>
            <p className='lab-txt'>Lab Results</p>
            {result && result.lab_results.map((patient, index) => (
                <div className='lab-inner-container'>
                    <p className='lab-result'>{patient}</p>
                    <img className='download-img' src={download} alt="download" />
                </div>
            ))}
        </div>
    )
}

export default Labs
