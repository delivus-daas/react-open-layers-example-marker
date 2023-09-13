import React from "react";
import marker from "./assets/marker.png";
import { OpenLayers, Layer } from "@delivus/react-open-layers";
import "./App.css";

const count = 50;
function App() {
  const features = new Array(count);
  const e = 4500000;
  for (let i = 0; i < count; ++i) {
    const coordinate = {
      latitude: Math.random() * (37 - 35 + 1) + 35,
      longitude: Math.random() * (129 - 126 + 1) + 126,
    };
    features[i] = {
      index: 1,
      coordinate,
      properties: { name: "Lotte city hotel" }, //can be any data
      iconOptions: {
        src: marker,
        scale: 0.3,
        color: "#6e6eff",
        anchorOrigin: "bottom-left",
      },
    };
  }

  return (
      <OpenLayers className={"map"}>
        <Layer features={features} />
      </OpenLayers>
  );
}

export default App;
