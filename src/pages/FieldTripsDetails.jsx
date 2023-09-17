import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import { FieldVisitsData } from '../data/FieldVisitsData';
import { useParams } from 'react-router-dom';


import ImageCarousel from '../components/ImageCarousel';
import Footer from '../components/Footer';



const FieldTripsDetails = () => {
    const { Title } = useParams();
    const [FieldVisitItem, setFieldVisitItem] = useState(null);
    useEffect(() => {
        let FieldVisit = FieldVisitsData.find((item) => item.Title === (Title));
        if (FieldVisit) {
            setFieldVisitItem(FieldVisit);
        }
    }, [Title]);

    return (
        <div className="page_container">
            <Helmet>
                <title>Field Visits</title>
                <meta name="description" content="#" />
            </Helmet>
            {FieldVisitItem && (
                <>
                    <header id="page-header">
                        <div className="page-banner-content">
                            <h2>{FieldVisitItem.Title}</h2>
                        </div>
                    </header>


                    <div className='main-container'>
                        <div className='field_trip_details'>



                           
                            {FieldVisitItem.Youtube_VideoId && (
                                <iframe
                                width="100%"
                                height="415"
                                src={`https://www.youtube.com/embed/${FieldVisitItem.Youtube_VideoId}`}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                              ></iframe>

                                

                            )}

                            {/* <h1>{FieldVisitItem.Title}</h1> */}
                            {/* <ImageCarousel images={FieldVisitItem.Images.map((image, index) => ({ url: image }))} /> */}
                            {FieldVisitItem.Images.map((image, index) => {
                                return (
                                    <div className='field_trip_img'>
                                        <img src={image.Image} alt='' />
                                        <p>{image.ImageDescription}</p>
                                    </div>
                                )
                            })}


                            <p>{FieldVisitItem.Para1}</p>
                            <p>{FieldVisitItem.Para2}</p>
                            <p>{FieldVisitItem.Para3}</p>
                            <p>{FieldVisitItem.Para4}</p>


                            {FieldVisitItem.ExternalLink && (
                                <a href={FieldVisitItem.ExternalLink} target='blank'> <button className="card-lg-btn">Read More </button></a>
                            )}

                        </div>


                    </div>


                </>
            )}
<Footer/>
        </div>
    )
}

export default FieldTripsDetails