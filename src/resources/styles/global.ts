import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.family};
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors?.background};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

h1, h2, h3, h4{
  margin: 0;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  background: #005288;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #0c649e;
}

::-webkit-scrollbar-track {
  background: #a7a9ac;
  border-radius: 5px;
  box-shadow: inset 7px 10px 12px #f0f0f0;
}
`;
