import React from "react";
import ContentLoader from "react-content-loader";
import Paper from "@material-ui/core/Paper";

export const CardLoader = () => (
  <Paper style={{ marginTop: 4 }}>
    <ContentLoader
      speed={1}
      width="100%"
      height={"18vh"}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="10" y="10" rx="4" ry="4" width="500" height="20" />
      <rect x="10" y="60" rx="3" ry="3" width="100" height="40" />
    </ContentLoader>
  </Paper>
);

export const TaskListLoader = () => (
  <Paper style={{ marginTop: 80 }}>
    <ContentLoader
      speed={1}
      width="100%"
      height={"30vh"}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x={`0.8%`} y="15" rx="4" ry="4" width="16%" height="20" />
      <rect x={`85%`} y="15" rx="4" ry="4" width="100" height="20" />
      <rect x={`96%`} y="15" rx="4" ry="4" width="50" height="20" />

      {[...Array(4).keys()].map((number) => (
        <>
          <rect
            x={`0.8%`}
            y={70 + 50 * number}
            rx="4"
            ry="4"
            width="30"
            height="20"
          />
          <rect
            x={`5%`}
            y={70 + 50 * number}
            rx="4"
            ry="4"
            width="70%"
            height="20"
          />
          <rect
            x={`85%`}
            y={70 + 50 * number}
            rx="4"
            ry="4"
            width="50"
            height="20"
          />
          <rect
            x={`96%`}
            y={70 + 50 * number}
            rx="4"
            ry="4"
            width="50"
            height="20"
          />
        </>
      ))}
    </ContentLoader>
  </Paper>
);
