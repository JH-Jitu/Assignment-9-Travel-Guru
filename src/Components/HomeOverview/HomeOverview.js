import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/courses';
import Home from '../Home/Home';

const HomeOverview = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const [place, setPlace] = useState([]);

    useEffect(()=>{
        const url = fakeData;
        setPlace(url);
        console.log(url);
    }, [])
    
    return (
        <div style={style}>
            {
                place.map(room => <Home 
                    // key={room.bedType}
                     room={room}></Home>)
            }
        </div>
    );
};

export default HomeOverview;