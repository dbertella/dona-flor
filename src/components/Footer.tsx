import React, { useState } from "react";
import { setConfig } from "react-hot-loader";

setConfig({ pureSFC: true });

const Footer = () => {
  const [height, setHeight] = useState(80);
  const isCollapsed = height === 80;
  const setIframeHeight = () => (isCollapsed ? setHeight(400) : setHeight(80));
  return (
    <footer className="is-flex" style={{ height }}>
      <iframe
        src="https://open.spotify.com/embed/album/1wk3KaZ3DZK8txcY8ZCSJ5"
        width="100%"
        height={height}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <button
        className="has-text-dark has-background-black button-playlist"
        onClick={setIframeHeight}
      >
        {isCollapsed ? "More" : "Hide"}
      </button>
    </footer>
  );
};
export default Footer;
