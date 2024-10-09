import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Select = () => {
  return (
    <div className="container-fluid bg-warning-subtle mt-2  min-vh-100">
      <div className="container rounded-5 py-5">
        <div className="row">
          <div className="col text-center">
            <h1 className='text-danger fw-bold'>Pick One</h1>
          </div>
        </div>
        <div className="row text-center text-danger">
          <div className="col-md-4 m-auto">
            <Link to="/order/breakfast">
              <img className='img-fluid w-50 mt-5 mb-2 rounded-circle zoom' src="breakfast-main.png" alt="" />
              </Link>
              <h5>Breakfast</h5>
            <Link to="/order/lunch">
              <img className='img-fluid w-50 mt-5 mb-2 rounded-circle zoom' src="lunch-main.jpg" alt="" />
              </Link>
              <h5>Lunch</h5>
          </div>
          <div className="col-md-4 m-auto">
            <Link to="/order/snack">
              <img className='img-fluid bg-white w-50 mt-5 mb-2 rounded-circle zoom' src="snack-main.png" alt="" />
              </Link>
              <h5>Snack</h5>
            <Link to="/order/dinner">
              <img className='img-fluid w-50 mt-5 mb-2 rounded-circle zoom' src="dinner-main.jpg" alt="" />
              </Link>
              <h5>Dinner</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
