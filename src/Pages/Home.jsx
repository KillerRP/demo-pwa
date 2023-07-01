import React, { useState } from "react";
import HelpModal from "../components/modals/HelpModal";
import SettingModal from "../components/modals/SettingModal";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showToast } from "../helpers/utils";
import HeroImg from "../assets/images/hero-banner.png";
import kitlogo from "../assets/images/kite-student-portal-logo.svg";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [resetConfirmation, setResetConfirmation] = useState(false);
  const navigate = useNavigate();
  const handleGetStarted = () => {
    if (navigator.onLine) {
      navigate("demo-iframe");
    } else {
      console.warn("No network connection!");
      showToast("No network connection!", "error");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="content w-100 text-light h-100">
        <div>
          <div className="banner-section">
            <img src={HeroImg} alt="Hero" height={200} />
          </div>
          <section className="d-grid place-items-center gap-5">
            {/* Logo Container */}
            <div>
              <img src={kitlogo} alt="Kit Logo" width={250} />
            </div>
            {/* Getting started button */}
            <div>
              <button
                className="get-started-btn btn text-light"
                onClick={handleGetStarted}
              >
                <span className="text-wrapper">GET STARTED [Updated]</span>
                <img
                  className="vector"
                  alt="Vector"
                  width={20}
                  src="https://generation-sessions.s3.amazonaws.com/2a8424e45e6c92df757b39d0d7e26ee0/img/vector.svg"
                />
              </button>
            </div>
            {/* Setting and Help button */}
            <div className="d-flex setting-help-container">
              <button
                type="button"
                className="btn me-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => setResetConfirmation(false)}
              >
                <img
                  src="https://generation-sessions.s3.amazonaws.com/2a8424e45e6c92df757b39d0d7e26ee0/img/group-1@2x.png"
                  alt="setting"
                  width={25}
                />
                <span>Setting</span>
              </button>
              <button
                className="btn"
                type="buttom"
                data-bs-toggle="modal"
                data-bs-target="#lab-slide-bottom-popup"
              >
                <img
                  src="https://generation-sessions.s3.amazonaws.com/2a8424e45e6c92df757b39d0d7e26ee0/img/help-web-button-1.svg"
                  alt="setting"
                  width={25}
                />
                <span>Help</span>
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />

      {/* Modals */}
      <SettingModal
        setResetConfirmation={setResetConfirmation}
        resetConfirmation={resetConfirmation}
      />
      <HelpModal />
    </>
  );
};

export default Home;
