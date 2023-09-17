import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import { FieldVisitsData } from '../data/FieldVisitsData';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Footer from '../components/Footer';


const BlogsPage = () => {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <div className="page_container">
      <Helmet>
        <title>Blogs</title>
        <meta name="description" content="#" />
      </Helmet>
      <header id="page-header">
        <div className="page-banner-content">
          <h1>Blogs</h1>
        </div>
      </header>
      <div className='main-container'>
        <div className="people-card">
          {FieldVisitsData.map((item, index) => {
            return (
              <div className='people-card-item' data-aos="fade-up" key={index}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="people-card-img">
                      <Link to={`/blogs/${item.Title}`}><img src={item.ThumbnailImg} alt='People' /></Link>

                    </div>


                  </div>
                  <div className="col-md-8">
                    <div className="people-card-content">
                      <Link to={`/blogs/${item.Title}`}>
                        <h2>{item.Title}</h2>
                      </Link>
                      <p><i class="fa fa-calendar" aria-hidden="true"></i> {item.Date} | {item.Place}</p>
                      <p>{item.Description}</p>

                    </div>

                    <div className="card-lg-container-btn">
                      <Link to={`/blogs/${item.Title}`}><button className="card-lg-btn">Read More </button></Link>
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

export default BlogsPage