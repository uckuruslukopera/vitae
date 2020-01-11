import React from 'react';
import {
    Link

} from "react-router-dom";

const badgeStyle = {
    fontSize: '.8rem',
    verticalAlign: 'super'
};

// Tek imageUrl field'ı olduğu için mock olarak 120px'lik imagelar ekledim. Gerçek hayatta thumbnail v.s. olarak çeşitlendirilebilir. -- MT
const imgStyle = {
    height: '32px',
    width: '32px'
}



const Card = ({ image, title, text, link, badgeText }) => (


    <div className="media text-muted pt-3 ">
        <img className="img-fluid mr-2 mt-2" src={image} alt={title} style={imgStyle}></img>
        <div className="border-bottom border-gray pb-3 w-100">


            <p className="media-body small lh-125 ">
                <Link to={link} ><strong className="d-block text-gray-dark">{title} <span className="badge badge-pill badge-primary font-weight-light" style={badgeStyle}>{badgeText}</span></strong></Link>

                {text}
            </p>



        </div>

    </div>
)



export default Card;