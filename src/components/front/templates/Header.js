import React from 'react'
import '../../../assets/front/style.css'
import { FaStar } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className="page-header">
                <nav className="header-section">
                    <div className="header-box">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <h1 className='display-lead' >Paint<span className='header-title'>Spray</span></h1>
                                <h2>Importer | Exporters | Distributors</h2>
                                <div className="reviews">
                                    <p>Excellent &nbsp;
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        &nbsp;10,55 reviews on &nbsp;<FaStar />TrustPilot
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <nav className="navlinks">
                                    <Link to="/home">Home</Link>
                                    <Link to="/about">About Us</Link>
                                    <Link to="/painting-decorating">Paint & Decoration</Link>
                                </nav>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="login-nav">
                                    <CiUser />
                                    <h2>Register</h2>
                                    <h3>&nbsp;Or Sign In</h3>
                                </div>
                            </div>
                        </div>

                    </div>

                </nav>
            </div>

        </>
    )
}

export default Header