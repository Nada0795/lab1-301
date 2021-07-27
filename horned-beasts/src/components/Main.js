import React from "react";
import HornedBeasts from "./HornedBeasts";
import data from "../data.json";

class Main extends React.Component {
  render() {
    return (
      <main>
        {data.map((elements) => {
          return (
            <HornedBeasts
              title={elements.title}
              image_url={elements.image_url}
              description={elements.description}
            />
          );
        })}
      </main>
    );
  }
}
export default Main;
