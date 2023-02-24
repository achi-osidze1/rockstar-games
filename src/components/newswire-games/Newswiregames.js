import React from 'react'
import { Link } from "react-router-dom";

const Newswiregames = () => {
  return (
    <div className='container mt-5 mb-5'>
        <h2 className='text-white'>Newswire</h2>
        <div className='game-container mt-3'>
            <div class="card" style={{width: "20rem"}}>
                <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/k42a89o1a72712/0b53286c6683c011caafeb4854add2db9c7723ae.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">GTA Online <span style={{color:"gray"}}>February 23, 2023</span></p>
                    <h5>Nightclub Owners Seeing Double with Income Bonuses and More</h5>
                </div>
            </div>
            <div class="card" style={{width: "20rem"}}>
                <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/4k574ooaoo5o89/b0dc8b71d6a0fb26d0e0c40a32adf4ea1f589162.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">GTA Online <span style={{color:"gray"}}>February 16, 2023</span></p>
                    <h5>GTA+ Members Can Claim the 50-Vehicle Eclipse Blvd Garage and the Emperor Vectre</h5>
                </div>
            </div>
            <div class="card" style={{width: "20rem"}}>
                <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/7529ak33471241/ae460385d717af472990f092385e7e7804bddc00.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">GTA Online <span style={{color:"gray"}}>February 16, 2023</span></p>
                    <h5>Showcase Up to 50 Vehicles with the New Eclipse Blvd Garage</h5>
                </div>
            </div>
            <div class="card" style={{width: "20rem"}}>
                <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/k42a2188oa2911/96fe002066c99bfa5fad11d1bbe2b73050f43c64.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">GTA Online <span style={{color:"gray"}}>February 15, 2023</span></p>
                    <h5>Community Showcase: The Lives of Cabbies at the Downtown Cab Co.</h5>
                </div>
            </div>
            <div class="card" style={{width: "20rem"}}>
                <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/173891ak73k4o2/340053ac45cd16b3f96a00c314090466ce2bf7c4.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Rockstar Games <span style={{color:"gray"}}>February 10, 2023</span></p>
                    <h5>CircoLoco Records Presents Know Now feat. Poté from Chloé Caillet </h5>
                </div>
            </div>
            <div class="card" style={{width: "20rem"}}>
                <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/25k222koa98k2o/4981205a3404b6b14fd7564ea830dd07d93565d2.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">GTA Online <span style={{color:"gray"}}>February 9, 2023</span></p>
                    <h5>Travel Back in Time with the Classique Broadway Muscle Car</h5>
                </div>
            </div>
        </div>
        <div className='button'>
            <Link to="/newswire"><button className='btn-center mt-4'>View More</button></Link>
        </div>
    </div>
  )
}

export default Newswiregames