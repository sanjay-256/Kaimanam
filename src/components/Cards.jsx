import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import content from '../assets/data.json';

export default function Cards() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        setMenu(content);
    }, []);

    const Like = (id) => {
        const updatedMenu = menu.map(item => item.id === id ? { ...item, like: !item.like } : item);
        setMenu(updatedMenu);
    }

    // Inline styles for Swiper container
    const swiperStyles = {
        width: '240px',
        height: '320px'
    };

    // Common styles for Swiper slides
    const slideStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '18px',
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#fff'
    };

    // Specific styles for each Swiper slide
    const slideBackgrounds = [
        'rgb(206, 17, 17)',   // Slide 1
        'rgb(0, 140, 255)',   // Slide 2
        'rgb(10, 184, 111)',  // Slide 3
        'rgb(211, 122, 7)',   // Slide 4
        'rgb(118, 163, 12)',  // Slide 5
        'rgb(180, 10, 47)',   // Slide 6
        'rgb(35, 99, 19)',    // Slide 7
        'rgb(0, 68, 255)',    // Slide 8
        'rgb(218, 12, 218)'   // Slide 9
    ];

    return (
        <>
           <div className="container-fliud" >
           <div className="container">
                <div className="row py-5 border border-5 border-danger m-3 rounded-5">
                    <div className="col-md-6 my-auto text-center">
                        <div className='fs-1 fw-bold fst-italic'>Breakfast</div>
                    </div>
                    <div className="col-md-5 mt-5 mt-md-0">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            style={swiperStyles}
                        >
                            {menu.filter(item=>item.category==="breakfast").map((item, index) => (
                                <SwiperSlide
                                    key={item.id}
                                    style={{ ...slideStyles, backgroundColor: slideBackgrounds[index % slideBackgrounds.length] }}
                                >
                                    <div className="card bg-warning" style={{ width: '80%' }}>
                                        <div className="row mb-1 ">
                                            <div className="col-7 m-auto mt-2 ps-3">
                                                <img
                                                    src={item.image}
                                                    alt="img"
                                                    className='img-fluid'
                                                    style={{ width: '100px', height: '100px' }}
                                                />
                                            </div>
                                            <div className="col-3 mt-1 me-1">
                                                <i
                                                    className={item.like ? "bi bi-heart-fill fs-4" : "bi bi-heart fs-4"}
                                                    style={{ color: item.like ? 'red' : 'black' }}
                                                    onClick={() => { Like(item.id) }}
                                                ></i>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className='card-title'>{item.name}</h5>
                                            <p className='card-text fw-medium badge bg-danger'>Rate: ₹{item.rate}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                {/* --------------------------------------------- */}
                <div className="row py-5 border border-5 border-danger m-3 rounded-5">
                    <div className="col-md-5 mb-5 mb-md-0">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            style={swiperStyles}
                        >
                            {menu.filter(item=>item.category==="lunch").map((item, index) => (
                                <SwiperSlide
                                    key={item.id}
                                    style={{ ...slideStyles, backgroundColor: slideBackgrounds[index % slideBackgrounds.length] }}
                                >
                                    <div className="card bg-warning" style={{ width: '80%' }}>
                                        <div className="row mb-1 ">
                                            <div className="col-7 m-auto mt-2 ps-3">
                                                <img
                                                    src={item.image}
                                                    alt="img"
                                                    className='img-fluid'
                                                    style={{ width: '100px', height: '100px' }}
                                                />
                                            </div>
                                            <div className="col-3 mt-1 me-1">
                                                <i
                                                    className={item.like ? "bi bi-heart-fill fs-4" : "bi bi-heart fs-4"}
                                                    style={{ color: item.like ? 'red' : 'black' }}
                                                    onClick={() => { Like(item.id) }}
                                                ></i>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className='card-title'>{item.name}</h5>
                                            <p className='card-text fw-medium badge bg-danger'>Rate: ₹{item.rate}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="col-md-6 my-auto text-center">
                        <div className='fs-1 fw-bold fst-italic'>Lunch</div>
                    </div>
                </div>
                {/* --------------------------------------------- */}
                <div className="row py-5 border border-5 border-danger m-3 rounded-5">
                    <div className="col-md-6 my-auto text-center">
                        <div className='fs-1 fw-bold fst-italic'>Snack</div>
                    </div>
                    <div className="col-md-5 mt-5 mt-md-0">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            style={swiperStyles}
                        >
                            {menu.filter(item=>item.category==="snack").map((item, index) => (
                                <SwiperSlide
                                    key={item.id}
                                    style={{ ...slideStyles, backgroundColor: slideBackgrounds[index % slideBackgrounds.length] }}
                                >
                                    <div className="card bg-warning" style={{ width: '80%' }}>
                                        <div className="row mb-1 ">
                                            <div className="col-7 m-auto mt-2 ps-3">
                                                <img
                                                    src={item.image}
                                                    alt="img"
                                                    className='img-fluid'
                                                    style={{ width: '100px', height: '100px' }}
                                                />
                                            </div>
                                            <div className="col-3 mt-1 me-1">
                                                <i
                                                    className={item.like ? "bi bi-heart-fill fs-4" : "bi bi-heart fs-4"}
                                                    style={{ color: item.like ? 'red' : 'black' }}
                                                    onClick={() => { Like(item.id) }}
                                                ></i>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className='card-title'>{item.name}</h5>
                                            <p className='card-text fw-medium badge bg-danger'>Rate: ₹{item.rate}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                {/* --------------------------------------------- */}
                <div className="row py-5 border border-5 border-danger m-3 rounded-5">
                    <div className="col-md-5 mb-5 mb-md-0">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            style={swiperStyles}
                        >
                            {menu.filter(item=>item.category==="dinner").map((item, index) => (
                                <SwiperSlide
                                    key={item.id}
                                    style={{ ...slideStyles, backgroundColor: slideBackgrounds[index % slideBackgrounds.length] }}
                                >
                                    <div className="card bg-warning" style={{ width: '80%' }}>
                                        <div className="row mb-1 ">
                                            <div className="col-7 m-auto mt-2 ps-3">
                                                <img
                                                    src={item.image}
                                                    alt="img"
                                                    className='img-fluid'
                                                    style={{ width: '100px', height: '100px' }}
                                                />
                                            </div>
                                            <div className="col-3 mt-1 me-1">
                                                <i
                                                    className={item.like ? "bi bi-heart-fill fs-4" : "bi bi-heart fs-4"}
                                                    style={{ color: item.like ? 'red' : 'black' }}
                                                    onClick={() => { Like(item.id) }}
                                                ></i>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className='card-title'>{item.name}</h5>
                                            <p className='card-text fw-medium badge bg-danger'>Rate: ₹{item.rate}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="col-md-6 my-auto text-center">
                        <div className='fs-1 fw-bold fst-italic'>Dinner</div>
                    </div>
                </div>
                {/* --------------------------------------------- */}
            </div>
           </div>
        </>
    );
}
