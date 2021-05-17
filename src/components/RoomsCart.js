import React from 'react'
import {Link} from 'react-router-dom'

export default function RoomsCart({index, room}) {
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
}
