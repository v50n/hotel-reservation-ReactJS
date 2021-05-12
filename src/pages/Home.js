import React from 'react'
import Hero from '../components/Hero'
import HeroBanner from '../components/HeroBanner'
import './../css/Home.css';
import ServicesData from "./../ServicesData";
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {

    return (
        <div>
            <Hero>
                <HeroBanner title="Luxurious Rooms" btnTitle="our rooms" desc="Deluxe Rooms Starting At $299"/>
            </Hero>
            <div className="service-section">
                <h1>Services</h1>
                <hr />
                <div className="service-list">
                    
                        {
                            ServicesData.map(service => {
                                return (
                                    <div  className="service-detail" key={service.id}>
                                        <div className="service-icon">{service.icon}</div>
                                        <div className="service-title">{service.title}</div> 
                                        <div className="service-desc">
                                            <p>{service.desc}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                </div>
            </div>
            <FeaturedRooms />
        </div>
    )
}

export default Home;
