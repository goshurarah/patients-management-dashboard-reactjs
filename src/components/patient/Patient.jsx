import React from 'react'
import "./patient.css"
import search from '../../assets/search_FILL0_wght300_GRAD0_opsz24.svg'
import ellipse from '../../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg'
import profile from '../../assets/Layer 2@2x.png'

function Patient({ data }) {
    const allData = data
    if (!allData || allData.length === 0) return <div>No patient data available</div>;

    return (
        <div className='patient-list-main-container'>
            <div className='side-patient-search-container'>
                <p className='patient-text'>Patients</p>
                <img className='search-img' src={search} alt="search" />
            </div>

            {allData.map((patient, index) => (
                <div className='patient-chat-main-container' key={index}>
                    <div className='patient-name-container'>
                        <div>
                            <img className='profile-img' src={patient.profile_picture} alt="profile" />
                        </div>
                        <div>
                            <p className='patient-name-txt'>{patient.name}</p>
                            <p className='patient-name-age'>{patient.gender}, {patient.age}</p>
                        </div>
                    </div>
                    <div>
                        <img className='ellipse-img' src={ellipse} alt="ellipse" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Patient