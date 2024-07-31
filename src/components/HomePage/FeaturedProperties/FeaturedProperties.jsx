import React from 'react'
import lodge1 from "../../../assets/lodge_1.png"
import lodge2 from "../../../assets/lodge_2.png"
import lodge3 from "../../../assets/lodge_3.png"
import { FaStar } from "react-icons/fa"
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { IoSparklesSharp } from "react-icons/io5";
import { FaHandPointLeft, FaHandPointRight } from 'react-icons/fa'
import "./featuredProperties.css"

const FeaturedProperties = () => {

const properties = [
    {
        id: 1,
        image: lodge1,
        heading: "Seaside Serenity Villa",
        text: "A stunning 4-bedroom, 3-bathroom villa in a peaceful surburban neighbourhood..",
        bedroom: 4,
        bathroom: 3,
        price: "$550,000",
        icon: <FaStar/>
    },
    {
        id: 2,
        image: lodge2,
        heading: "Metropolitan Haven",
        text: "A chic and fully-funded 2-bedroom apartment with panoramic city views..",
        bedroom: 2,
        bathroom: 2,
        price: "$450,000",
        icon: <FaStar/>
    },
    {
        id: 3,
        image: lodge3,
        heading: "Rustic Retreat Cottage",
        text: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community..",
        bedroom: 4,
        bathroom: 3,
        price: "$650,000",
        icon: <FaStar/>
    },
    {
        id: 4,
        image: lodge3,
        heading: "Rustic Retreat Cottage",
        text: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community..",
        bedroom: 4,
        bathroom: 3,
        price: "$650,000",
        icon: <FaStar/>
    },
    {
        id: 5,
        image: lodge3,
        heading: "Rustic Retreat Cottage",
        text: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community..",
        bedroom: 4,
        bathroom: 3,
        price: "$650,000",
        icon: <FaStar/>
    },
    {
        id: 6,
        image: lodge3,
        heading: "Rustic Retreat Cottage",
        text: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community..",
        bedroom: 4,
        bathroom: 3,
        price: "$650,000",
        icon: <FaStar/>
    },
    {
        id: 7,
        image: lodge3,
        heading: "Rustic Retreat Cottage",
        text: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community..",
        bedroom: 4,
        bathroom: 3,
        price: "$650,000",
        icon: <FaStar/>
    },
]

return (
    <div className='featured-properties section-padding'>
        <div className="featured-text">
            <div className="featured-description">
                <IoSparklesSharp />
                <h1>Featured Properties</h1>
                <p>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional lodges available through NxLodge. Click "View All Properties" for more information.</p>
            </div>
            <button>View All Properties</button>
        </div>
        <p className='scroll-info'>Scroll Left <FaHandPointLeft size={34} color="blue" /> or Right <FaHandPointRight size={34} color="blue" /> for other featured lodges.</p>
        <div className="featured-content">
            {
                properties.map(property => (
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
                ))
            }


        </div>
    </div>
    )
}

export default FeaturedProperties
