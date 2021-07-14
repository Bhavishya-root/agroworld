import React, { Component } from 'react'
import Homedelivery from "../img/Homedelivery.jpg";
import Phonebooking from "../img/Phonebooking.jpg";
import servecies from "../img/servecies.png";

export default class Services extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: [
                {
                    imgsrc: Homedelivery,
                    title: "Home-delivery"

                },
                {
                    imgsrc: Phonebooking,
                    title: "Book on your phone"
                },
                {
                    imgsrc: servecies,
                    title: "Available 24*7"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="my-3">
                        <h2 className="text-center">Our Services</h2>
                    </div>
                    {/* <div className="row">
                        <div className="col-md-12 "> */}
                    <div className="row gx-4 my-5">
                        {
                            this.state.cards.map((e, ind) => {
                                return (

                                    <div className="col-md-4 ">
                                        <div className="card">
                                            <img src={e.imgsrc} height="300px" class="card-img-top" alt={e.imgsrc} />
                                            <div class="card-body">
                                                <h5 class="card-title">{e.title}</h5>

                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                    {/* </div>
                    </div> */}
                </div>
            </div >
        )
    }
}
