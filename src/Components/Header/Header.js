import React from 'react';
import logo from '../images/logo192.png'

import './Header.css'


const header = () => {
  return (

    <div className="container-fluid bg-dark ">
      <div className="row ">
        <div className="col-md-3 col-sm-10 ">
          <img src={logo} className="img-fluid" alt="" />
        </div>

        <div className="col-md-9 col-sm-12 ">
          <h2 className="text-white">Tourist Places of Bangladesh</h2>
          <small className="text " >Bangladesh - International tourism receipts</small>
          <h5 className="text">Total revenue Budget : Yearly <span className="text-danger">$391m</span> </h5>
        </div>
      </div>
    </div>




  );
};

export default header;