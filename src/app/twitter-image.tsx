import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F0F0F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 80,
            color: "#34D399",
            fontSize: 24,
            letterSpacing: "0.05em",
          }}
        >
          portfolio
        </div>

        <div
          style={{
            color: "#F5F5F5",
            fontSize: 64,
            fontWeight: "bold",
            lineHeight: 1.1,
            marginTop: 40,
          }}
        >
          Muhammad Ammar Zia
        </div>

        <div
          style={{
            color: "#A3A3A3",
            fontSize: 28,
            marginTop: 20,
          }}
        >
          Full Stack Developer &amp; Agentic AI Engineer
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#737373", fontSize: 20 }}>
            ammarzia.vercel.app
          </span>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#34D399",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
