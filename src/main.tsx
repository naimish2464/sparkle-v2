import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { initPageScrollGuards } from "./utils/ensurePageScrollable";

initPageScrollGuards();

createRoot(document.getElementById("root")!).render(<App />);  