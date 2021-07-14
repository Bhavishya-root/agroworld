import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Instance from '../Instance'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""

        }
    }

    login = () => {
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        Instance.post("user/login", user).then(async res => {
            let data = res.data
            console.log(data)
            if (data.status !== "OK") {
                console.log(data.massage)
                toast(data.massage)
            }
            else {
                let token = data.data.token
                await localStorage.setItem("lgntkn", token)
                toast(data.massage)
                window.location = '/homepage'
            }
        }).catch(err => {
            console.log(err)
        })

    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row  text-center d-flex  align-items-center">
                        <div className="col-lg-6 offset-3 border py-5 account-page-style login-style">
                            <div className="row text-center">
                                <div className="col-lg-6  offset-3">
                                    <i className="fa fa-lock account-lock-logo" aria-hidden="true" ></i>
                                    <h2 className="account-h2">Login</h2>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="account-input-user">
                                        <input className="form-control py-2" placeholder="email"
                                            value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }}></input>
                                    </div>
                                    <div className="account-input-email">
                                        <input type="password" className="form-control py-2" placeholder="password"
                                            value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="d-grid gap-2 col-lg-8 account-btn">
                                        <button className="btn btn-danger" onClick={() => this.login()}>Login</button>

                                    </div>
                                </div>
                                <div className="col-md-6 offset-4 mt-2">
                                    <Link to="/registrationpage" className="account-link">
                                        Don't have an account? Sign Up</Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <ToastContainer position="top-right" />
            </div>
        )
    }
}
