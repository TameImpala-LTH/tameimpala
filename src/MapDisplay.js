import React, { useEffect } from "react";
import "./map.css"; // adjust path if needed

const MapDisplay = () => {
  useEffect(() => {
    // Load external scripts dynamically
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

    // Load scripts in correct order
    const loadAll = async () => {
      try {
        await loadScript("/raphael.min.js");
        await loadScript("/settings.js");
        await loadScript("/paths.js");
        await loadScript("/map.js");

        // Ensure FlaMap is available
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

  return <div id="map-container" style={{ width: "100%", height: "600px" }} />;
};

export default MapDisplay;
