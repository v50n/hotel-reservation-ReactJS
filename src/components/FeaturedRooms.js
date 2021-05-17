import React from 'react'
import data from './../data';
import RoomsCart from './RoomsCart';

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
                            <RoomsCart index={index} room={room}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
