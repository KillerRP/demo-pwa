import React, { useState } from "react";

const Home = () => {
  const [isSettingModal, setIsSettingModal] = useState(false);
  return (
    <>
      <div className="w-100 bg-danger h-100 d-flex justify-content-center align-items-center">
        <div>
          <div>
            <h1>Logo</h1>
          </div>
          <div>
            <p>Banner</p>
          </div>
          <div>
            <button>Get Started</button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Setting
            </button>
            <button>Help</button>
          </div>
        </div>
      </div>
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
                    console.log(url);
                  } else {
                    console.log("Required !!!!");
                  }
                }}
                className="btn btn-primary"
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
