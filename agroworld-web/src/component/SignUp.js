import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios'
import Instance from '../Instance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            email: "",
            password: "",

        }
    }



    saveData = () => {
        let userData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,

        }
        Instance.post('user/registration', userData).then(res => {
            let data = res.data
            console.log(data)
            if (data.status !== "OK") {
                toast(data.massage)
                console.log(data.massage)
            } else {
                toast(data.massage)
                window.location = '/loginpage'
            }

            // toast(data.msg)
            // console.log(res)
            // console.log(data)

        }).catch(err => {
            console.log(err)
        })

    }


    render() {
        return (
            <div className="">
                <div className="container mt-5">
                    <div className="row  text-center">
                        <div className="col-lg-6 offset-3 border py-2 account-page-style signup-style">
                            <div className="row text-center">
                                <div className="col-lg-6  offset-3">
                                    <i className="fa fa-lock account-lock-logo" aria-hidden="true" ></i>
                                    <h2 className="account-h2">Sign up</h2>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="account-input-user">
                                        <input className="form-control py-2" placeholder="Username" value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }) }}></input>
                                    </div>
                                    <div className="account-input-email">
                                        <input className="form-control py-2" placeholder="Email" value={this.state.email} onChange={e => { this.setState({ email: e.target.value }) }}></input>
                                    </div>
                                    <div className="account-input-email">
                                        <input className="form-control py-2" type="password" placeholder="Password" value={this.state.password} onChange={e => { this.setState({ password: e.target.value }) }}></input>
                                    </div>


                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="d-grid gap-2 col-lg-10 account-btn">
                                        <button className="btn btn-success" onClick={this.saveData}>SIGN UP</button>

                                    </div>
                                </div>
                                <div className="col-md-6 offset-4 mt-2">
                                    <Link to="/loginpage" className="account-link">Already have an account? Login</Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <ToastContainer position="top-center" />
            </div>
        )
    }
}




// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Your Website
//       </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(3),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));

// export default function SignUp() {
//     const classes = useStyles();

//     return (
//         <Container component="main" maxWidth="xs">
//             <CssBaseline />
//             <div className={classes.paper}>
//                 <Avatar className={classes.avatar}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                     Sign up
//         </Typography>
//                 <form className={classes.form} noValidate>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 autoComplete="fname"
//                                 name="firstName"
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 id="firstName"
//                                 label="First Name"
//                                 autoFocus
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 id="lastName"
//                                 label="Last Name"
//                                 name="lastName"
//                                 autoComplete="lname"
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 id="email"
//                                 label="Email Address"
//                                 name="email"
//                                 autoComplete="email"
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 type="password"
//                                 id="password"
//                                 autoComplete="current-password"
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <FormControlLabel
//                                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                                 label="I want to receive inspiration, marketing promotions and updates via email."
//                             />
//                         </Grid>
//                     </Grid>
//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         color="primary"
//                         className={classes.submit}
//                     >
//                         Sign Up
//           </Button>
//                     <Grid container justify="flex-end">
//                         <Grid item>
//                             <Link href="#" variant="body2">
//                                 Already have an account? Sign in
//               </Link>
//                         </Grid>
//                     </Grid>
//                 </form>
//             </div>
//             <Box mt={5}>
//                 <Copyright />
//             </Box>
//         </Container>
//     );
// }