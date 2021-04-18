import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #414141;
}
body {
  font-family: 'Noto Sans KR', sans-serif;
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

export default GlobalStyle;
