import { NextResponse } from "next/server";
import connectDB from "../../db";
import Author from "../../models/Author";

// Get all author
export const GET = async (req) => {
  try {
    await connectDB();

    const author = await Author.find();

    return new NextResponse(JSON.stringify(author), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching author: " + error.message, { status: 500 });
  }
};
