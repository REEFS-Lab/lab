import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Papa from "papaparse";
import Footer from '../components/Footer';
const RecentNewsPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    const [data, setData] = useState([]);

    useEffect(() => {
        Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQeL4sGiF3H2TkwbZ_N7KD-a2odYe4p4PegdVLWOwr299O0nIEtbsGfTa8fLkBJKo8jL7BSL4c2t7Be/pub?output=csv', {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: (results) => {
                setData(results.data.reverse());
            },
        });
    }, []);

    return (
        <div className="page_container">
            <Helmet>
                <title>Recent News</title>
                <meta name="description" content="#" />
            </Helmet>
            <header id="page-header">
                <div className="page-banner-content">
                    <h1>Recent News</h1>
                </div>
            </header>

            <div className='main-container'>
                <div className="people-card">
                    {data.map((item, index) => {
                        return (
                            <div className='people-card-item' data-aos="fade-up" key={index}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="people-card-img">
                                        <a href={item.ArticleLink} target='blank'><img src={item.ImageLink} alt='People' /></a>

                                        </div>


                                    </div>
                                    <div className="col-md-8">
                                        <div className="people-card-content">
                                               <a href={item.ArticleLink} target='blank'> <h2>{item.Title}</h2></a>
                                            <p><i class="fa fa-calendar" aria-hidden="true"></i> {item.PublishedDate}</p>
                                            <p>{item.Description}</p>

                                        </div>

                                    </div>



                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
<Footer/>
        </div>
        
    )
}

export default RecentNewsPage