import React, { Component } from 'react'
// import Instance from '../Instance';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import shop1 from "../img/shop1.jpg";
import lava_img from "../img/lava_img.jpg";
import lquid from "../img/lquid.jpg";
import dhanuka from "../img/dhanuka.jpg"
import Insecticides from "../img/Insecticides.png";
import { Link } from 'react-router-dom';
import instance from '../Instance';

export default class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shopeHead: {
                shopimg: "",
                shopname: "",
                shopaddress: "",
                shopcity: ""
            },
            items: [{
                name: "Dhanuka",
                brand: "BASF",
                catagory: "pesticides",
                img_url: dhanuka,
                price: 1400,

            },
            {
                name: "IFFCO",
                brand: "Double Ghoda",
                img_url: Insecticides,
                price: 1600,

            },
            {
                name: "Lava",
                brand: "Lovison",
                img_url: lava_img,
                price: 800,

            },
            {
                name: "lquidon",
                brand: "Semi",
                img_url: lquid,
                price: 900,

            }
            ],
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

    addCart = () => {

    }
    componentDidMount() {
        // let { match: { params } } = this.props
        // console.log(this.props)
        let id = this.props.match.params.shop_id
        console.log(id)
        instance.get('http://localhost:3000/shopdata/' + id).then(res => {
            console.log(res.data)
            this.setState(
                {
                    // shopname: res.data.id,
                    // shopaddress: res.titile
                    shopeHead: res.data
                }
            )
            // console.log(this.state.shopeHead)
        })

        instance.get('http://localhost:3000/shopproducts/').then(res => {
            // console.log(res.data)
        })

    }



    render() {

        return (

            <div>

                <div className="container">
                    <div className="row mt-3 products-heading-row productsfont">
                        <div className="col-md-4 ">
                            <img src={`https://image.shutterstock.com/image-photo/word-demo-appearing-behind-torn-260nw-1782295403.jpg`} height="200px" width="300px" className="pt-3" alt="product-img"></img>
                        </div>
                        <div className="col-md-7 pt-3">
                            <h2>{this.state.shopeHead.shopname}</h2>
                            <p>{this.state.shopeHead.shopaddress}</p>
                            <p>{this.state.shopeHead.shopcity}</p>
                        </div>
                    </div>

                    <div className="row mt-4 fontstyle ">
                        <div className="col-md-8 ">
                            <h2 style={{ fontSize: "30px" }}><b>Recommended item</b></h2>
                            <div className="row">
                                <Tabs>
                                    <TabList className="tabstyle">
                                        <Tab>Pesticides</Tab>
                                        <Tab>Fertlizers</Tab>
                                        <Tab>Seeds</Tab>
                                        <Tab>Accesires</Tab>
                                    </TabList>
                                    <TabPanel>
                                        {
                                            this.state.items.map((item, index) => {
                                                return (
                                                    <div key={index} className="d-flex flex-warp align-items-center border-bottom py-3">
                                                        <div className="col-md-2">
                                                            <img
                                                                src={item.img_url}
                                                                alt=""
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="col-md-8 px-4">
                                                            <small style={{ fontSize: "12px", color: "gray" }}><b>{item.brand}</b></small>
                                                            <h5>{item.name}</h5>
                                                            <p><i className="fa fa-inr"></i>500</p>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <button className="btn btn-sm btn-block btn-success" onClick={this.addCart}>Add To Cart</button>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }


                                    </TabPanel>

                                </Tabs>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <section className="inproductcart py-4 px-3">
                                <h2 className="fontstyle my-0" style={{ fontSize: "30px" }} ><b>Cart</b></h2>
                                <small className="fontstyle px-1" style={{
                                    fontSize: "11px",
                                    color: "gray"
                                }}>1 ITEM</small>
                                <div className="mt-4" style={{ borderBottom: "1px solid black" }}>
                                    {
                                        this.state.cartitems.map((item, idx) => {
                                            return (
                                                <div key={idx} className="row">
                                                    <div className="col-md-6">
                                                        <h6 style={{ fontSize: "15px", color: "dimgray" }}><i className="fa fa-dot-circle-o"
                                                            style={{ color: "green" }} aria-hidden="true"></i>&nbsp; &nbsp;{item.name}</h6>
                                                    </div>
                                                    <div className="col-md-4">

                                                    </div>
                                                    <div className="col-md-2">
                                                        <p style={{ fontSize: "12px" }}>&#8377;{item.price}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>


                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <h6 style={{
                                            fontfamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
                                            fontWeight: "700"
                                        }}>Subtotal</h6>

                                    </div>
                                    <div className="col-md-6 text-end">
                                        <p>&#8377;1150</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-grid gap-2 col-10 mx-auto mt-3">
                                        <Link to="/checkout"><button className="btn btn-lg col-12"
                                            style={{
                                                fontfamily: "ProximaNova,Arial,Helvetica Neue,sans-serif", fontSize: "19px", fontWeight: "600",
                                                background: "green", color: "white"
                                            }} onClick={this.nextPage}>CHECKOUT <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
