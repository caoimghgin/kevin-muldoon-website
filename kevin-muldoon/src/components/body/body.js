import React from 'react';
import "./body.css";
import '../../utilities/lorumIpsum'
import LorumIpsum from '../../utilities/lorumIpsum';

const Body = (props) => {
    return <div className="body">
        <div className="body-left-margin" />
        <div className="body-content">
            <LorumIpsum />
        </div>
        <div className="body-right-margin" />
    </div>
}

export default Body;