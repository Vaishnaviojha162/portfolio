import { NextResponse } from "next/server";

// Keep track of the pinger timer globally in memory
let isPingerRunning = false;

function startKeepAlivePinger() {
  if (isPingerRunning) return;
  isPingerRunning = true;

  // Render sleeps after 15 mins of inactivity. Ping every 10 mins (600,000 ms).
  const PING_INTERVAL = 10 * 60 * 1000; 

  setInterval(async () => {
    try {
      // Render automatically sets RENDER_EXTERNAL_URL when deployed
      const appUrl =
        process.env.RENDER_EXTERNAL_URL ||
        process.env.NEXT_PUBLIC_APP_URL ||
        "http://localhost:3000";

      const pingUrl = `${appUrl}/api/ping`;
      console.log(`[Render Keep-Alive] Pinging self at ${pingUrl} - ${new Date().toISOString()}`);

      const res = await fetch(pingUrl, {
        headers: { "User-Agent": "Render-KeepAlive-Bot/1.0" },
        cache: "no-store",
      });
      
      const data = await res.json();
      console.log(`[Render Keep-Alive] Response:`, data.status);
    } catch (err) {
      console.error(`[Render Keep-Alive] Self-ping failed:`, err.message);
    }
  }, PING_INTERVAL);

  console.log("[Render Keep-Alive] Background pinger initialized successfully.");
}

export async function GET() {
  // Ensure the background pinger is running whenever this route is accessed
  startKeepAlivePinger();

  return NextResponse.json({
    status: "active",
    service: "Render Anti-Sleep Service",
    uptime: `${Math.floor(process.uptime())} seconds`,
    timestamp: new Date().toISOString(),
    pingerActive: true,
  });
}
