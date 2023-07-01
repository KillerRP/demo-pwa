import React, { useEffect, useState } from "react";
import { getUrl, showToast } from "../helpers/utils";
import { defaultUrl } from "../helpers/constant";

const IframeView = () => {
  const [customUrl, setCustomUrl] = useState(getUrl());

  useEffect(() => {
    if (!customUrl) {
      setCustomUrl(defaultUrl);
    }
  }, [customUrl]);
  return (
    <>
      <iframe
        src={customUrl}
        width="100%"
        height="100%"
        title="Custom Url"
        onErrorCapture={() => {
          console.log("ERROR");
          showToast("This url is not working", "error");
        }}
      />
    </>
  );
};

export default IframeView;
