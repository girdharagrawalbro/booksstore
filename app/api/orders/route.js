import { NextResponse } from "next/server";
import connectDB from "../../db";
import Orders from "../../models/Orders";

// Get all orders
export const GET = async (req) => {
  try {
    await connectDB();
    const orders = await Orders.find();

    return new NextResponse(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching orders: " + error.message, { status: 500 });
  }
};
