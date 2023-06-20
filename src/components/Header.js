import React from 'react'
import globe from '../images/globe.png'

export default function Header() {
    return (
        <div className='header'>
            <img className='globe' src={globe} />
            <h1 className='title'>My Travel Journal</h1>
        </div>
    )
}