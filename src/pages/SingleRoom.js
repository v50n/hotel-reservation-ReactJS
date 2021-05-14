import React from 'react';
import {useParams} from 'react-router-dom';
import RoomsData from './../data';
import Error from './Error';
import StyledHero from './../components/StyledHero';
import HeroBanner from '../components/HeroBanner';
import '../css/SingleRoom.css';


export default function SingleRoom() {
    const {slug} = useParams();
    const room = RoomsData.filter(room => room.fields.slug === slug)
    const {name, price, size, capacity, pets, breakfast, description, extras, images} = room[0].fields;
    if(room.length === 0){
        return <Error />
    }else{
        return (
            <div>
                <StyledHero bckImg={images[0].fields.file.url}>
                    <HeroBanner title={name} btnTitle="Back to rooms"></HeroBanner>
                </StyledHero>
                <div className="SingleRoomContainer">
                    Single Rooms Container here
                    <div className="roomImgDetail">
                        {
                            images.filter((item,index) => index !== 0 ? item.fields.file.url : null)
                                    .map((img, index) => <img src={img.fields.file.url} alt="" key={index} />)
                        }
                    </div>
                    <div className="singleRoomInfo">
                        <div className="singleInfo singleDetail">
                            <h1>Details</h1>
                            <p>{description}</p>
                        </div>
                        <div className="singleInfo">
                            <h1>Info</h1>
                            <p><span>Price : ${price}</span></p>
                            <p><span>Size: {size} SQFT</span></p>
                            <p><span>Max capacity: {capacity} People</span></p>
                            <p><span>{pets ? 'Pets Allowed' : 'Pets Not Allowed'}</span></p>
                            <p><span>{breakfast ? 'Free Breakfast Included' : 'Free Breakfast Not Included'}</span></p>
                        </div>
                        <div className="singleInfo singleExtra">
                            <h1>Extra</h1>
                            <div className="extraDetail">
                            {
                                extras.map((extra,index) => <p key={index}><span> - {extra}</span></p>)
                            }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

