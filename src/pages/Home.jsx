import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import RecentUpdates from '../components/RecentUpdates';
import Professor from './Professor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg from "../assets/images/about.jpg"
import { Link } from "react-router-dom";
const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="page_container">
            <Helmet>
                <title>REEFS Lab | IIT Gandhinagar</title>
                <meta name="description" content="#" />
            </Helmet>

            <header id="head">
                <div className="banner-content">
                    <h1>REEFS Lab, IIT Gandhinagar</h1>
                    <h2>Redefining Energy For Sustainability</h2>
                    <p>
                        Welcome to the REEFS Lab at IIT Gandhinagar, where we fuse earth sciences with sustainability.

                        We focuses on unraveling Earth's past and shaping its future sustainably. We explore modern and fossil carbonates, reservoir architecture, sea-level fluctuations, and sequence stratigraphy, while embracing geothermal energy and carbon capture techniques. Through interdisciplinary synergy and technological advancements, we're committed to driving impactful research that addresses both geological complexities and energy sustainability challenges.
                    </p>
                    <Link to="/recent-news"> <button className="home_btn"><span>Recent News</span></button></Link>
                </div>
            </header>

            {/* <div className="page-section">
                <div className="section-heading">
                    <h1>About the Lab</h1>
                </div>

                    <div className="people-card">
                    <div className='people-card-item' data-aos="fade-up">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="people-card-img">
                                    <img src={aboutImg} alt='People' />
                                </div>


                            </div>
                            <div className="col-md-8">
                                <div className="people-card-content">
                                    <p>
                                        Welcome to the REEFS Lab at IIT Gandhinagar, where we fuse earth sciences with sustainability. 

                                        We focuses on unraveling Earth's past and shaping its future sustainably. We explore modern and fossil carbonates, reservoir architecture, sea-level fluctuations, and sequence stratigraphy, while embracing geothermal energy and carbon capture techniques. Through interdisciplinary synergy and technological advancements, we're committed to driving impactful research that addresses both geological complexities and energy sustainability challenges.
                                    </p>
                                </div>

                            </div>
                        </div>
                        </div>

                    </div>
            </div> */}


            {/* <div className="page-section">
                <div className="section-heading">
                    <h1>Meet the Professor</h1>
                </div>
                <Professor />


            </div> */}

            {/* <div className="page-section">
                <div className="section-heading">
                    <h1>Recent Updates</h1>
                </div>
                <RecentUpdates />

            </div> */}




        </div>

    )
}

export default Home