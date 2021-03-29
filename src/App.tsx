import React, { Suspense } from "react";

import { Nav, Footer } from "./Modules/Shared";

import styled from "styled-components/macro";
import { AppRoutes } from "./Routing/AppRoutes";

function App() {
  return (
    <StyledApp>
      <Suspense fallback={<p>Loading...</p>}>
        <Nav />
        <AppRoutes />
        <Footer />
      </Suspense>
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
