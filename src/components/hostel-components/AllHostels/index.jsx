import React from 'react';
import { HostelConsumer } from '../../../context';
import HostelItems from '../../hostel-components/HostelItems';
import HostelFilter from '../../hostel-components/HostelFilter';
import Loading from '../../Loading';

function AllHostels() {
    return (
        <HostelConsumer>
            {allHostels => {
                const { hostels, groupedHostels, loading } = allHostels;
                return (
                    <>
                        {
                            loading ? <Loading /> :
                                <div>
                                    <HostelFilter hostels={hostels} />
                                    <HostelItems hostels={groupedHostels} />
                                </div>
                        }
                    </>
                );
            }}
        </HostelConsumer>
    )
}

export default AllHostels;
