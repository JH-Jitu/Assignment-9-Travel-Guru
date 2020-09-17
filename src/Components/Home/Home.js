import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css"

import { useHistory } from 'react-router-dom';

export default function Home({room}){
    // const {imgUrl} = props.room
    const history = useHistory()
    const handleBook = (placeLink) => {
        history.push(`/book/${room.name}`);
    }
    // console.log(room.name)

    return (
        <div className="container">
            <div className="placeName">
                <div >
                    <img src={room.image} alt=""/>
                    <h3>{room.name}</h3>
                    <button onClick={() => handleBook(room.placeLink)} variant="contained" color="primary">Book The room</button>
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
            
        </div>
    );
};

// export default Home;