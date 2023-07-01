import React from "react";
import { getUrl, saveUrl, showToast } from "../../helpers/utils";
import { LS } from "../../helpers/constant";

const SettingModal = ({ setResetConfirmation, resetConfirmation }) => {
  const handleSaveChanges = () => {
    const customUrlInput = document.getElementById("custom-url");
    if (customUrlInput) {
      const url = customUrlInput.value;
      if (url) {
        if (navigator.onLine) {
          saveUrl(url);
        } else {
          console.log("No network connection!");
          showToast("No network connection!", "error");
        }
      } else {
        console.log("Required !!!!");
      }
    }
  };

  const removeCustomUrl = () => {
    localStorage.removeItem(LS.URL);
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-bottomed">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Settings
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <p className="mt-2 ms-3">Set Local Caching Server URL.</p>
          <div className="modal-body">
            <input
              className="w-100"
              type="text"
              placeholder="Enter URL here..."
              id="custom-url"
              defaultValue={getUrl()}
              required
            />
          </div>
          <div className="reset-links ms-3 me-3">
            <p className="font-12">
              If you would like to reset the URL to KITE’s main server, please
              tap on Reset it.
            </p>
            <p
              className="reset cursot-pointer text-primary"
              onClick={() => setResetConfirmation(true)}
            >
              Reset
            </p>
          </div>

          <div className="modal-footer justify-content-start">
            {resetConfirmation ? (
              <div className="d-flex gap-3">
                <p>Are you sure ?</p>
                <div className="d-flex gap-3">
                  <button
                    className="btn btn-success"
                    data-bs-dismiss="modal"
                    onClick={removeCustomUrl}
                  >
                    Yes
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => setResetConfirmation(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleSaveChanges}
                className="btn kite-btn text-light"
                data-bs-dismiss="modal"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;
