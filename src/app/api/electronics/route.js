import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { Electronic } from "@/lib/model/electronic";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);

    data = await Electronic.find();
  } catch (error) {
    data = { success: false };
  }

  return NextResponse.json({ result: data, success: true });
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionStr); // Pass the connection string as a string
  // console.log("Connected to MongoDB");
  let electronic = new Electronic(payload);
  const result = await electronic.save(); // Save the document
  // console.log("Saved document to MongoDB");
  return NextResponse.json({ result, success: true });
}
