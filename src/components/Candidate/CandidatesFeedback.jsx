import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import { FeedbackCard } from "./FeedbackCard";
import googleLogo from "../../assets/google-logo.png";

export const CandidatesFeedback = () => {
  const feedbacks = [
    {
      review: "very good service",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    },
    {
      review: "Amazing service and quick response and resolution to queries or issues!",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    },
    {
      review: "Super quick response and action time, really helpful and knows the industry to modern standards 5*",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    },
    {
      review: "Great team. Really responsive and explain things in a way that actually makes sense, even if you are not tech savvy.",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    },
    {
      review: "Thanks for all your hard work and support in the process. I have managed to secure a role in a leading Development team",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    },
    {
      review: "Aaron and the team are great! They go above and beyond for their clients and are always just an email away!",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    },
    {
      review: "I've been using Refari since their inception. Great product, great service and easy integrations.",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    },
    {
      review: "The team has been super responsive and supportive and offer a great experience for candidates.",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    },
    {
      review: "Refari has provided us with wonderful service and completed all updates in a very timely manner. Refari send videos to explain items as if they are beside you.",
      logo: googleLogo,
      stamp: "/images/stamp.png"
    }
  ];

  return (
    <div className="container my-5">
      <div className="cont_of_FeedBack d-flex justify-content-between align-items-center flex-wrap mb-4">
        <div>
          <h2 className="fw-bold">Candidates feedback</h2>
          <p className="text-dark" style={{ maxWidth: "500px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
          </p>
        </div>
        <Link to="/team" className="btn btn-dark fw-semibold">About-US</Link>
      </div>

      <div className="row">
        {feedbacks.map((item, index) => (
          <FeedbackCard key={index} {...item} />
        ))}
      </div>

      {/* <div className="text-center mt-4">
        <button className="btn btn-outline-dark px-4">LOAD MORE</button>
      </div> */}
    </div>
  );
};