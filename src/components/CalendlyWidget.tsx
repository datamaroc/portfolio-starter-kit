// src/components/CalendlyWidget.tsx
import React, { useEffect } from "react";
import { user } from "@/data/user";

const CalendlyWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      const allScripts = document.getElementsByTagName("script");
      for (let i = 0; i < allScripts.length; i++) {
        if (allScripts[i].src === script.src) {
          allScripts[i].parentNode?.removeChild(allScripts[i]);
          break;
        }
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={user.calendly}
      style={{ minWidth: "320px", height: "100%", minHeight: "650px" }}
    ></div>
  );
};

export default CalendlyWidget;
