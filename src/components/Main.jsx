import React, { useState, useEffect } from "react";
import bgDualsense from "../img/dualsenseBackground.jpg";
import hapticIcon from "../img/hapticIcon.jpg";
import adaptiveTriggersIcon from "../img/adaptiveTriggersIcon.jpg";
import AOS from "aos"
import "aos/dist/aos.css"

const Main = () => {
  // Library for animation
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

  return (
    <div className="main">
      <div className="bgImage">
        <img className="bgDualsense" src={bgDualsense} alt="" />
      </div>
      <div className="productInfoContainer">
        <p className="productName">DualSense™ Wireless Controller</p>
        <div className="productDescription">
          <p>
            Discover a deeper gaming experience with the innovative new PS5™
            controller
          </p>
          <p>
            Delivery at no extra cost when you buy direct from PlayStation.
            Conditions apply.
          </p>
        </div>
      </div>
      <section className="feature">
        <h2 className="new-section-h2">Bring gaming worlds to life</h2>
        <div className="featureContainer">
        <div className="featureElement">
          <div>
            <img className={"featureImage"} data-aos="shake" src={hapticIcon} alt="" />
            <h2>Haptic feedback2</h2>
            <p>
              Feel physically responsive feedback to your in-game actions with
              dual actuators which replace traditional rumble motors. In your
              hands, these dynamic vibrations can simulate the feeling of
              everything from environments to the recoil of different weapons.
            </p>
          </div>
        </div>
        <div className="featureElement">
          <img className={"featureImage"} data-aos="shake" src={adaptiveTriggersIcon} alt="" />
          <h2>Adaptive triggers2</h2>
          <p>
            Experience varying levels of force and tension as you interact with
            your in-game gear and environments. From pulling back an
            increasingly tight bowstring to hitting the brakes on a speeding
            car, feel physically connected to your on-screen actions.
          </p>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
