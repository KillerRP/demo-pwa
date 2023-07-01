import { toast } from "react-toastify";
import { LS, defaultUrl } from "./constant";

export const saveDefaultUrl = () => {
  try {
    localStorage.setItem(LS.DEFAULT_URL, defaultUrl);
  } catch (err) {
    console.error("Save URL error: " + err);
  }
};

export const saveUrl = (url) => {
  try {
    if (!url) {
      throw new Error(`Cannot find url`);
    }
    localStorage.setItem(LS.URL, url);
  } catch (err) {
    console.error("Save URL error: " + err);
  }
};

export const getUrl = () => {
  var url = null;
  try {
    url = localStorage.getItem(LS.URL) || null;
  } catch (err) {
    console.error("Save URL error: " + err);
    url = null;
  }
  return url;
};

export const showToast = (message, type) => {
  switch (type) {
    case "success":
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case "error":
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case "warning":
      toast.warning(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case "info":
      toast.info(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    default:
      toast(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
  }
};
