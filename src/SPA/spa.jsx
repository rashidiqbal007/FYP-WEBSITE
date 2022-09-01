import React, { useState } from "react"
import { Link } from "react-router-dom"
import Heading from '../components/common/heading/Heading'
import "./style.css"
import { homeAbout } from "../dummydata"
import { awrapper } from "../dummydata"
import { coursesCard } from "../dummydata"
import { online, testimonal, blog } from "../dummydata"
import Back from "../components/common/back/Back"



const Spa = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3321.2057331445003!2d73.15440461446524!3d33.651830746173374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1661785351228!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '



    const [click, setClick] = useState(false)

  return (
    <>
    {/* HEADER */}
    <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>VISION-X</h1>
            <span>WEB APPLICATION FOR HANDICAPS</span>
          </div>

          <div className='social'>
          <i className="fab fa-user-secret icon"></i>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            {/* <li>
                <a href="#"></a>
              <Link to='/'>Home</Link>
            </li> */}
            <li>
              
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
              
            </li>
            <li>
            <a href="#courses">Courses</a>
              
            </li>
            <li>
            <a href="#services">Services</a>
              
            </li>
            <li>
                <a href="#team">Team</a>
              
            </li>
            <li>
            <a href="#contact">Contact</a>
              
            </li>
          </ul>
          <div className='start'>
            <div className='button'>TEST PRODUCT</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    {/* HERO */}
    <section id = "home" className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO VISION-X' title='EXCEPTIONAL MEDICAL HEALTHCARE' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                TEST PRODUCT <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
      {/* ABOUT SECTION */}
      <section id="about" className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/Aboutus_pic.png' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='What About Us' title='About using Vision-X' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className='awrapper'>
        <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      {/* HABOUT + COURSES*/}
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='our courses' title='explore our popular online courses' />

          <div className='coursesCard'>
            {/* copy code form  coursesCard */}
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <div className='left'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                    </div>
                    <div className='text'>
                      <h1>{val.coursesName}</h1>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>
                      <div className='details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <div className='box'>
                              <div className='dimg'>
                                <img src={details.dcover} alt='' />
                              </div>
                              <div className='para'>
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='price'>
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>
                  <button className='outline-btn'>ENROLL NOW !</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section id = "services" className='online'>
        <div className='container'>
          <Heading subtitle='SERVICES' title='Explore Our Main Services' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                {/* <span>{val.course}</span> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      </section>
      {/* TESTIMONIAL */}

      <section id = "team" className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='TEAM' title='Our Successful Staff' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* BLOG */}
      {/* <Back title='Blog Posts' /> */}
      {/* <section className='blog padding'>
        <div className='container grid2'>
        {blog.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='text'>
            <div className='admin flexSB'>
              <span>
                <i className='fa fa-user'></i>
                <label htmlFor=''>{val.type}</label>
              </span>
              <span>
                <i className='fa fa-calendar-alt'></i>
                <label htmlFor=''>{val.date}</label>
              </span>
              <span>
                <i className='fa fa-comments'></i>
                <label htmlFor=''>{val.com}</label>
              </span>
            </div>
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
        </div>
      </section> */}
      {/* Contact Us */}
      
    <Heading subtitle='CONTACT US' title='In Case of Emergency' />
      <section id = "contact"className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Comsats University Islamabad, Park Road, Islamabad</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>info@vision_x.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> 090078601</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>

      {/* footer */}
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>VISION-X</h1>
            <span>WEB APPLICATION FOR HANDICAPS</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          {/* <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Comsats University, Park Rd, Chak Shehzad, Islamabad, Pakistan.
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +92090078601
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@vision-x.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved |  Made with <i className='fa fa-heart'></i> by team Vision-X
        </p>
      </div>
  </>
  )
}

export default Spa