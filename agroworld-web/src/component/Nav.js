import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default class Nav extends Component {

    render() {
        return (
            <div>
                <div className="container-fluid mt-2 ">


                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="col-md-2 px-4">
                            <NavLink className="navbar-brand pt-2 " to="/">agro<span style={{ color: "#F47A2E" }}>
                                world</span></NavLink>
                        </div>

                        <div className="col-md-3">


                            <div className="input-group mb-3 mt-3 mx-4">
                                <span className="input-group-text home-page-search-bar-icon" id="basic-addon1">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i></span>

                                <input type="text" className="form-control home-page-search-bar input-btn"
                                    placeholder="Search location" aria-label="Username" aria-describedby="basic-addon1" />

                            </div>
                        </div>
                        <div className="col-md-3 px-3 mx-5">
                            <div className="input-group mb-3 mt-3">
                                <span className="input-group-text home-page-location-icon" id="basic-addon1">
                                    <i className="fa fa-search" aria-hidden="true"></i></span>
                                <input type="text" className="form-control home-page-search-bar input-btn"
                                    placeholder="Search agency,shop or products" aria-label="Username"
                                    aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="d-flex home-page-acc-btn">


                                <Link className="btn btn-outline-primary" to="/loginpage" >
                                    Login
                                </Link>

                                <Link className="btn btn-success mx-5" to="/registrationpage" >
                                    Sign up
                                </Link>

                            </div>
                        </div>
                    </nav>

                </div>
            </div >
        )
    }
}
