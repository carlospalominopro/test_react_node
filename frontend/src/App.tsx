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
      <footer className="footer mt-auto py-3 bg-light footerMod">
        <div className="container text-center">
          <span className="text-muted">
            COPYRIGHT - BY CARLOS PALOMINO - VERTRICAL CODING CHALLENGE
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
