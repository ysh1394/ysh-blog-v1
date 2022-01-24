import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import PropTypes from "prop-types";

const Preview = (prop) => {
  const {
    value: { url },
  } = prop;
  const id = getYouTubeId(url);
  return <YouTube videoId={id} />;
};

Preview.propsTypes = {
  value: {
    url: PropTypes.string,
  },
};

export default {
  name: "youtube",
  type: "object",
  title: "YouTube",
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: Preview,
  },
};
