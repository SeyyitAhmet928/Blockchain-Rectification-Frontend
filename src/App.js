import React from "react";
import Num_6 from "./page/Num_6";
import bg from "./assets/img/background.png";

function App() {
  return (
    <div
      id="page_content"
      style={{
        backgroundImage: `url(${bg})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Num_6 />
      {/* <Num_2 /> */}
      {/* <Num_12/> */}
      {/* <Num_9 /> */}
      {/* <Num_16/> */}
      {/* <Num_17 /> */}
    </div>
  );
}

export default App;
