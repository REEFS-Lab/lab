import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Footer from '../components/Footer';
import { ConferencesData } from '../data/ConferencesData';



const ConferencesPage = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="page_container">
      <Helmet>
        <title>Conferences</title>
        <meta name="description" content="#" />
      </Helmet>
      <header id="page-header">
        <div className="page-banner-content">
          <h1>Conferences</h1>
        </div>
      </header>
      <div className='main-container'>
        <div className="people-card">
          {ConferencesData.map((item, index) => {
            return (
              <div className='people-card-item' data-aos="fade-up" key={index}>
                <div className="row">

                  <div className="col-md-4">
                    <div className="people-card-img">
                      <Link to={`/conferences/${item.Title}`}><img src={item.ThumbnailImg} alt='People' /></Link>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="people-card-content">
                      <Link to={`/conferences/${item.Title}`}>
                        <h2>{item.Title}</h2>
                      </Link>
                      <p><i class="fa fa-calendar" aria-hidden="true"></i> {item.Date} </p>
                      <p>{item.Description}</p>

                    </div>

                    <div className="card-lg-container-btn">
                      <Link to={`/conferences/${item.Title}`}><button className="card-lg-btn">Read More </button></Link>
                    </div>

                  </div>

                </div>

              </div>
            )
          })}

        </div>







      </div>
      <Footer />
    </div>

  )
}

export default ConferencesPage