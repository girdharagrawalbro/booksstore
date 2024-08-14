import { NextResponse } from "next/server";
import connectDB from "../../db";
import Category from "../../models/Category";

// Get all category
export const GET = async (req) => {
  try {
    await connectDB();

    const category = await Category.find();

    return new NextResponse(JSON.stringify(category), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching category: " + error.message, { status: 500 });
  }
};
