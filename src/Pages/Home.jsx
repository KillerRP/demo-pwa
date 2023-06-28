import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isSettingModal, setIsSettingModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="w-100 bg-dark text-light h-100 d-flex justify-content-center align-items-center">
        <div>
          <div>
            <h1>Logo</h1>
          </div>
          <div>
            <p>Banner</p>
          </div>
          <div className="mb-3">
            <button className="btn btn-success">Get Started</button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary me-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={(e) => setIsSettingModal(true)}
            >
              Setting
            </button>
            <button className="btn btn-primary">Help</button>
          </div>
        </div>
      </div>
      {isSettingModal ? (
        <div className="position-relative" style={{ top: 0, zIndex: 9999 }}>
          Hello World
        </div>
      ) : null}
      {/* // Setting Modal */}
      {/* {isSettingModal ? ( */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Enter url"
                id="custom-url"
                defaultValue="https://oceanwp.org/demos/"
                disabled
                required
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  let url = document.getElementById("custom-url").value;
                  if (url) {
                    navigate(`demo-iframe`);
                  } else {
                    console.log("Required !!!!");
                  }
                }}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ) : null} */}
    </>
  );
};

export default Home;
