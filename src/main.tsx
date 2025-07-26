import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

// Inject Vercel Analytics
inject();

// Inject Vercel Speed Insights
injectSpeedInsights();

createRoot(document.getElementById("root")!).render(<App />);
