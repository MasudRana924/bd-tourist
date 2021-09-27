import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons' 


import './Place.css'
const place = (props) => {
    const { img, name, division, country, revenue } = props.place
    const cartIcon = <FontAwesomeIcon icon={faInfoCircle} />
  
    
    return (
        <div className="col-md-4 mb-3">
            <div className="card  mb-3 h-100">
                <img src={img} alt="" className="img-fluid " />
                <div className="card-body">
                    <h2>{name}</h2>
                    <p>Location : <small>{division}</small></p>
                    <p> Country : <small>{country}</small></p>
                    <p>Revenue: ${revenue}</p>
                    <FontAwesomeIcon icon={faFacebookF} className="icon "/> 
                    <FontAwesomeIcon icon={faInstagram} className="insta-icon "/> 
                    <FontAwesomeIcon icon={faYoutube} className="youtube-icon"/> 
                    <br />
                  
                    <button className="btn btn-secondary mt-3"
                        onClick={() => props.handleDetails(props.place)}

                    >{cartIcon}  Show Details</button>

                </div>
            </div>
        </div>
    );
};

export default place;