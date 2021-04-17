import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Routes from "./Routes";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #414141;
}
body {
  font-family: "Nanum Gothic", sans-serif;
  line-height: 1;
}
input {
  background: transparent;
  border: 0;
  outline: 0;
}
button {
  background: 0;
  padding: 0;
  border: 0;
  outline: 0;
  cursor: pointer;
}
ul,
li {
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
`;

const theme = {
  themeColor: "#575757",
  basicColor: "#f4f4f2",
  navfooColor: "#2c2a29",
  navfontColor: "#669900",
};

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
