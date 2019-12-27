import React, { Component } from 'react';
import './navbar3.css';
import SideMenuToggleButton from '../sidemenu/toggle_button/toggle_button'
import { debounce } from '../../utilities/debounce'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const NavStyled = styled.nav`

    display: grid;
    grid-template-columns: auto 1024px auto;
    background:whitesmoke;
    position: fixed;
    width: 100%;
    height: 100px;
    top: 0px;
    left: 0px;
    transition: height 0.35s ease;
    padding: 0px;

`;

class Navbar3 extends Component {

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

            <nav className={this.state.expanded ? '' : 'compressed'}>

                <div className="cell left-margin" />

                <div className="cell content">
                    <div className="cell left-content">
                        <SideMenuToggleButton click={this.props.sideMenuToggleClickHandler} />
                    </div>
                    <div className="cell center-content">
                        <div className="navbar_tabs">
                            <ul>
                                <li><a href="/">Products</a></li>
                                <li><a href="/">Users</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="cell right-content"><button type="button">Click Me!</button></div>
                    {/* <div className="cell right-content"><Button>HEY</Button></div> */}

                </div>

                <div className="cell right-margin" />

            </nav>

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

export default Navbar3;