import React from 'react'
import StyledHero from '../components/StyledHero';
import HeroBanner from '../components/HeroBanner';

const Rooms = () => {
    return (
        <div>
            <StyledHero>
                <HeroBanner title="Our rooms" btnTitle="Return to rooms"></HeroBanner>
            </StyledHero>
            <section>
                <form action="">
                    <h1>
                        Search Rooms
                    </h1>
                    <select name="" id="selectRoom">
                        <option value="all">all</option>
                    </select>
                </form>
            </section>
        </div>
    )
}

export default Rooms;
