import React from 'react';
import { rooms } from './hostelData';

const HostelContext = React.createContext();
const HostelConsumer = HostelContext.Consumer;

class HostelProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            navbarOpen: false,
            loading: true,
            breakfast: false,
            hostels: [],
            featuredHostels: [],
            groupedHostels: [],
            type: 'Select All',
            capacity: 1,
            price: 0,
            min: 0,
            max: 0,
            search: '',
        }
    }

    componentDidMount() {
        this.setItems(rooms);
    }

    setItems = (rooms) => {
        // To gain access to the Hostel database 
        const hostels = rooms.map(room => {
            // gather all properties
            const hostel = { ...room };
            return hostel;
        });
        // to show featured hostels only on the home page
        const featuredHostels = hostels.filter(hostel => hostel.featured);
        const max = Math.max(...hostels.map(hostel => hostel.price));
        // change state
        this.setState({
            hostels,
            groupedHostels: hostels,
            featuredHostels,
            loading: false,
            price: max,
            max,
        });
    }

    // Navbar drop down menu when in mobile mode
    navbarToggleHandler = () => {
        this.setState({
            navbarOpen: !this.state.navbarOpen
        });
    }

    // to access to a single page for each hostel selected
    getHostel = (id) => {
        const tempHostels = [...this.state.hostels];
        const hostel = tempHostels.find(item => item.id === id);
        return hostel;
    }

    // to search for the most preferred hostels based on its filter
    changeHandler = (e) => {
        const target = e.target;
        this.setState({
            [target.name]: target.type === 'checkbox' ? target.checked : target.value
        },
            this.filterHostels
        );
    }

    // to get rid of duplicate words
    getKey = (keys, value) => {
        return [...new Set(keys.map(key => key[value]))];
    }

    filterHostels = () => {
        const { hostels, type, breakfast, capacity, min, max, search, } = this.state;
        // gather all hostels
        let tempHostels = [...hostels];

        // to filter based on the type of bed
        if (type !== 'Select All') {
            tempHostels = tempHostels.filter(hostel => hostel.type === type);
        }

        // to filter based on the number of guests
        if (capacity !== 1) {
            tempHostels = tempHostels.filter(hostel => hostel.capacity >= capacity);
        }

        // to filter based on price
        tempHostels = tempHostels.filter(hostel => hostel.price >= min && hostel.price <= max);

        // to filter based on breakfast
        if (breakfast) {
            tempHostels = tempHostels.filter(hostel => hostel.breakfast);
        }

        // to filter based on search 
        if (search.length > 0) {
            tempHostels = tempHostels.filter(hostel => {
                const tempSearch = search.toUpperCase();
                const tempCountry = hostel.country.toUpperCase().slice(0, search.length);
                if (tempSearch === tempCountry) {
                    return hostel;
                }
            });
        }
        // change the states
        this.setState({
            groupedHostels: tempHostels
        });
    }

    render() {
        return (
            <div>
                <HostelContext.Provider value={{
                    ...this.state,
                    navbarToggleHandler: this.navbarToggleHandler,
                    getHostel: this.getHostel,
                    changeHandler: this.changeHandler,
                    getKey: this.getKey,
                }}>
                    {this.props.children}
                </HostelContext.Provider>
            </div>
        );
    }
}

export { HostelProvider, HostelConsumer, HostelContext };