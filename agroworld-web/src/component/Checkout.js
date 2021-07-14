import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import shop1 from "../img/shop1.jpg";


export default class Checkout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cartitems: [
                {
                    name: "dhanuka",
                    price: "500",
                    qunty: ""

                },
                {
                    name: "lava",
                    price: "650"
                }
            ]
        }
    }


    render() {
        return (
            <div className="container">

                <div className="row mt-4">
                    <div className="col-md-8">
                        <section className="py-4 checkout-acc-style checkoutsection">
                            {/* <svg className="bg-svg-top" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FF0066" d="M47.1,-19.3C51.4,-2.1,38.6,16.7,22.3,27.9C6,39.1,-13.8,42.7,-23.3,35.1C-32.7,27.5,-31.8,8.8,-26.2,-10.2C-20.6,-29.2,-10.3,-48.4,5.6,-50.2C21.4,-52,42.8,-36.4,47.1,-19.3Z" transform="translate(100 100)" />
                            </svg> */}
                            <div className="row d-flex">

                                <div className="col-md-2 d-flex align-items-center">
                                    <i className="fa fa-user fa-3x checkaccicon" aria-hidden="true"></i>
                                </div>
                                <div className="col-md-10">
                                    <h2>Account</h2>
                                    <p style={{ color: "grey", fontFamily: "sans-serif", fontSize: "14px" }}>To place your order now, log in to your existing account or sign up.</p>
                                    <Link to="/loginpage">
                                        <button className="btn btn-outline-primary mt-4">Have an account?<br />LOG IN</button>
                                    </Link>
                                    <Link to="/registrationpage">
                                        <button className="btn btn-success mx-5 mt-4">New to agroworld?<br />SIGN UP</button>
                                    </Link>

                                </div>
                            </div>

                        </section>

                        <section className="mt-4 py-4 checkoutsection">
                            <div className="row d-flex">

                                <div className="col-md-2 d-flex align-items-center">
                                    <i className="fa fa-map-marker fa-3x checkaccicon" aria-hidden="true"></i>
                                </div>
                                <div className="col-md-10">
                                    <h2>Add a delivery address</h2>
                                    <p style={{ color: "grey", fontFamily: "sans-serif", fontSize: "14px" }}>You seem to be in the new location</p>
                                    <form className="">
                                        <div className="form-row ">
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">First Name</label>
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="form-group col-md-6 mt-3">
                                                <label for="inputPassword4">Last Name</label>
                                                <input type="text" className="form-control" placeholder="Last name" />
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label for="inputAddress">Delivery area</label>
                                            <input type="text" className="form-control" id="inputAddress" placeholder="village/town/main St" />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label for="inputAddress2">Complete address</label>
                                            <input type="text" className="form-control" id="inputAddress2" placeholder="House no.,Apartment" />
                                        </div>
                                        <div className="form-row">

                                            <div className="form-group col-md-4 mt-3">
                                                <label for="inputState">State</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>Madhya Pradesh</option>
                                                    <option>Gujrat</option>
                                                    <option>Rajsthan</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-2 mt-3">
                                                <label for="inputZip">Zip</label>
                                                <input type="text" className="form-control" id="inputZip" />
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <button type="submit" className="btn btn-primary my-2 ">Save and proceed</button>
                                        </div>

                                    </form>
                                    <div className="d-flex justify-content-center mt-5">
                                        <button className="btn col-6 btn-outline-danger " onClick><i class="fa fa-plus" aria-hidden="true"></i> Add new address</button>
                                    </div>

                                </div>
                            </div>
                        </section>

                        <section className="mt-4 py-4 mb-5 checkoutsection">
                            <div className="row d-flex">

                                <div className="col-md-2 d-flex align-items-center">
                                    <i className="fa fa-money fa-3x checkaccicon" aria-hidden="true"></i>
                                </div>
                                <div className="col-md-10">
                                    <h2>Choose payment method</h2>
                                    <button className="btn btn-success mt-4" onClick>Cash on delivery</button>
                                </div>
                            </div>
                        </section>
                    </div>



                    <div className="col-md-4">
                        <section className="px-2 py-3  checkoutsection">
                            <div className="row mt-4">
                                <div className="col-md-3">
                                    <img src={shop1} className="img-fluid border bordered" alt="item-img"></img>
                                </div>
                                <div className="col-md-7 checkoutbillhead">
                                    <h4 className="my-0">Shop1</h4>
                                    <p style={{ fontSize: "13px" }}>dewas city</p>

                                </div>
                            </div>

                            <div style={{ borderBottom: "1px solid black" }} className="mt-4">
                                {
                                    this.state.cartitems.map((item, idx) => {
                                        return (
                                            <div key={idx} className="row">
                                                <div className="col-md-6">
                                                    <h6 style={{ fontSize: "15px", color: "dimgray" }}>
                                                        <i className="fa fa-dot-circle-o"
                                                            style={{ color: "green" }} aria-hidden="true">
                                                        </i>&nbsp; &nbsp;{item.name}</h6>
                                                </div>
                                                <div className="col-md-4">

                                                </div>
                                                <div className="col-md-2">
                                                    <p style={{ fontSize: "12px" }}>
                                                        &#8377; {item.price}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            <div className="mt-3" style={{
                                borderBottom: "1px solid black"
                            }}>

                                < h6 style={{
                                    fontfamily:
                                        "ProximaNova,Arial,Helvetica Neue,sans-serif"

                                }}>
                                    Bill Details</h6>
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className="">
                                            Item total</p>
                                    </div>
                                    <div className="col-md-4 d-flex justify-content-end checkouticonfont">
                                        <p style={{ fontFamily: "Roboto Condensed" }}>&#8377; 1150</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className="" style={{
                                            fontfamily:
                                                "ProximaNova,Arial,Helvetica Neue,sans-serif"
                                        }}>
                                            Delivery Charges</p>
                                    </div>
                                    <div className="col-md-4 d-flex justify-content-end">
                                        <p>&#8377; 50</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-8">
                                    <h6 style={{ fontSize: '18px', fontWeight: "600" }}>To Pay</h6>
                                </div>
                                <div className="col-md-4 d-flex justify-content-end" >
                                    <p className="">&#8377; 1200</p>
                                </div>
                            </div>
                        </section>


                    </div>
                </div >
            </div >
        )
    }
}
