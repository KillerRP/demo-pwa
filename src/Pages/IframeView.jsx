import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IframeView = () => {
  const params = useParams();
  const [customUrl, setCustomUrl] = useState("https://oceanwp.org/demos/");
  useEffect(() => {
    if (params?.url) {
      setCustomUrl(params.url);
    }
  }, []);
  return (
    <>
      <iframe
        src={customUrl}
        width="100%"
        height="100%"
        title="Example"
      ></iframe>
    </>
  );
};

export default IframeView;
