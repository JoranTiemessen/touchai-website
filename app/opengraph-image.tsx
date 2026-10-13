import { ImageResponse } from "next/og";

export const alt = "Touch AI Agency: AI-agents voor het MKB";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#0B1220",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 34, color: "#6EADD4", letterSpacing: 2, display: "flex" }}>TOUCH AI AGENCY</div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, marginTop: 28, display: "flex" }}>
          Focus op het echte werk.
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, color: "#6EADD4", display: "flex" }}>
          Het terugkerende doen wij.
        </div>
        <div style={{ fontSize: 34, color: "#9AA5B8", marginTop: 36, display: "flex" }}>AI-agents voor het MKB</div>
      </div>
    ),
    size
  );
}
