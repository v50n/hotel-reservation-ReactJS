import React from 'react'
import StyledHero from '../components/StyledHero';
import HeroBanner from '../components/HeroBanner';
import '../css/Rooms.css';
import data from '../data';

const Rooms = () => {

    return (
        <div>
            <StyledHero>
                <HeroBanner title="Our rooms" btnTitle="Return to rooms"></HeroBanner>
            </StyledHero>
            <section className="Rooms-section">
                <form action="">
                    <h1>
                        Search Rooms
                    </h1>
                    <hr />
                    <div className="form-filter">
                        <div className="form-group">
                            <label htmlFor="typeOfRoom">Room Type</label>
                            <select name="typeOfRoom" id="typeOfRoom">
                                <option value="all">all</option>
                                <option value="single">single</option>
                                <option value="double">double</option>
                                <option value="family">family</option>
                                <option value="presidential">presidential</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <label htmlFor="guess">Guests</label>
                            <select name="guess" id="guess">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="range" id="price" name="price" min="0" max="600" defaultValue="600" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="size">Room Size</label>
                            <div className="size-input">
                                <input type="number" defaultValue="0" min="0" max="999"/>
                                <input type="number" defaultValue="1000" min="1" max="1000"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="option">
                                <input type="checkbox" id="breakfast" name="breakfast" />
                                <label for="breakfast">Breakfast</label>
                            </div>

                            <div className="option">
                                <input type="checkbox" id="pets" name="pets" />
                                <label for="pets">Pets</label>
                            </div>
                        </div>
                    </div>
 
                </form>
            </section>
        </div>
    )
}

export default Rooms;
