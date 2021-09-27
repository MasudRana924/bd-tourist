import React, { useEffect, useState } from 'react';
import './Places.css'
import Place from '../Place/Place'
import Details from '../Details/Details';

const Places = () => {
    const [places, setPlaces] = useState([])
    const [displayPlaces, setDisplayePlaces] = useState([])
    const [matchedItems, setMatchedItems] = useState([])
    useEffect(() => {
        fetch('./tourists.JSON')
            .then(res => res.json())
            .then(data => {
                setPlaces(data)
                setMatchedItems(data)
            })
    }, [])
    const handleDetails = place => {

        const newPlace = [...displayPlaces, place]
        setDisplayePlaces(newPlace)
    }


    const handleSearch = event => {
        const searchText = event.target.value
        const matchedItems = places.filter(place => place.name.toLowerCase().includes(searchText.toLowerCase()))

        //   dekhanu matched item gula tarjonno state korte hobe 
        setMatchedItems(matchedItems)

    }
    return (
        <>

            <div className="row  bg-dark  pt-5 pb-5 ">
                <div className="col-md-4 col-sm-12">
                    <a className=" a-link pe-3 " href="">Home</a>
                    <a className=" a-link pe-3" href="">About US</a>
                    <a className=" a-link" href="">Contact US</a>

                </div>
                <div className=" col-md-6 col-sm-6 input-field">
                    <input onChange={handleSearch} class="form-control " type="search" placeholder=" search a place here" />
                </div>
            </div>





            <div className="row places ">

                <div className="col-md-9 col-sm-12 place-container">
                    <div className="row">
                        {
                            matchedItems.map(place => <Place
                                key={place.id}
                                place={place}
                                handleDetails={handleDetails}

                            ></Place>)
                        }
                    </div>
                </div>

                <div className="col-md-3 col-sm-12 details-container">
                    <h2 className="text-center text">Details</h2>
                    <Details
                        key={displayPlaces.id}
                        details={displayPlaces}

                    ></Details>
                </div>

            </div>
        </>
    );
};

export default Places;