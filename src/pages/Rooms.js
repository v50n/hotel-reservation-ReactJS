import React, { useEffect, useState } from 'react'
import StyledHero from '../components/StyledHero';
import HeroBanner from '../components/HeroBanner';
import '../css/Rooms.css';
import data from '../data';
import RoomsCart from '../components/RoomsCart';

const Rooms = () => {
    
    const [roomData, setRoomData] = useState(data);
    const [roomType, setRoomType] = useState('all');
    const [guess, setGuess] = useState(1);
    const handleRoomTypeSelect = (e) =>{
        setRoomType(e.target.value);
    }
    const handleGuessSelect = (e) =>{
        setGuess(e.target.value);
    }
    useEffect(()=>{
        console.log(roomType)
        if(roomType === "all"){
            setRoomData(data)
        }else{
            setRoomData(data.filter(val => val.fields.type === roomType)
                            .filter(val => val.fields.capacity === guess))
        }

        console.log(roomData)
    },[roomType])
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
                            <select value={roomType} onChange={handleRoomTypeSelect} name="typeOfRoom" id="typeOfRoom">
                                <option value="all">all</option>
                                <option value="single">single</option>
                                <option value="double">double</option>
                                <option value="family">family</option>
                                <option value="presidential">presidential</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <label htmlFor="guess">Guests</label>
                            <select name="guess" id="guess" value={guess} onChange={handleGuessSelect}>
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
                                <label htmlFor="breakfast">Breakfast</label>
                            </div>

                            <div className="option">
                                <input type="checkbox" id="pets" name="pets" />
                                <label htmlFor="pets">Pets</label>
                            </div>
                        </div>
                    </div>
 
                </form>

                <div className="rooms-list rooms-list-search-page">
                    {
                        roomData.map((room,index) => <RoomsCart index={index} room={room} key={index} />)
                    }
                </div>
            </section>
        </div>
    )
}

export default Rooms;
