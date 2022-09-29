import React from "react";
import ReactThreeFbxViewer from "react-three-fbx-viewer";

const LoadFBX = () => {
  let cameraPosition = { x: 100, y: 300, z: 600 };
  return (
    <div>
      <ReactThreeFbxViewer
        cameraPosition={cameraPosition}
        url={"https://storage.googleapis.com/xyz.fbx"}
        x="500"
        y="800"
      />
    </div>
  );
}
export default LoadFBX;
