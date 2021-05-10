import React from 'react'
import Hero from '../components/Hero'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
    return (
        <div>
            <Hero>
                <HeroBanner title="Luxurious Rooms" btnTitle="our rooms" desc="Deluxe Rooms Starting At $299"/>
            </Hero>
        </div>
    )
}

export default Home;
