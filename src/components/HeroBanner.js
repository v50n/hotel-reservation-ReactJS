import React from 'react';
import './../css/Hero.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export default function HeroBanner({title,desc,btnTitle}) {
    return (
        <div className="HeroBanner">
            <h1 className="banner-title">{title}</h1>
            <hr />
            {
                desc ? (
                    <p>{desc}</p>
                ) : null
            }
            <Link to="/rooms">
                <button className="btn-banner">{btnTitle}</button>
            </Link>
            
        </div>
    )
}

HeroBanner.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    btnTitle: PropTypes.string,
}
