import React from "react";
import "./Mid.css";
import Video from "../../assets/Video.mp4";


export const Mid = () => {
  return (
    <>
      <div className="container-fluid p-3  " style={{backgroundImage:'linear-gradient(135deg, #cf7979 0%,#c0c031 100%)'}}> 
        <h1 id="h1_of_Mid" className="display-6 display-md-4 display-lg-2 fw-bold text-white ">
          Connect With US We Will Find Your Perfect Match
        </h1>
        <p id="p_of_Mid" className="fs-3 fs-md-5 fs-lg-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
          distinctio saepe itaque dolorem cum nam voluptate quae. Saepe dolores
          voluptates ratione unde dicta, dignissimos cumque voluptas, enim rem
          rerum iusto?
        </p>
      </div>

      <div className="cont container " >
        <div className="video-card w-100  mx-auto my-5">
          <video autoPlay muted loop>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay text-white text-center">
            <h2>Discover the Experience</h2>
            <p>Background video with Bootstrap overlay content</p>
            <button className="btn btn-light fw-bold px-4">Know More...</button>
          </div>
        </div>

        
      </div>
    </>
  );
};