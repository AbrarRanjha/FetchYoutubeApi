import React, { useState, useEffect } from "react";

const finalURL = `https://www.googleapis.com/youtube/v3/videos?&chart=mostPopular&key=AIzaSyAYU4OzuVfVHt0WGQfOxvgmQeJfGFsJxcw&maxResults=200`;

const Recommended = () => {
  const [state, setState] = useState({ resultyt: [] });
  const memoizedHandleClick = () => {
    fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        const resultyt = responseJson.items.map(
          (obj) => "https://www.youtube.com/embed/" + obj.id
        );
        setState({ resultyt });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    memoizedHandleClick();
  }, []);
  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10" style={{ marginLeft: "1%" }}>
            <br />
            <br />
            <br />
            <br />

            {state.resultyt.map((links, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="card  col-md-3 col-10"
                    style={{ width: "26rem", height: "300hv", float: "left" }}
                  >
                    <iframe src={links} alt="..." />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
