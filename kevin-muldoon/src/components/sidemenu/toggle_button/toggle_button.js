import React from 'react';
import './toggle_button.css'

const SideMenuToggleButton = (props) => {
    return (
        <button className="sidemenu_toggle_button" onClick={props.click}>
            <div className="sidemenu_toggle_button_line" />
            <div className="sidemenu_toggle_button_line" />
            <div className="sidemenu_toggle_button_line" />
        </button>
    )
}

export default SideMenuToggleButton;