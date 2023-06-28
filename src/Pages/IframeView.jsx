import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const IframeView = () => {
  const [searchParams] = useSearchParams();
  const [customUrl, setCustomUrl] = useState("https://oceanwp.org/demos/");
  useEffect(() => {
    if (searchParams && searchParams.get("url")) {
      setCustomUrl(searchParams.get("url"));
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
