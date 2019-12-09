import japan1 from '../images/hostels/japan1.jpg';
import japan2 from '../images/hostels/japan2.jpg';
import japan3 from '../images/hostels/japan3.jpg';
import iceland1 from '../images/hostels/iceland1.jpg';
import iceland2 from '../images/hostels/iceland2.jpg';
import iceland3 from '../images/hostels/iceland3.jpg';
import thailand1 from '../images/hostels/thailand1.jpg';
import thailand2 from '../images/hostels/thailand2.jpg';
import thailand3 from '../images/hostels/thailand3.jpg';
import us1 from '../images/hostels/us1.jpg';
import us2 from '../images/hostels/us2.jpg';
import us3 from '../images/hostels/us3.jpg';

export const rooms = [
    {
        id: 'japan',
        country: 'Japan',
        featured: true,
        breakfast: true,
        type: 'Capsule',
        bed: 'Single Bed',
        price: 30,
        capacity: 3,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nam repudiandae neque quos officiis doloremque ad, voluptate explicabo praesentium dolorum error? Incidunt cum laudantium eos eius atque, repellat ea eum.',
        facilities: [
            'Free WiFi',
            'Air conditioning',
            'Shared bathroom',
            'Heating',
            'Cleaning products',
            'Linen',
            'Elevator',
            'Towels',
            'Slippers'
        ],
        images: [japan1, japan2, japan3],
    },
    {
        id: 'iceland',
        country: 'Iceland',
        featured: true,
        breakfast: false,
        type: 'Capsule',
        bed: 'Single Bed',
        price: 40,
        capacity: 5,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nam repudiandae neque quos officiis doloremque ad, voluptate explicabo praesentium dolorum error? Incidunt cum laudantium eos eius atque, repellat ea eum.',
        facilities: [
            'Free WiFi',
            'Shared bathroom',
            'Heating',
            'Linen'
        ],
        images: [iceland1, iceland2, iceland3],
    },
    {
        id: 'us',
        country: 'United States',
        featured: true,
        breakfast: true,
        type: 'Mixed Dormitory Room',
        bed: 'Single Bed',
        price: 30,
        capacity: 3,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nam repudiandae neque quos officiis doloremque ad, voluptate explicabo praesentium dolorum error? Incidunt cum laudantium eos eius atque, repellat ea eum.',
        facilities: [
            'Free WiFi',
            'Air conditioning',
            'Shared bathroom',
            'Heating',
            'Linen'
        ],
        images: [us1, us2, us3],
    },
    {
        id: 'thailand',
        country: 'Thailand',
        featured: false,
        breakfast: false,
        type: 'Mixed Dormitory Room',
        bed: 'Bunk Bed',
        price: 15,
        capacity: 8,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nam repudiandae neque quos officiis doloremque ad, voluptate explicabo praesentium dolorum error? Incidunt cum laudantium eos eius atque, repellat ea eum.',
        facilities: [
            'Free WiFi',
            'Air conditioning',
            'Shower',
            'Cleaning products',
            'Towels',
            'Linen',
            'Hairdryer'
        ],
        images: [thailand1, thailand2, thailand3],
    },
]