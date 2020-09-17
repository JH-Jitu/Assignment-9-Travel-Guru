import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const Book = () => {
    const {placeLink} = useParams();
    const history = useHistory()
    const handleConfirmBook = (placeLink) => {
        history.push(`/book/confirm/${placeLink}`);
    }
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's book a {placeLink} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>
            <button onClick={() => handleConfirmBook(placeLink)} variant="contained" color="primary">Book The room</button>
        </div>
        
    );
};

export default Book;