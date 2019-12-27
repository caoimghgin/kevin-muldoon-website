import React from 'react';
import './toggle_button/toggle_button';
import './sidemenu.css';

const Sidemenu = (props) => {
    let drawerClasses = 'sidemenu';
    if (props.show) {
        drawerClasses = 'sidemenu open';
        console.log('I show things')
    } else {
        console.log('I DONT show things')
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li> <a href="/"> Products</a>  </li>
                <li> <a href="/"> Users</a>  </li>
            </ul>
        </nav>
    )
}

export default Sidemenu;