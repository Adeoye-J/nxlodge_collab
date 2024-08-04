import React from 'react'
import "./Property.css"

const Property = ({property}) => {
  return (
    <div className="property" key={property.id}>
        <div className="image-container">
            <img src={property.image} alt="Not Showing" />
        </div>

        <div className="property-summary">
            <h2>{property.heading}</h2>
            <p>{property.text} <span>Read More</span></p>
            
            <div className="property-component">
                <div className="comp">
                    {property.icon} <span>{property.bedroom}-Bedroom</span>
                </div>
                <div className="comp">
                    {property.icon} <span>{property.bathroom}-Bathroom</span>
                </div>
                <div className="comp">
                    {property.icon} <span>Villa</span>
                </div>
            </div>

            <div className="offer">
                <div className="price-details">
                    <p>Price</p>
                    <h4>{property.price}</h4>
                </div>
                <button>View Property Details</button>
            </div>
        </div>
    </div>
  )
}

export default Property
