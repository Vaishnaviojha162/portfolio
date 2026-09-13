"use client";

import { useEffect } from "react";

export default function KeepAlive() {
  useEffect(() => {
    // Initial ping on mount to wake up and initialize server background pinger
    const pingServer = async () => {
      try {
        await fetch("/api/ping", { cache: "no-store" });
      } catch (e) {
        console.error("KeepAlive ping error:", e);
      }
    };

    pingServer();

    // Ping every 10 minutes from client while page is open
    const interval = setInterval(pingServer, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
