import { NextResponse } from "next/server";
import connectDB from "../../db";
import Book from "../../models/Book";

// Get all books
export const GET = async (req) => {
  try {
    await connectDB();

    const books = await Book.find();

    return new NextResponse(JSON.stringify(books), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching books: " + error.message, { status: 500 });
  }
};
