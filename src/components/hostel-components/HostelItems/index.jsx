import React from 'react';
import Hostel from '../../hostel-components/Hostel';
import { HostelConsumer } from '../../../context';
import Loading from '../../Loading';
import '../../hostel-components/AllHostels/all-hostels.scss';

function HostelItems({ hostels }) {
    return (
        <HostelConsumer>
            {hostelItem => {
                const { loading } = hostelItem;
                return (
                    <div>
                        {   
                            loading ? <Loading /> :
                             <div className='all-hostels'>
                             {
                                 hostels.map(item => (
                                     <Hostel
                                         key={item.id}
                                         hostel={item}
                                     />
                                 ))
                             }
                         </div>
                        }
                    </div>
                );
            }}
        </HostelConsumer>
       
    )
}

export default HostelItems;
