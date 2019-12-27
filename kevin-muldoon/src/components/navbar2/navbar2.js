import React, { Component } from 'react';
import './navbar2.css';
import SideMenuToggleButton from '../sidemenu/toggle_button/toggle_button'
import { debounce } from '../../utilities/debounce'

class Navbar2 extends Component {

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

            <header className={this.state.expanded ? 'grid' : 'grid compressed'}>
                <div class="cell item-left"></div>
                <div class="cell item-center">
                {/* <div className= "grid"></div> */}
                {/* <div className= "grid">
                <div class="cell item-left">a</div>
                <div class="cell item-center"> foo </div>
                <div class="cell item-right">b</div>
                </div> */}

                    {/* <div className="navbar-tabs">
                        <ul>
                            <li><a href="/">Products</a></li>
                            <li><a href="/">Users</a></li>
                        </ul>
                    </div> */}
                </div>
                <div class="cell item-right"></div>
            </header>

            // <header className={this.state.expanded ? 'navbar expanded' : 'navbar compressed'}>
            //     <nav className="navbar_container">
            //         <div>
            //             <SideMenuToggleButton click={this.props.sideMenuToggleClickHandler}/>
            //         </div>
            //         <div className="navbar2_logo"><a href="/">THE LOGO</a></div>
            //         <div className="spacer" />
            //         <div className="navbar2_tabs">
            //             <ul>
            //                 <li><a href="/">Products</a></li>
            //                 <li><a href="/">Users</a></li>
            //             </ul>
            //         </div>
            //     </nav>
            // </header>
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
        console.log("HEY")

    }

}

export default Navbar2;