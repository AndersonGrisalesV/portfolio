import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

const Mascot = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById("canvas3d");

    console.log(canvas);
    const app = new Application(canvas);
    app.load("https://draft.spline.design/U1OK0qVsVJRUDLr0/scene.splinecode");

    return () => {
      // Cleanup code, if needed
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas3d"
      style={{
        width: "100%",
        height: "105%",
      }}
    />
  );
};

export default Mascot;
