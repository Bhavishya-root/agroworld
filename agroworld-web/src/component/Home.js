import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import home_img from "../img/home_img.jpg";

export default class Home extends Component {

    render() {
        return (
            <div className="">

                <div className="container ">
                    <div className="row d-flex align-items-center">
                        {/* <div className="col-11 "> */}
                        <div className="col-md-6">
                            <h1 className="logo-heading">Grow your buissness with <strong className=""
                                style={{ color: 'steelblue' }}>agroworld</strong></h1>
                            <p className="my-3">The use of new technology is vital to remain
                                competitive in the global agrobusiness sector.</p>
                            <div className="mt-5 d-flex">
                                <Link to="/homepage">
                                    <button className="btn btn-primary started-btn">Get Started</button>
                                </Link>


                            </div>
                        </div>
                        <div className="col-md-6 px-5 slide-up-animation img-box">
                            <img className="home-img" src={home_img} height="420px" alt="img" />
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}
