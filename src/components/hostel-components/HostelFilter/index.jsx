import React from 'react';
import { HostelConsumer } from '../../../context';
import './hostel-filter.scss';

function HostelFilter({ hostels }) {
    return (
        <HostelConsumer>
            {hostelFilter => {
                const { min, max, type, capacity, breakfast, changeHandler, getKey, search, } = hostelFilter;
                let types = getKey(hostels, 'type');
                types = ['Select All', ...types];
                types = types.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                ));
                let guests = getKey(hostels, 'capacity');
                guests = guests.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                ));
                return (
                    <div className='hostel-filter'>
                        <label htmlFor='search'>Search</label>
                        <div className='hostel-filter-item'>
                            <input
                                type='text'
                                id='search'
                                name='search'
                                onChange={changeHandler}
                                value={search}
                                className='filter-search'
                            />
                        </div>
                        <label htmlFor='type'>Hostel Type</label>
                        <div className='hostel-filter-item'>
                            <select
                                id='type'
                                name='type'
                                onChange={changeHandler}
                                value={type}
                                className='filter-type'
                            >
                                {types}
                            </select>
                        </div>
                        <label htmlFor='capacity'>Guests</label>
                        <div className='hostel-filter-item'>
                            <select
                                id='capacity'
                                name='capacity'
                                onChange={changeHandler}
                                value={capacity}
                                className='filter-capacity'
                            >
                                {guests}
                            </select>
                        </div>
                        <label htmlFor='price'>Price(£)</label>
                        <div className='hostel-filter-item'>

                            <input
                                id='number'
                                name='min'
                                onChange={changeHandler}
                                value={min}
                                className='filter-price'
                            />
                            <input
                                id='number'
                                name='max'
                                onChange={changeHandler}
                                value={max}
                                className='filter-price'
                            />
                        </div>
                        <label htmlFor='breakfast'>Breakfast</label>
                        <div className='hostel-filter-item'>

                            <input
                                type='checkbox'
                                name='breakfast'
                                id='breakfast'
                                className='filter-breakfast'
                                checked={breakfast}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                );
            }}
        </HostelConsumer>
    )
}

export default HostelFilter;
