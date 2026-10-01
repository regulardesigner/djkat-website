import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Header from "@layouts/Header.tsx";
import Footer from "@layouts/Footer.tsx";
import NotificationProvider from "@components/NotificationProvider.tsx";

// TODO: Check if Bulma the right choice for this project?
// Import Bulma CSS for quick prototyping
import "@styles/index.css";
import "bulma/css/bulma.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotificationProvider>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <App />
      <Footer />
    </NotificationProvider>
  </StrictMode>,
);
