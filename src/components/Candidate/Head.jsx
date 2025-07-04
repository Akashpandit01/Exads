import React, { useEffect } from "react";
import "./Head.css";


export const Head = () => {
  useEffect(() => {
    const container = document.getElementById("container_fluid_of_Head");
    if (container) {
      container.classList.add("visible");
    }
  }, []);

  return (
    <>
    <div id="container_fluid_of_Head">
      <div className="container text-white">
        <h1 id="h1_of_Head" className="text-center fw-bold display-4">
          For Candidates
        </h1>
        <p className="fs-3 text-center fs-md-5 fs-lg-4">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit aspernatur ea placeat ratione quos
  voluptas eius adipisci perferendis? Exercitationem dolores aspernatur dolor laudantium vel...
</p>

      </div>
    </div>
    </>
  );
};