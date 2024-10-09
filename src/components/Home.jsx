import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Slide from './Slide';


const Home = () => {

  return (
    <>
      <section className="main"  style={{ background: 'url(main_bg.jpg) no-repeat center center/cover', minHeight: '70vh' }}>
        <div className="container-fluid">
          <div className="row" style={{ height: '70vh' }}>
            <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
              <div className="text-center mb-5">
                <h1 className="fw-semibold text-white" style={{ fontSize: '3rem' }}>An Women Empowerment <br /> Initiative !</h1>
                <Link to="/menu" className="btn rounded-pill text-white fw-semibold bg-danger zoom">Menu</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="carouselslides py-5 mt-5 mx-3">
        <div className='text-center fw-semibold'>
        <h3>Recomendations</h3>
        </div>
        <div className="parent-container">
          <div className="" >
            <Slide />
          </div>
        </div>
      </section>

      {/* Special Cards Section */}
      <section className="special_cards py-5">
        <div className="container">
          <div className="row">
            <h3 className="text-center fw-semibold py-2">What's Special</h3>
            <h5 className="text-center text-danger fw-medium">Our Creations</h5>
            {[
              {
                imgSrc: "card1.png",
                title: "Traditional Events",
                subtitle: "We cater to traditional events",
                badges: ["new", "Festive Combo"],
                text: "Traditional Events, embrace the essence of Tamil culture through festival feasts! Experience the joy of community and tradition. We invite you to revel in the spirit of Tamil festivities through every delectable bite.",
                modalTarget: "#sp_card1"
              },
              {
                imgSrc: "card2.png",
                title: "Ingredients",
                subtitle: "We use our own ingredients",
                badges: ["new", "Own Ingredients"],
                text: "The heart of South Indian spice blends includes staples like cumin, coriander, mustard seeds, each contributing to the unique taste profile. Curry leaves, turmeric, and red chilies add a distinct warmth and color.",
                modalTarget: "#sp_card2"
              },
              {
                imgSrc: "card3.png",
                title: "Sweets",
                subtitle: "We customize sweets to order",
                badges: ["new", "Festive Combo"],
                text: "Traditional Indian sweets, often infused with aromatic spices like cardamom and saffron, offer a sensory journey that reflects the country's cultural richness. These sweets showcase the mastery of Indian culinary traditions.",
                modalTarget: "#sp_card3"
              },
              {
                imgSrc: "card4.png",
                title: "Snack",
                subtitle: "We craft healthy snacks",
                badges: ["new", "Based on order"],
                text: "Indulge in the crispy delight of South Indian traditional snacks. Crafted from a blend of rice flour, urad dal flour, and aromatic seasonings. Enjoy the satisfying crunch and the burst of flavors from ingredients.",
                modalTarget: "#sp_card4"
              }
            ].map((card, index) => (
              <div className="col py-3" key={index}>
                <div className="card mx-auto" style={{ width: '18rem' }}>
                  <div className='mx-auto mb-1'>
                    <img src={card.imgSrc} className="img-fluid zoom" alt="card" style={{ height: '200px', width: '200px' }} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <div className="card-subtitle text-muted py-1">{card.subtitle}</div>
                    {card.badges.map((badge, idx) => (
                      <span key={idx} className={`badge ${badge === 'new' ? 'bg-success' : 'bg-primary'} rounded-pill mx-2`}>{badge}</span>
                    ))}
                    <p className="card-text py-2">{card.text}</p>
                  </div>
                  <a href="#" className="btn bg-danger m-2" data-bs-toggle="modal" data-bs-target={card.modalTarget}>More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals for Special Cards */}
      {[
        {
          id: "sp_card1",
          title: "Traditional Events",
          subtitle: "Combo",
          slides: [
            "sp-card-1.1.jpg",
            "sp-card-1.2.jpg",
            "sp-card-1.3.jpg"
          ],
          text: "Events like Krishna Jayanthi, Ganesh Chathurti, Diwali.",
          subtext: "Traditional events (Combo)"
        },
        {
          id: "sp_card2",
          title: "Own Ingredients",
          slides: [
            "sp-card-2.1.png",
            "sp-card-2.2.png",
            "sp-card-2.3.jpg"
          ],
          text: "We take pride in using exclusively sourced, high-quality ingredients to craft our dishes.",
          subtext: " Own Incredients"
        },
        {
          id: "sp_card3",
          title: "Customize Sweets to your order",
          slides: [
            "sp-card-3.1.jpg",
            "sp-card-3.2.jpg",
            "sp-card-3.3.jpg"
          ],
          text: "Tailor your sweet cravings with our personalized made-to-order sweets.",
          subtext: " Customize Sweets to your order"
        },
        {
          id: "sp_card4",
          title: "Craft Healthy Snacks",
          slides: [
            "sp-card-4.1.jpg",
            "sp-card-4.2.jpg",
            "sp-card-4.3.jpg"
          ],
          text: "Our snacks are crafted with health-conscious ingredients without compromising on taste.",
          subtext: "Craft Healthy Snacks"
        }
      ].map(modal => (
        <div key={modal.id} className="modal mt-4" id={modal.id} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className=" text-muted ms-auto">{modal.title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <div id={`${modal.id}Carousel`} className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {modal.slides.map((slide, idx) => (
                      <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                        <img src={slide} className="d-block" alt={`Slide ${idx + 1}`} style={{ height: '400px', width: '100%' }} />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target={`#${modal.id}Carousel`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target={`#${modal.id}Carousel`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" ></span>
                  </button>
                </div>
                <div class="text-center">
                  <h2 class="fw-semibold py-2"> {modal.subtext}</h2>
                  <p class="m-auto py-2">{modal.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <section className="horizantal_card mb-5" id="about">
        <div className="container py-5 bg-danger rounded-5">
          <div className="row">
            <div className="col-md-5 my-auto mx-auto">
              <img src="horizontal_card.png" className="img-fluid" alt="horizantalcard" />
            </div>
            <div className="col-md-6 mx-auto my-auto text-center">
              <h3 className="fw-semibold">Flavors Unleashed</h3>
              <div className="card-subtitle fs-5 text-muted fw-medium">...Catering Excellence for Memorable Gatherings...</div>
              <p className="fs-5 py-3 text-white"> Our seasoned chefs and dedicated team specialize in creating be spoke menus
                that cater to the unique
                essence of your event. Whether it's a wedding, corporate function, or social gathering, we pride ourselves
                on delivering exceptional service and exquisite dishes.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="menu_cards">
        <div className="container py-5">
          <div className="row">
            <h3 className="text-center fw-semibold py-2">Welcome To Our Community</h3>
            <h5 className="text-center fw-medium text-danger">We Customize Food To Order</h5>
          </div>
          <div className="row">
            {/* Map over menuItems array to generate cards */}
            {[
              {
                id: 1,
                imgSrc: "breakfast.png",
                title: "Breakfast",
                subtitle: "South Indian breakfast",
                days: "Monday - Saturday",
                timings: "7am - 9am",
                description: "South Indian breakfast: a symphony of textures and flavors that promises a delicious start to your day. Each dish is a celebration of taste and tradition. Start your day with idli, crispy dosas, Pongal, paired with coconut chutney and tangy sambar. Don't miss the iconic vada for dipping into sambar."
              },
              {
                id: 2,
                imgSrc: "lunch.png",
                title: "Lunch",
                subtitle: "South Indian lunch",
                days: "Monday - Saturday",
                timings: "12am - 3pm",
                description: "South Indian lunch: a medley of flavors and traditions. Revel in the aromatic blend of spices as you savor dishes like rice, sambar, rasam, curd with porial, kootu, varuval, appalam, flavorful curries, and tangy tamarind rice, vadai & pickle. This is a tasty & filling menu during occasions, festivals and day to day cooking."
              },
              {
                id: 3,
                imgSrc: "snack.png",
                title: "Snack",
                subtitle: "Chennai makkalin favorite",
                days: "Monday - Saturday",
                timings: "4pm - 6pm",
                description: "Experience the tantalizing world of South Indian snacks, where each bite is a burst of flavor and texture. Crispy samosas and cutlets beckon with savory delights, while onion, banana, and potato bajjis showcase the art of deep-fried perfection. Masal vadas add a spicy kick to the ensemble."
              },
              {
                id: 4,
                imgSrc: "dinner.png",
                title: "Dinner",
                subtitle: "Exquisite South delicacies",
                days: "Monday - Saturday",
                timings: "7pm - 9pm",
                description: "South Indian dinner: a delightful array of dishes promises a journey through rich traditions and tantalizing flavors. Begin with the soft idlis and crispy dosas, a harmonious balance of softness and crunch. Each dish is a chapter in a flavorful story, weaving together tradition, taste, and culinary artistry."
              }
            ].map((item) => (
              <div className="col py-3" key={item.id}>
                <div className="card mx-auto" style={{ width: '18rem', height: '39rem' }}>
                  <div className="mx-auto">
                    <img src={item.imgSrc} className='img-fluid zoom' style={{ width: '200px', height: '200px' }} alt="card" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <div className="card-subtitle text-muted py-1">{item.subtitle}</div>
                    <span className="badge bg-info">{item.days}</span>
                    <span className="badge bg-primary rounded-pill mx-2">{item.timings}</span>
                    <p className="card-text pt-2">{item.description}</p>
                  </div>
                  <a href="#" className="btn bg-danger m-2">more</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="contact" id="Contact">
        <div className="container">
          <div className="row">
            <div className="col-md-5 m-auto text-center">
              <h1 className="fw-semibold">Contact Us</h1>
              <h6 className="fw-medium text-danger">Always Contact</h6>
            </div>
          </div>
          <div className="row py-5">
            <div className="col mx-auto">
              <div className="row ">
                <div className="col-lg-4 mx-auto">
                  <h6 className="fw-medium"><i className="fs-4 bi bi-geo-alt-fill"></i><span className="px-1">Location</span></h6>
                  <p className="px-4">𝘗𝘦𝘳𝘶𝘮𝘢𝘭𝘢𝘨𝘢𝘳𝘢𝘮</p>
                  <div className="py-1"><i className="fs-4 bi bi-pin-map-fill"></i></div>
                  <iframe
                  className='zoom'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.6371006262779!2d80.14001926954921!3d13.064392305596538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52611ab090d58f%3A0x1eec5ec28cbe6c8a!2sKAIMANAM%20HOME%20FOODS!5e0!3m2!1sen!2sin!4v1705593724431!5m2!1sen!2sin"
                    width="300" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                  <h6 className="fw-medium mt-2"><i className="fs-4 bi bi-telephone-fill"></i><span className="px-1">Phone</span></h6>
                  <p className="px-4">123456789</p>
                  <h6 className="fw-medium"><i className="fs-4 bi bi-envelope-at-fill"></i><span className="px-1">E-mail</span></h6>
                  <p className="px-4">𝘬𝘢𝘪𝘮𝘢𝘯𝘢𝘮@𝘨𝘮𝘢𝘪𝘭.𝘤𝘰𝘮</p>
                </div>
                <div className="col-lg-7 mx-auto">
                  <div className="row mt-3">
                    <h5 className="text-center">At Your Service</h5>
                    <div className="col-lg-6 py-2">
                      <input type="text" className="form-control bg-light" placeholder="𝘕𝘢𝘮𝘦" />
                    </div>
                    <div className="col-lg-6 py-2">
                      <input type="text" className="form-control bg-light" placeholder="𝘕𝘶𝘮𝘣𝘦𝘳" />
                    </div>
                  </div>
                  <div className="col-lg-12 py-2 m-auto">
                    <textarea name="" className="form-control bg-light" placeholder="Quries" id="" cols="10" rows="5"></textarea>
                  </div>
                  <div className="col-lg-6 text-center m-auto pt-2">
                    <a href="#" className="btn rounded-pill bg-danger">Submit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="news py-5 bg-black">
        <div className="container-fluid text-white">
          <div className="row">
            <div className="col-lg-5 m-auto text-center">
              <h1>𝑱𝒐𝒊𝒏 𝑶𝒖𝒓 𝑪𝒐𝒎𝒎𝒖𝒏𝒊𝒕𝒚</h1>
              <div className="py-3">
                <input type="text" className="rounded-2 bg-light form-control" placeholder="e-mail" />
                <a href="#" className="btn bg-danger rounded-pill mt-2 ">submit</a>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-3 py-2 m-auto text-center">
              <h5>𝑪𝒖𝒔𝒕𝒎𝒆𝒓 𝑪𝒂𝒓𝒆</h5>
              <span><i className="fs-4 px-1 bi bi-google"></i></span>
              <span><i className="fs-4 px-1 bi bi-facebook"></i></span>
              <span><i className="fs-4 px-1 bi bi-instagram"></i></span>
              <span><i className="fs-4 px-1 bi bi-whatsapp"></i></span>
            </div>
          </div>
          <p className="text-center pt-3">𝘤𝘰𝘱𝘺𝘳𝘪𝘨𝘩𝘵 @2024 𝘢𝘭𝘭 𝘳𝘪𝘨𝘩𝘵𝘴 𝘳𝘦𝘴𝘦𝘳𝘷𝘦𝘥 | 𝘵𝘩𝘪𝘴 𝘵𝘦𝘮𝘱𝘭𝘢𝘵𝘦 𝘪𝘴 𝘮𝘢𝘥𝘦 𝘣𝘺 𝘉𝘰𝘰𝘵𝘴𝘵𝘳𝘢𝘱</p>
        </div>
      </section>

    </>
  )
}

export default Home
