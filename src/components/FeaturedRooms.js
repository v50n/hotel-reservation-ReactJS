import React from 'react'
import data from './../data';
import {Link} from 'react-router-dom'

export default function FeaturedRooms() {
    var featuredRoom = data.filter(room => room.fields.featured === true);
    console.log(featuredRoom)
    return (
        <div className="featured-section">
            <h1>Featured Rooms</h1>
            <hr />
            <div className="rooms-list">
                {
                    featuredRoom.map((room,index) =>{
                        return (
                            <div className="roomDetail" key={index}>

                                <div className="roomImage">
                                    <img src={room.fields.images[0].fields.file.url} alt="image" />
                                    <div className="roomPrice">
                                    ${room.fields.price}
                                    <p className="night"><span>per night</span></p>
                                    </div>
                                    
                                        <Link to={"/rooms/" + room.fields.slug}className="btn-features">Features</Link>
                                    

                                </div>
                                <div className="roomName">
                                    <h2>{room.fields.name}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
