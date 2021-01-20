import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/style.css';

import documentation from '../assests/icons/documentation.svg';
import demo from '../assests/icons/demo.svg';
import profile from '../assests/icons/profile.svg';

class Home extends Component{
    render(){
        return(
            <div className="home-container">
                    <Link to={`/documentation`}>
                        <div className="home-options">
                        <img src={documentation} className="home-icons" alt="Documentation" />
                        <h4>Documentation</h4>
                        </div>
                    </Link>

                    <Link to={`/demo`}>
                        <div className="home-options">
                        <img src={demo} className="home-icons" alt="Demo" />
                        <h4>Demo</h4>
                        </div>
                    </Link>

                    <Link to={`/about`}>
                        <div className="home-options">
                        <img src={profile} className="home-icons" alt="Profile" />
                        <h4>About Me</h4>
                        </div>
                    </Link>
            </div>
        );
    }
}

export default Home;