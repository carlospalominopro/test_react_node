import * as React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <main className="flex-shrink-0">
        <Container>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;
