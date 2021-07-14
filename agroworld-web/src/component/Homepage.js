import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Instance from '../Instance'
// import home_img from "../img/home_img.jpg";
// import fertilizer from "../img/fertilizer.png";
// import shop1 from "../img/shop1.jpg"
// import shop2 from "../img/shop2.jpg"
// import shop3 from "../img/shop3.jpg"
// import shop4 from "../img/shop4.jpg"
// import shop5 from "../img/shop5.jpg"
// import shop6 from "../img/shop6.jpg"
// import shop7 from "../img/shop7.jpg"
// import Insecticides from "../img/Insecticides.png"
// import Fungicides from "../img/Fungicides.png"


export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            homeshopes: [
                {
                    shopname: "",
                    shopctgry: "",
                    img_url: "",

                },

            ]
        }
    }



    componentDidMount() {
        Instance.get('http://localhost:3000/shopdata/').then(res => {
            console.log(res.data)
            this.setState({ homeshopes: res.data })
        })
    }




    render() {
        // console.log(this.props)
        return (

            < div >
                <div className="container">
                    <div className="row">
                        {
                            this.state.homeshopes.map((shop, idx) => {


                                return (

                                    <div key={idx} className="col-md-4 mt-4">
                                        <Link to={`/product/${shop.shopid}`} className="link-text ">
                                            <div class="card" >
                                                <img src={`https://image.shutterstock.com/image-photo/word-demo-appearing-behind-torn-260nw-1782295403.jpg`} height="183px" width="275px" class="card-img-top" alt="shop-img" />
                                            </div>
                                            <div>
                                                <h3 className="mt-1 hmpgshop">
                                                    {shop.shopname}
                                                </h3>
                                                <p className="hmpgshopctgry">{shop.shopctgry}</p>
                                            </div>
                                        </Link>
                                    </div>

                                )
                            })
                        }
                    </div>

                </div>
            </div >


        )
    }
}
