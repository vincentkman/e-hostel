import React from 'react';
import LandingPage from '../../components/LandingPage';
import Messages from '../../components/home-components/Messages';
import FeaturedHostels from '../../components/home-components/FeaturedHostels';
import './home.scss';

function Home() {
    return (
        <div className='home'>
            <div className='home-landing-page landing-page'>
                <LandingPage title='HOSTEL' route='/hostels' btn_name='Check Rooms' />
            </div>
            <Messages />
            <FeaturedHostels />
        </div>
    );
}

export default Home;
