import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import BookingFinal from '../BookingFinal/BookingFinal';

const BookingConfirmDetails = (props) => {

    const {name, price, rating, doubleBed, image} = props.hotelValue;
    console.log(name);
    
    // const {placeLink} = useParams();
    // // console.log(placeLink);
    // const hotelInPlace = props.hotels.hotels;
    // const [placeDetailFinal, setPlaceDetailFinal] = useState([]);
    // let mapSelect;
    // if(placeLink === "Cox's Bazar"){
    //     mapSelect = props.hotels.map1
    // }
    // else if( placeLink === "Sreemangal"){
    //     mapSelect = props.hotels.map2
    // }
    // else if( placeLink === "Sundarban"){
    //     mapSelect = props.hotels.map3
    // }
    // console.log(mapSelect);

    // useEffect(()=>{
    //     setPlaceDetailFinal(hotelInPlace);
    //     // console.log(hotelInPlace)
    // }, [])
    // console.log(hotelInPlace)
    
    // console.log(hotelInPlace);


    return (
        <div>
           <div>
            <img src={image} alt=""/>
            <p>Name: {name}</p>
            <p> <small> Deal value: {price}$/night </small></p>
            <p><small>Rating: {rating}</small></p>
            <p><small>Double Bed: {doubleBed} </small></p>
            </div> 
            
            
            
            
            
            
            
            
            {/* <div> */}
            {/* <h5>Name: {hotelInPlace}</h5> */}
            {/* {
                placeDetailFinal.map(ht => <BookingFinal
                    // key={room.bedType}
                     htt={ht}> </BookingFinal>)
            }</div> */}
            {/* <div>
            <iframe src={mapSelect} width="100%" height="675" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div> */}
        </div>
    );
};

export default BookingConfirmDetails;