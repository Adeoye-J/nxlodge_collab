import React, { useRef } from 'react'
import lodge1 from "../../../assets/lodge_1.png"
import lodge2 from "../../../assets/lodge_2.png"
import lodge3 from "../../../assets/lodge_3.png"
import { FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { IoSparklesSharp } from "react-icons/io5";
import "./featuredProperties.css"
import Property from '../Property/Property'

const FeaturedProperties = () => {

    const scrollRef = useRef(null)

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            top: 0,
            left: -310,
            behavior: "smooth"
        })
    }
    const scrollRight = () => {
        scrollRef.current.scrollBy({
            top: 0,
            left: 310,
            behavior: "smooth"
        })
    }
    
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
        }
    ]

    return (
        <div className='featured-properties'>
            <div className="featured-text">
                <div className="featured-description">
                    <IoSparklesSharp />
                    <h1>Featured Properties</h1>
                    <p>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional lodges available through NxLodge. Click "View All Properties" for more information.</p>
                </div>

                <button>View All Properties</button>
            </div>
            
            <div className="arrows">
                <div className="arrow" onClick={scrollLeft}>
                    <FaArrowLeft size={18} color='#31B6C4'/>
                </div>

                <div className="arrow" onClick={scrollRight}>
                    <FaArrowRight size={18} color='#31B6C4'/>
                </div>
            </div>
            
            <div className="featured-content-wrapper" >
                <div className="featured-content"ref={scrollRef}>
                    {
                        properties.map(property => (
                            <Property property={property} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties
