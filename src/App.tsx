import React from "react";

import { Nav, Footer, SideBar } from "./Modules/Shared";
import { useMediaQuery } from "./Hooks/";

import styled from "styled-components/macro";
import { AppRoutes } from "./Routing/AppRoutes";

function App() {
  const isMobile = useMediaQuery("(max-width: 500px)");

  return (
    <StyledApp>
      {isMobile ? <SideBar /> : <Nav />}
      <AppRoutes />
      <Footer />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
