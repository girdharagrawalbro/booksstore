import { NextResponse } from "next/server";
import connectDB from "../../db";
import Contact from "../../models/Contact";

// Get all contact
export const GET = async (req) => {
  try {
    await connectDB();

    const contact = await Contact.find();

    return new NextResponse(JSON.stringify(contact), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching contact: " + error.message, { status: 500 });
  }
};
