import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Header.css'

const Header = () => {
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="headerTab">
            <Paper style={{backgroundColor: 'lightgrey'}} square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Home" />
        <Tab label="Status" />
        <Tab label="Activity" />
      </Tabs>
    </Paper>
        </div>
    );
};

export default Header;