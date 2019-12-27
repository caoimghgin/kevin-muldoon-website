import React, { Component } from 'react';
import './navbar.css';
import SideMenuToggleButton from '../sidemenu/toggle_button/toggle_button'
import {debounce} from '../../utilities/debounce'

class Navbar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            preScrollpos: window.pageYOffset,
            expanded: true
        }
        const scrollEventHandlerDebounceWait = 500;

    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollEventHandler);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollEventHandler);
    }

    render() {
        return (
            <header className={this.state.expanded ? 'navbar expanded' : 'navbar compressed'}>
                <nav className="navbar_container">
                    <div>
                        <SideMenuToggleButton click={this.props.sideMenuToggleClickHandler}/>
                    </div>
                    <div className="navbar_logo"><a href="/">THE LOGO</a></div>
                    <div className="spacer" />
                    <div className="navbar_tabs">
                        <ul>
                            <li><a href="/">Products</a></li>
                            <li><a href="/">Users</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
    
    scrollEventHandler = (event) => {
        
        debounce(this.scrollEventHandlerDebounced(), this.scrollEventHandlerDebounceWait)
        
    }

    scrollEventHandlerDebounced() {

        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const expanded = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            expanded
          }); 
    }

}

export default Navbar;