import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt>
                <div className='Tilt center br2 shadow-2 pa3' style={{ height: '8em', width: '8em'}}>
                    <img alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;