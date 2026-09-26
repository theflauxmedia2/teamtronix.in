import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Teamtronix India — Pure Power. Sure Power.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0A0A0A",
          color: "#FFFFFF",
          padding: "80px",
        }}
      >
        <div style={{ color: "#E31837", fontSize: 28, letterSpacing: 8 }}>TEAMTRONIX INDIA</div>
        <div style={{ fontSize: 84, lineHeight: 0.95, marginTop: 24, maxWidth: 900 }}>
          PURE POWER. SURE POWER.
        </div>
        <div style={{ fontSize: 28, marginTop: 28, color: "#CCCCCC" }}>
          UPS, solar, stabilizers and batteries since 1994
        </div>
      </div>
    ),
    { ...size },
  );
}
