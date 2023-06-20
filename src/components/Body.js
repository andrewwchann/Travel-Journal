import React from 'react';
import pin from '../images/pin.png'
import VanPhoto from '../images/vancouver.jpg';

export default function Template(props) {
    return (
        <div className='body-container'>
            <div className='content'>
                <div className='photo-container'>
                    <img className='van-photo' src={VanPhoto} />
                </div>

                <div className='info-container'>
                    <div className='loc-link'>
                        <img className='location-pin' src={pin} />
                        <p className='location'>{props.item.location}</p>
                        <a className='maps-link' href={props.item.googleMapsURL} target='_blank'>View on Google Maps</a>
                    </div>
                    <h1 className='title-entry'>{props.item.title}</h1>
                    <p className='date'>{props.item.date}</p>
                    <p className='description'>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}
