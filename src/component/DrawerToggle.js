import React from 'react';

import './DrawerToggle.css';

const drawerToggleButton = props =>(
    <button onClick={props.click} className="toggle-button">
        <div className="toggle-button1" />
        <div className="toggle-button1" />
        <div className="toggle-button1" />
    </button>
);
export default drawerToggleButton;