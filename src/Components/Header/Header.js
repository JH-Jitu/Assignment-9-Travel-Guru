import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Header.css'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // console.log(loggedInUser)
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="headerTab">
            
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="black"
        centered
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Home" />
        <Tab label="Status" />
        <Tab label="Activity" />
        {
          loggedInUser.displayName ? <Tab onClick={() => setLoggedInUser({})}  label="Sign out"></Tab> :
          <Link to="/login"><Tab  label="Sign in"></Tab></Link>
        }

        {
        loggedInUser.displayName && <Tab label={loggedInUser.displayName}></Tab>
        }
        <Avatar align="center" alt="Remy Sharp" src={loggedInUser.photo} />
      </Tabs>
      
    
        </div>
    );
};

export default Header;