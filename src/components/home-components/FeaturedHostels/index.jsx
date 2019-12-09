import React from 'react';
import { HostelConsumer } from '../../../context';
import Hostel from '../../hostel-components/Hostel';
import Loading from '../../Loading';
import './featured-hostels.scss';

function FeaturedHostels() {
    return (
        <>  
            <h3 className='title'>Hostels of the Year!</h3>
            <>
                <HostelConsumer>
                    {featuredHostel => {
                        const { featuredHostels, loading } = featuredHostel;
                        return (
                            <div className='featured-hostels'>
                                {
                                    loading ? <Loading /> :
                                    featuredHostels.map(hostel => (
                                        <Hostel
                                            key={hostel.id}
                                            hostel={hostel}
                                        />
                                    ))
                                }
                            </div>
                        ); 
                    }}
                </HostelConsumer>
            </>
        </>
    )
}

export default FeaturedHostels;

