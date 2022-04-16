import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./config/i18n";
const rootElement = document.getElementById("root") as HTMLElement;
createRoot(rootElement).render(<App />);
