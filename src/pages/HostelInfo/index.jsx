import React from 'react';
import { HostelContext, HostelConsumer } from '../../context';
import { Link } from 'react-router-dom';
import StyledLandingPage from '../../components/styled-components/StyledLandingPage';
import originalImg from '../../images/background/mountain.jpeg';
import Loading from '../../components/Loading';
import './hostel-info.scss';
import { useParams } from 'react-router-dom';

function HostelInfo() {
    const { id } = useParams();
    const { hostels, getHostel } = React.useContext(HostelContext);
    // const hostel = hostels.find(item => item.id === id);
    const hostel = getHostel(id);
    if (!hostel) {
        return <Loading />;
    }
    const { country, type, price, images, capacity, description, breakfast, facilities } = hostel;
    const [landingPageImg, ...smallImages] = images;
    return (
        <div>
            <StyledLandingPage img={landingPageImg || originalImg}>
                <div className="landing-page-inner">
                    <h1 className='landing-page-inner-item'>{country}</h1>
                    <Link to='/hostels'>
                        <button className="btn-default">Back to hostels</button>
                    </Link>
                </div>
            </StyledLandingPage>
            <div className='hostel-info'>
                <h3>{type}</h3>
                <div className='hostel-info-img-container'>
                    {smallImages.map((item, i) => (
                        <img
                            key={i}
                            src={item}
                            alt={country}
                        />
                    ))}
                </div>

                <h3 className='text-center'><span className='hostel-info-price'>£{price}</span> per night</h3>
                <div className='hostel-info-detail'>
                    <p>{description}</p>
                    <div className='hostel-info-detail-item'>
                        {
                            capacity <= 5 ?
                                <h6>
                                    Availability: Only
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                                        {` ${capacity} `}
                                    </span>
                                    beds left!
                                </h6> :
                                <h6>
                                    Availability:
                                    <span style={{ fontWeight: 'bold' }}>
                                        {` ${capacity} `}
                                    </span>
                                    beds available
                                </h6>
                        }
                        <h6>{breakfast ? 'Breakfast: Yes' : 'Breakfast: No'}</h6>
                        <h6>Facilities</h6>
                        <ul>
                            {
                                facilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostelInfo;
