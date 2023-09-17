import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import { FieldVisitsData } from '../data/FieldVisitsData';
import { useParams } from 'react-router-dom';

import ImageCarousel from '../components/ImageCarousel';
import Footer from '../components/Footer';



const BlogDetails = () => {
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
                <title>Blogs</title>
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
                            {/* <h1>{FieldVisitItem.Title}</h1> */}
                            <ImageCarousel images={FieldVisitItem.Images.map((image, index) => ({ url: image.Image }))} />
                            {/* {FieldVisitItem.Images.map((image, index) => {
                                return (
                                    <div className='field_trip_img'>
                                        <img src={image.Image} alt='' />
                                        <p>{image.ImageDescription}</p>
                                    </div>
                                )
                            })} */}


                            <p>{FieldVisitItem.Para1}</p>
                            <p>{FieldVisitItem.Para2}</p>
                            <p>{FieldVisitItem.Para3}</p>
                            <p>{FieldVisitItem.Para4}</p>

                        </div>


                    </div>


                </>
            )}
<Footer/>
        </div>
    )
}

export default BlogDetails