import React from 'react'
import "./patientInfo.css"
import profile from '../../assets/Layer 2@2x.png'
import calender from '../../assets/BirthIcon.svg'
import gender from '../../assets/FemaleIcon.svg'
import phone from '../../assets/PhoneIcon.svg'
import insurance from '../../assets/InsuranceIcon.svg'


function PatientInfo({ data }) {
    if (!data) return <div>No patient data available</div>;
    return (
        <div className='patientInfo-list-main-container'>
            <div className='profile-main-container'>
                <img className='profile-main-img' src={data.profile_picture} alt="profile" />
            </div>
            <p className='patientInfo-main-name-txt'>{data.name || "N/A"}</p>

            <div className='patientInfo-chat-main-container'>
                <div className='patientInfo-name-container'>
                    <div>
                        <img className='profileInfo-img' src={calender} alt="calender" />
                    </div>
                    <div>
                        <p className='patientInfo-name-txt'>Date Of Birth</p>
                        <p className='patientInfo-name-age'>{data.date_of_birth || "N/A"}</p>
                    </div>
                </div>
            </div>
            <div className='patientInfo-chat-main-container'>
                <div className='patientInfo-name-container'>
                    <div>
                        <img className='profileInfo-img' src={gender} alt="gender" />
                    </div>
                    <div>
                        <p className='patientInfo-name-txt'>Gender</p>
                        <p className='patientInfo-name-age'>{data.gender || "N/A"}</p>
                    </div>
                </div>
            </div>
            <div className='patientInfo-chat-main-container'>
                <div className='patientInfo-name-container'>
                    <div>
                        <img className='profileInfo-img' src={phone} alt="phone" />
                    </div>
                    <div>
                        <p className='patientInfo-name-txt'>Contact Info.</p>
                        <p className='patientInfo-name-age'>{data.phone_number || "N/A"}</p>
                    </div>
                </div>
            </div>
            <div className='patientInfo-chat-main-container'>
                <div className='patientInfo-name-container'>
                    <div>
                        <img className='profileInfo-img' src={phone} alt="phone" />
                    </div>
                    <div>
                        <p className='patientInfo-name-txt'>Emergency Contacts</p>
                        <p className='patientInfo-name-age'>{data.emergency_contact || "N/A"}</p>
                    </div>
                </div>
            </div>
            <div className='patientInfo-chat-main-container'>
                <div className='patientInfo-name-container'>
                    <div>
                        <img className='profileInfo-img' src={insurance} alt="insurance" />
                    </div>
                    <div>
                        <p className='patientInfo-name-txt'>Insurance Provider</p>
                        <p className='patientInfo-name-age'>August 23, 1996</p>
                    </div>
                </div>
            </div>

            <div className='patientInfo-btn'>Show All Information</div>

        </div>
    )
}

export default PatientInfo