import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/courses';
import Home from '../Home/Home';
import "./HomeOverview.css"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const HomeOverview = () => {
    const classes = useStyles();
    const style = {
        display: 'flex',
        
        justifyContent: 'space-around'
    }
    const [place, setPlace] = useState([]);
    // console.log(fakeData[0]);
    const [displayPlaceNames, setDisplayPlaceNames] = useState(fakeData[0]);


    useEffect(()=>{
        const url = fakeData;
        setPlace(url);
        console.log(url);
    }, [])
    
    return (
        <Container className="homeOverview">
            <div className="upperPart row">
            <div className="col-md-6 col-sm-12">
            <img style={{width: "450px"}} src={displayPlaceNames.image2} alt=""/>
            </div>
            <div className="RightSidePart col-md-6 col-sm-12">
            <br/><br/>
                <h1>{displayPlaceNames.name}</h1>
                <h6>{displayPlaceNames.descHome}</h6>
                <Link to={"/book/"+displayPlaceNames.name}> <button className="btn btn-light">Book Now</button></Link>
                
                
            </div>
            </div>

            <div style={style} className="placeNameImg">
            {
                place.map(room =><div onClick={() => setDisplayPlaceNames(room)}> <Home 
                    
                    // key={room.bedType}
                     room={room}></Home></div>)
            }
           
            </div>
            
        </Container>
    );
};

export default HomeOverview;