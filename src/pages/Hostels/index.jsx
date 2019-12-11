import React from 'react';
import LandingPage from '../../components/LandingPage';
import AllHostels from '../../components/hostel-components/AllHostels';
import './hostels.scss';

function Hostels() {
    return (
        <div className='hostels'>
            <div className='hostels-landing-page landing-page'>
                <LandingPage title='Hostels' route='/' btn_name='Return Home' />
            </div>
            <h1 className='title'>Hostels</h1>
            <AllHostels />
        </div>
    )
}

export default Hostels;