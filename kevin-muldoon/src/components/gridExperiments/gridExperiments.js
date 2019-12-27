import React from 'react';
import './gridExperiments.css';

const GridExperiments = (props) => {

    const navbar_style = {

    }

    return (
        <div className="grid">
            <div class="cell item-a">A</div>
            <div class="cell item-b">
                <div className="navbar-tabs">
                    <ul>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Users</a></li>
                    </ul>
                </div>
            </div>
            <div class="cell item-c">C</div>
            {/* <div class="cell item-d">D</div>
            <div class="cell item-e">E</div>
            <div class="cell item-f">F</div> */}
        </div>
    )
}

export default GridExperiments;