import React, {useContext} from 'react';
import {AuthContext} from "../App";

const Hero = () => {
    const {logOut} =useContext(AuthContext)
    return (
        <div className='hero'>
            <nav>
                <h2>Welcome</h2>
                <button onClick={logOut}>Log Out</button>
            </nav>
            
        </div>
    );
};

export default Hero;