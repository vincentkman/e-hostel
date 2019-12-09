import React from 'react';
import { Link } from 'react-router-dom';
import './hostel.scss';

function Hostel({ hostel }) {
    const { country, images, price } = hostel;
    return (
        <div className='all-hostels-container'>
            <div className='all-hostels-item'>
                <img
                    src={images[0]}
                    alt="hostel room"
                    className='all-hostels-item-img img'
                />
                <span>
                    <h2 className='all-hostels-item-heading'>{country}</h2>
                </span>
                <span>
                    <h5 className='all-hostels-item-price'>{price} per night</h5>
                </span>
                <div className='all-hostels-item-overlay overlay'>
                    <Link
                        to={`/hostels/${hostel.id}`}
                    >
                        <i className='fas fa-search all-hostels-item-overlay-icon icon' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hostel;
