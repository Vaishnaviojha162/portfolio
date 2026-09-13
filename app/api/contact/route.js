import { NextResponse } from "next/server";
import redis from "@/lib/redis";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const submission = {
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    };

    if (redis && redis.status === "ready") {
      // Store in Redis list 'portfolio:contact_messages'
      await redis.lpush("portfolio:contact_messages", JSON.stringify(submission));
      console.log("[Redis] Saved contact message from:", email);
    } else {
      console.log("[Contact Form] Received message:", submission);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received and stored.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process message." },
      { status: 500 }
    );
  }
}
