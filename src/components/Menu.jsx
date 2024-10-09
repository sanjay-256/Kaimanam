import React, { useEffect, useState } from 'react';
import content from '../assets/data.json';

const Menu = () => {
    useEffect(() => {
        setMenu(content);
    }, []); 
    const [menu,setMenu]=useState([]);
    const Like=(id)=>{
        const liked=menu.map(item=>item.id===id ?{...item,like:!item.like}:item);
        setMenu(liked);
    }
    return (
        <>
            <div className="bg-danger">
                <div className="container navbar navbar-expand-lg text-white">
                    <a href="#" className="navbar-brand">
                        <img src="/main_logo.png" className='img-fluid' alt="logo" style={{ width: '45px' }} />
                    </a>
                    <button type="button" className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbar">
                        <ul className="navbar-nav mx-auto ">
                            <li className="nav-item me-3">
                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                                    Breakfast
                                </a>
                                <div className="">
                                    <ul className="dropdown-menu bg-dark" style={{ maxWidth: '100wh', width: '100%' }}>
                                       <div className="d-flex flex-wrap gap-3 py-3 justify-content-center">
                                       {menu.filter(item=>item.category==="breakfast").map((item) => (
                                            <div className="card bg-warning" key={item.id} style={{ width: '12rem' }}>
                                                <div className="row mb-1 ">
                                                    <div className="col-7 m-auto mt-2 ps-3"><img src={item.image} alt="img" className='img-fluid' style={{ width: '100px', height: '100px' }} /></div>
                                                    <div className="col-3 mt-1 me-1"><i className={item.like ? "bi bi-heart-fill fs-4":"bi bi-heart fs-4" }style={{ color: item.like ? 'red' : 'black'}} onClick={()=>{Like(item.id)}}></i></div>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className='card-title'>{item.name}</h5> 
                                                    <p className='card-text fw-medium badge bg-danger'>Rate: ₹{item.rate}</p>
                                                </div>
                                            </div>
                                        ))}
                                       </div>
                                    </ul>
                                </div>
                            </li>
                            {/* ------------------------------------------------------- */}
                            <li className="nav-item me-3">
                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                                    Lunch
                                </a>
                                <div className="">
                                    <ul className="dropdown-menu bg-dark" style={{ maxWidth: '100wh', width: '100%' }}>
                                       <div className="d-flex flex-wrap gap-3 py-3 justify-content-center">
                                       {menu.filter(item=>item.category==="lunch").map((item) => (
                                            <div className="card bg-warning" key={item.id} style={{ width: '12rem' }}>
                                                <div className="row mb-1">
                                                    <div className="col-7 m-auto mt-2 ps-3"><img src={item.image} alt="img" className='img-fluid' style={{ width: '100px', height: '100px' }} /></div>
                                                    <div className="col-3 mt-1 me-1"><i className={item.like ? "bi bi-heart-fill fs-4":"bi bi-heart fs-4" }style={{ color: item.like ? 'red' : 'black'}} onClick={()=>{Like(item.id)}}></i></div>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className='card-title'>{item.name}</h5> 
                                                    <p className='card-text fw-medium badge bg-danger'>Rate: ₹{item.rate}</p>
                                                </div>
                                            </div>
                                        ))}
                                       </div>
                                    </ul>
                                </div>
                            </li>
                            {/* ------------------------------------------------------- */}
                            <li className="nav-item me-3">
                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                                 Snack
                                </a>
                                <div className="">
                                    <ul className="dropdown-menu bg-dark" style={{ maxWidth: '100wh', width: '100%' }}>
                                       <div className="d-flex flex-wrap gap-3 py-3 justify-content-center">
                                       {menu.filter(item=>item.category==="snack").map((item) => (
                                            <div className="card bg-warning" key={item.id} style={{ width: '12rem' }}>
                                                <div className="row mb-1">
                                                    <div className="col-7 m-auto mt-2 ps-3"><img src={item.image} alt="img" className='img-fluid' style={{ width: '100px', height: '100px' }} /></div>
                                                    <div className="col-3 mt-1 me-1"><i className={item.like ? "bi bi-heart-fill fs-4":"bi bi-heart fs-4" }style={{ color: item.like ? 'red' : 'black'}} onClick={()=>{Like(item.id)}}></i></div>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className='card-title'>{item.name}</h5> 
                                                    <p className='card-text fw-medium badge bg-danger'>Rate: ₹{item.rate}</p>
                                                </div>
                                            </div>
                                        ))}
                                       </div>
                                    </ul>
                                </div>
                            </li>
                            {/* ------------------------------------------------------- */}
                            <li className="nav-item me-3">
                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                                    Dinner
                                </a>
                                <div className="">
                                    <ul className="dropdown-menu bg-dark" style={{ maxWidth: '100wh', width: '100%' }}>
                                       <div className="d-flex flex-wrap gap-3 py-3 justify-content-center">
                                       {menu.filter(item=>item.category==="dinner").map((item) => (
                                            <div className="card bg-warning" key={item.id} style={{ width: '12rem' }}>
                                                <div className="row mb-1">
                                                    <div className="col-7 m-auto mt-2 ps-3"><img src={item.image} alt="img" className='img-fluid' style={{ width: '100px', height: '100px' }} /></div>
                                                    <div className="col-3 mt-1 me-1"><i className={item.like ? "bi bi-heart-fill fs-4":"bi bi-heart fs-4" }style={{ color: item.like ? 'red' : 'black'}} onClick={()=>{Like(item.id)}}></i></div>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className='card-title text-truncate'>{item.name}</h5> 
                                                    <p className='card-text fw-medium badge bg-danger'>Rate: ₹{item.rate}</p>
                                                </div>
                                            </div>
                                        ))}
                                       </div>
                                    </ul>
                                </div>
                            </li>
                            {/* ------------------------------------------------------- */}
                        </ul>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
