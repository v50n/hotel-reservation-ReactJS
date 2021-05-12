import React from 'react'
import data from './../data';

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
                                <div className="roomPrice">
                                    ${room.fields.price}
                                    <div className="night"><span>per night</span></div>
                                </div>
                                <div className="roomImage">
                                    <img src={room.fields.images[0].fields.file.url} alt="" />
                                    <button className="btn-features">Features</button>
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
