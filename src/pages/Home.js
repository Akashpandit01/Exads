
import React, { useState } from 'react';

import { Container, Button, Carousel, Row, Col } from 'react-bootstrap';
import './Home.css'; 
import Footer from '../components/Footer';
import ServicesCarousel from '../components/ServicesCarousel';
import StatsSection from "../components/StatsSection";
import QualitySection from '../components/QualitySection';
import TabSection from "../components/TabSection";
import TimelineSection from "../components/TimelineSection";
import FilterSidebar from '../components/FilterSidebar';
function Home() {
     const [openIndex, setOpenIndex] = useState(null);
  return (
    <Container fluid className="home-section text-white pt-0 px-0">
      {/* Carousel */}
      {/* <Container className="pt-0 px-0">
        <h1 className="mb-4 text-dark">Welcome Mindcrafters HR PARTNERS</h1>
        <Carousel fade interval={3000}>
          <Carousel.Item>
            <img className="d-block w-100" src="/images/images1.jpeg" alt="Slide 1" />
            <Carousel.Caption>
              <h3>First Slide</h3>
              <p>Description for Slide 1</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/images/images2.jpeg" alt="Slide 2" />
            <Carousel.Caption>
              <h3>Second Slide</h3>
              <p>Description for Slide 2</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="mt-4 text-center">
          <Button variant="warning">Discover More</Button>
        </div>
      </Container> */}
       

     <div className="video-banner-container">
  <video
    className="video-banner"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/images/vidio1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  
  {/* Overlayed Text */}
  <div className="video-overlay-content text-center text-white">
    <h1 className="display-4 fw-bold">Welcome to</h1>
    <h2 className="display-5 fw-bold text-warning">Mindcrafters HR PARTNERS</h2>
    <Button variant="warning" className="mt-4 px-4 py-2 btn-custom">Discover More</Button>
  </div>
</div>

      {/* Service Grid Section */}
      {/* <div className="services-section py-5 px-3">
        <h2 className="section-title text-center">
          YOU CAN COUNT ON <span className="highlight">US.</span>
        </h2>
        <p className="section-subtitle text-center">
          We are committed to providing our customers with excellent services while offering customized solutions for all their needs.
        </p>

        <Container className="mt-5">
          <Row className="g-4 justify-content-center">
            {[
              { id: '01', title: 'LEARNING AND DEVELOPMENT', icon: '🧠' },
              { id: '02', title: 'HR AUDITS AND BENCHMARKING', icon: '📅' },
              { id: '03', title: 'PERFORMANCE MANAGEMENT SYSTEMS', icon: '💻' },
              { id: '04', title: 'STRATEGIC HR CONSULTING', icon: '🤝' },
              { id: '05', title: 'HRMS SOLUTIONS', icon: '🖥️' },
              { id: '06', title: 'RECRUITMENT & STAFFING', icon: '🔄' },
            ].map((item) => (
              <Col xs={12} sm={6} md={4} key={item.id}>
                <div className="service-card text-center p-4">
                  <div className="service-id mb-2">{item.id}</div>
                  <div className="service-icon fs-1 mb-3">{item.icon}</div>
                  <div className="service-title">{item.title}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div> */}


<ServicesCarousel />
      
      {/* <section className="hero-section d-flex flex-column flex-md-row align-items-center justify-content-between text-start px-4 py-5 bg-warning">
  <div>
    <h1 className="display-5 fw-bold">YOUR HR PARTNERS</h1>
    <div className="alert-box mt-3 p-2 rounded">
      {/* Add a short tagline here if needed */}
    {/* </div>
  </div>
  <div>
    <button className="btn btn-dark px-4 py-2 mt-3 mt-md-0 btn-c">CONTACT US</button>
  </div> */}
{/* </section> */} 

     {/* Analytics Dropdown Section */}
{/* <Container className="analytics-section my-5 text-white">
  <h2 className="text-center mb-4">BENCHMARKING AND ANALYTICS<span className="text-warning">.</span></h2>
  <p className="text-center mb-5 text-secondary">
    Providing you with Analytics that really matter
  </p>

  {[
    {
      id: 1,
      title: "AVERAGE SALARY HIKE 2021",
      content:
        "India Inc is likely to hand out an average salary increase of 7.9% to employees in 2021 against an actual average increment of 6.9% in 2020.",
    },
    {
      id: 2,
      title: "AVERAGE ATTRITION",
      content:
        "Average attrition rates are expected to remain steady with companies focusing on retaining talent.",
    },
    {
      id: 3,
      title: "FOCUS ON EMPLOYEE WELLNESS",
      content:
        "Organizations are increasing focus on employee wellness, offering more mental health and well-being programs.",
    },
  ].map((item, index) => (
    <div key={item.id} className="mb-3 p-3 bg-dark rounded">
      <div
        className="d-flex justify-content-between align-items-center cursor-pointer"
        onClick={() =>
          setOpenIndex(openIndex === index ? null : index)
        }
      >
        <h5 className="mb-0 text-white">
          {item.id}. {item.title}
        </h5>
        <span className="text-warning fs-4">
          {openIndex === index ? "-" : "+"}
        </span>
      </div>
      {openIndex === index && (
        <p className="mt-3 text-secondary">{item.content}</p>
      )}
    </div>
  ))}

  <div className="mt-4">
    <div className="d-flex align-items-center mb-2">
      <strong className="me-2">INVESTMENT IN UPSKILLING</strong>
      <span>46%</span>
    </div>
    <div className="progress mb-3">
      <div
        className="progress-bar bg-warning"
        role="progressbar"
        style={{ width: "46%" }}
      ></div>
    </div>

    <div className="d-flex align-items-center mb-2">
      <strong className="me-2">AGILE PERFORMANCE MANAGEMENT</strong>
      <span>60%</span>
    </div>
    <div className="progress mb-3">
      <div
        className="progress-bar bg-warning"
        role="progressbar"
        style={{ width: "60%" }}
      ></div>
    </div>

    <div className="d-flex align-items-center mb-2">
      <strong className="me-2">FOCUS ON EMPLOYEE WELLNESS 2021</strong>
      <span>90%</span>
    </div>
    <div className="progress">
      <div
        className="progress-bar bg-warning"
        role="progressbar"
        style={{ width: "90%" }}
      ></div>
    </div>
  </div>
</Container> */}
      {/* <StatsSection /> */}
      <QualitySection/>

<div className="container my-5">
        <div className="row align-items-start">
          
          <div className="col-md-6 mb-4">
            <TabSection />
          </div>

          <div className="col-md-6">
            <TimelineSection />
          </div>

        </div>
      </div>

  

      <Footer />
    </Container>
    
  );
}

export default Home;
