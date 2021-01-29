import React from 'react';
import { Link } from 'react-router-dom';


export const GenericNotFound = () => {
  
  return (
    <div id='generic-not-found' className='container h-100'>
      <div className='row h-100 d-flex flex-fill justify-content-center align-content-center mt-5'>
        <div className='col-sm-10 col-lg-4 d-flex justify-content-center d-lg-block align-self-lg-center'>
          <img src='/img/logo.jpg' alt='page_not_found_emoji' className='img-fluid' />
        </div>
        <div className='col-lg-4 text-center text-lg-left'>
          <h1 className='font-weight-bold display-3'>404</h1>
          <h4 className='text-uppercase'>Oops! Page Not Be Found </h4>
          <p className='text-muted'>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
          <Link to='/' className='text-info'>
          Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};
