import React from 'react';
import './messages.scss';

const MessageItem = ({ icon, title, description }) => {
    return (
        <div className="messages-item">
            <i className={`fas messages-item-icon icon ${icon}`} />
            <h3 className='messages-item-title'>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Messages() {
    return (
        <div className="messages">
            <MessageItem icon='fa-plane' title='Travel the World'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, quod?'
            />
            <MessageItem icon='fa-bed' title='Affordable Hostels'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, quod?'
            />
            <MessageItem icon='fa-hiking' title='Go Hiking'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, quod?'
            />
        </div>
    )
}

export default Messages;
