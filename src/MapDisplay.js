import React, { useEffect, useRef } from "react";
import "./map.css";

const MapDisplay = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return; // prevent duplicate initialization
    initialized.current = true;

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadAll = async () => {
      try {
        await loadScript("/raphael.min.js");
        await loadScript("/settings.js");
        await loadScript("/paths.js");
        await loadScript("/map.js");

        if (window.FlaMap && window.map_cfg) {
          const map = new window.FlaMap(window.map_cfg);
          map.drawOnDomReady("map-container");
        }
      } catch (err) {
        console.error("Script load error:", err);
      }
    };

    loadAll();
  }, []);

  return (
    <>
      <div
        id="map-wrapper"
        style={{
          width: "100%",
          maxWidth: "900px", // limit size
          margin: "0 auto", // center it
        }}
      >
        <div
          id="map-container"
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "16 / 9", // keeps proportions
          }}
        />
      </div>
    </>
  );
};

export default MapDisplay;
