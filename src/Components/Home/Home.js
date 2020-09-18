import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css"

import { useHistory } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';

export default function Home({room}){
    // const {imgUrl} = props.room
    const history = useHistory()
    const handleBook = (placeLink) => {
        history.push(`/book/${room.name}`);
    }
    // console.log(room.name)

    return (
        <Container className="placesDetail">
            <div className="placeName">
                <div >
                    <img src={room.image} alt=""/>
                    <h5>{room.name}</h5>
                    <button className="btn btn-light" onClick={() => handleBook(room.placeLink)} variant="contained" color="primary">Book The room</button>
                </div>
                {/* <div>
                    <img src={img2} alt=""/>
                    <h3>Simple Caption</h3>
                </div>
                <div>
                    <img src={img3} alt=""/>
                    <h3>Simple Caption</h3>
                </div> */}
            </div>
            
        </Container>
    );
};

// export default Home;