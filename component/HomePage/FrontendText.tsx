import FrontendImage from "@/images/frontendImage.png";
import Image from "next/image";
import React from "react";
import "./FrontendText.css";

const FrontendText = () => {
  return (
    <div className="frontend-container">
      <div className="image-container">
        <Image
          src={FrontendImage}
          alt="Frontend Image"
          width={500}
          height={700}
          className="frontend-image"
        />
      </div>
      <div className="content-container">
        <h2 className="content-heading">
          Enhance Your Frontend Development with a Complimentary Consultation!
        </h2>
        <p className="content-text">
          Looking to elevate your website&apos;s user experience? I offer
          complimentary consultations for frontend development. Together, we can
          explore your project goals, design concepts, and technical
          requirements. Let&apos;s collaborate to create a seamless and engaging
          interface that captivates your audience.
        </p>
      </div>
    </div>
  );
};

export default FrontendText;