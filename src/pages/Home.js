import React from 'react'
import Hero from '../components/Hero'
import HeroBanner from '../components/HeroBanner'
import './../css/Home.css';
import FeaturedRooms from '../components/FeaturedRooms';
import ServicesSection from '../components/ServicesSection';

const Home = () => {

    return (
        <div>
            <Hero>
                <HeroBanner title="Luxurious Rooms" btnTitle="our rooms" desc="Deluxe Rooms Starting At $299"/>
            </Hero>
            <ServicesSection />
            <FeaturedRooms />
        </div>
    )
}

export default Home;
