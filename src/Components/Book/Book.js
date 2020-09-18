import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/courses';

const Book = () => {
    const {placeLink} = useParams();
    const placeNames = fakeData.find(visitingPlace => visitingPlace.name === placeLink);
    const history = useHistory()
    const handleConfirmBook = (placeLink) => {
        history.push(`/book/confirm/${placeLink}`);
    }

    const [total, setTotal] = useState({
        fromValue: 0,
        toValue: 0
    })
    // source of Date() method: https://riptutorial.com/javascript/example/1112/get-the-current-time-and-date
    var currentDay = new Date().toUTCString(); 
    const initialDay = new Date(total.fromValue)
    const endingDay = new Date(total.toValue)
    let currentDayValue = (new Date()).getTime();
    let application;
    if(initialDay < currentDayValue){
        application = "Sorry!! We can't go back to past. Select today or next day.";
        console.log("Not applied");
    }
    console.log((new Date()).getTime())
    // As, 1sec = 1000 milliseconds & 1 day = 86400 seconds
    const totalDays = (endingDay-initialDay)/86400000;
    // console.log(totalDays)
    

    const handleChange = (e) => {
        console.log(e.target.value);
        if(e.target.name === "from"){
            const newFromInfo = {...total};
            if(newFromInfo){
                newFromInfo.fromValue = e.target.value;
            }
            setTotal(newFromInfo)
        }
        else if(e.target.name === "to"){
            const newToInfo = {...total}
            if(newToInfo){
                newToInfo.toValue = e.target.value;
            }
            setTotal(newToInfo);
        }
        
    }

    return (
        <div><h1>Let's book a {placeLink}'s Room.</h1>
        <h6>{currentDay}</h6>
        <div style={{textAlign: 'center'}} className="row">
            
            <div className="col-md-6 col-sm-12 LeftSidePart">            
            <p style={{backgroundColor: 'lightgray', opacity: "60%"}}>{placeNames.deskBook}</p>
            <p style={{backgroundColor: 'lightgray', opacity: "60%"}}>Want to go <Link style={{textDecoration: "none"}} to="/home"><button className="btn btn-light"> other places?</button></Link> </p>
            <img style={{width: "500px"}} src={placeNames.image} alt=""/>
            </div>
            
            <div className="col-md-6 col-sm-12 LeftSidePart">
            <img style={{width: "500px"}} src={placeNames.image2} alt=""/> <br/> <br/>
                
        
        <form action="">
            <div class="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Origin</span>
                    </div>
                    <input required type="text" class="form-control" placeholder="Type your pickup place" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Destination</span>
                    </div>
                    <input style={{backgroundColor: "white"}} type="text" class="form-control-plaintext" value={" " + placeLink} aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            {/* Date Part */}

            <div class="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">From</span>
                    </div>
                    <input type="date" class="form-control"  name="from" onChange={handleChange} aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">From</span>
                    </div>
                    <input type="date" class="form-control"  name="to" onChange={handleChange} aria-describedby="basic-addon1"/>
            </div>
                <p style={{backgroundColor: 'lightgray', opacity: "60%"}}>{application}</p>
                {totalDays >= 1 ?<button className="btn btn-light" onClick={() => handleConfirmBook(placeLink)}>Book The room</button> : <p style={{backgroundColor: 'lightgray', opacity: "60%"}}> Selecting less than 1 day is our out of terms</p>}
                </form>
                
                </div>
        </div></div>
        
    );
};

export default Book;