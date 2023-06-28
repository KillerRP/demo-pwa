import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const IframeView = () => {
  const params = useParams();
  useEffect(() => {
    if (params) {
      console.log(params.url);
    }
  }, []);
  return (
    <>
      <iframe
        src="https://oceanwp.org/demos/"
        width="100%"
        height="100%"
        title="Example"
      ></iframe>
    </>
  );
};

export default IframeView;
