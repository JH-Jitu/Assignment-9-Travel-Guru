import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/courses';

import BookingConfirmDetails from '../BookingConfirmDetails/BookingConfirmDetails';


const BookingConfirm = (props) => {
    const {placeLink} = useParams();
    // console.log(placeLink);
    // const [placeDetail, setPlaceDetail] = useState([]);
    const {map, hotels} = fakeData.find(visitingPlace => visitingPlace.name === placeLink);
    console.log(hotels);
    // console.log(props)

    // Maps:
    

    // useEffect(()=>{
    //     const url = fakeData;
    //     setPlaceDetail(url);
    //     // console.log(url)
    // }, [])
    
    return (
        <div  style={{textAlign: 'center'}}>
            <h1>Your {placeLink}'s room has been booked!</h1>
            <p style={{backgroundColor: 'lightgray', opacity: "60%"}}>Want to go <Link style={{textDecoration: "none"}} to="/home"><button className="btn btn-light"> other places?</button></Link> </p>
        <div className="row">
            
            {/* <img src={imgUrl} alt=""/> */}
            
            
            {/* <div>
            {
                placeDetail.map(hotels => <BookingConfirmDetails 
                    // key={room.bedType}
                     hotels={hotels}> </BookingConfirmDetails>)
            }</div> */}
            <div className="col-md-6 col-sm-12">
            {hotels.map(hotelValue => <BookingConfirmDetails hotelValue={hotelValue}></BookingConfirmDetails>)}
            
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 col-sm-12 LeftSidePart">
                <h3>Find Us On Map</h3>
            <iframe src={map} width="400px" height="400px" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div></div>
    );
};

export default BookingConfirm;