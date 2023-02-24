import React from 'react';
import { Link } from "react-router-dom";

function Featuredgames() {
    return(
        <div className='container mt-5 mb-5'>
            <h2 className='text'>Featured Games</h2>
            <div className='game-section mt-3'>
                <div className='game-image'>
                    <img className='game-img' src='https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/GTATrilogy.jpg' alt=''/>
                </div>
                <div className='game-image'>
                    <img className='game-img' src='https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/reddeadredemption2.jpg' alt=''/>
                </div>
                <div className='game-image'>
                    <img className='game-img' src='https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/reddeadonline.jpg' alt=''/>
                </div>
                <div className='game-image'>
                    <img className='game-img' src='https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/V.jpg' alt=''/>
                </div>
            </div>
            <div className='button'>
                <Link to="/games"><button className='btn-center mt-4'>View More</button></Link>
            </div>
        </div>
    )
}

export default Featuredgames;