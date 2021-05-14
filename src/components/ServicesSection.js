import React from 'react';
import ServicesData from './../ServicesData'

export default function ServicesSection() {
    return (
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
    )
}
