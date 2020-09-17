import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/courses';

import BookingConfirmDetails from '../BookingConfirmDetails/BookingConfirmDetails';


const BookingConfirm = (props) => {
    const {placeLink} = useParams();
    // console.log(placeLink);
    // const [placeDetail, setPlaceDetail] = useState([]);
    const {map, hotels} = fakeData.find(visitingPlace => visitingPlace.name === placeLink);
    console.log(map);
    // console.log(props)

    // Maps:
    

    // useEffect(()=>{
    //     const url = fakeData;
    //     setPlaceDetail(url);
    //     // console.log(url)
    // }, [])
    
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's book a {placeLink} Room.</h1>
            {/* <img src={imgUrl} alt=""/> */}
            <p>Want a <Link to="/home">different room?</Link> </p>
            
            {/* <div>
            {
                placeDetail.map(hotels => <BookingConfirmDetails 
                    // key={room.bedType}
                     hotels={hotels}> </BookingConfirmDetails>)
            }</div> */}
            <div>
            {hotels.map(hotelValue => <BookingConfirmDetails hotelValue={hotelValue}></BookingConfirmDetails>)}
            
            </div>

            <div>
            <iframe src={map} width="100%" height="675" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    );
};

export default BookingConfirm;