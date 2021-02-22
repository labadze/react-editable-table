import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TopNav extends Component {
    constructor(props) {
        super(props);
        // this.myRef = React.createRef()   // Create a ref object
        this.state = {};
    }
    async componentDidMount(){
        window.scrollTo(0, 0);
        // this.myRef.current.scrollTo(0, 0);
    }

    render() {
        return (
            <div className={"w3-top"}>
                <div className={"w3-bar w3-white w3-card"} id={"myNavbar"}>
                    <Link to={'/'} className={"w3-bar-item w3-button w3-wide"}>LOGO</Link>
                    <div className={"w3-right w3-hide-small"}>
                        <Link to={'/'} className={"w3-bar-item w3-button"}>MAIN</Link>
                        <Link to={'/table'} className={"w3-bar-item w3-button"}>TABLE</Link>
                        <Link to={'/account'} className={"w3-bar-item w3-button"}> ACCOUNT</Link>
                        <button onClick={this.props.logOff} className={'w3-bar-item w3-btn'}>LOG OUT</button>
                    </div>

                    <button className={"w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"}
                            onClick={() => {}}>
                        <i className={"fa fa-bars"}/>
                    </button>
                </div>
            </div>
        )
    }
}

export default TopNav;
