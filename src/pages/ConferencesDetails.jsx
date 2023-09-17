import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";

import { useParams } from 'react-router-dom';

import ImageCarousel from '../components/ImageCarousel';
import Footer from '../components/Footer';
import { ConferencesData } from '../data/ConferencesData';



const ConferencesDetails = () => {
    const { Title } = useParams();
    const [ConferenceItem, setConferenceItem] = useState(null);
    useEffect(() => {
        let Conference = ConferencesData.find((item) => item.Title === (Title));
        if (Conference) {
            setConferenceItem(Conference);
        }
    }, [Title]);


    return (
        <div className="page_container">
            <Helmet>
                <title>Conferences</title>
                <meta name="description" content="#" />
            </Helmet>
            {ConferenceItem && (
                <>
                    <header id="page-header">
                        <div className="page-banner-content">
                            <h2>{ConferenceItem.Title}</h2>
                        </div>
                    </header>


                    <div className='main-container'>
                        <div className='field_trip_details'>



                           
                            {ConferenceItem.Youtube_VideoId && (
                                <iframe
                                width="100%"
                                height="415"
                                src={`https://www.youtube.com/embed/${ConferenceItem.Youtube_VideoId}`}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                              ></iframe>

                                

                            )}

                            {/* <h1>{FieldVisitItem.Title}</h1> */}
                            {/* <ImageCarousel images={FieldVisitItem.Images.map((image, index) => ({ url: image }))} /> */}
                            {ConferenceItem.Images.map((image, index) => {
                                return (
                                    <div className='field_trip_img'>
                                        <img src={image.Image} alt='' />
                                        <p>{image.ImageDescription}</p>
                                    </div>
                                )
                            })}


                            <p>{ConferenceItem.Description}</p>
                            <p>{ConferenceItem.Para1}</p>
                            <p>{ConferenceItem.Para2}</p>
                            <p>{ConferenceItem.Para3}</p>


                            {ConferenceItem.ExternalLink && (
                                <a href={ConferenceItem.ExternalLink} target='blank'> <button className="card-lg-btn">Know More </button></a>
                            )}

                        </div>


                    </div>


                </>
            )}
            <Footer />
        </div>
    )
}

export default ConferencesDetails