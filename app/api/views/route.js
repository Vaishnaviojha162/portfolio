import { NextResponse } from "next/server";
import redis from "@/lib/redis";

export async function GET() {
  try {
    if (redis && redis.status === "ready") {
      const views = await redis.incr("portfolio:page_views");
      return NextResponse.json({ views, source: "redis" });
    }
    
    // Fallback if Redis is connecting or offline
    return NextResponse.json({ views: 1280, source: "fallback" });
  } catch (error) {
    console.error("Redis view count error:", error);
    return NextResponse.json({ views: 1280, source: "fallback" });
  }
}
