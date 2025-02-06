import Ticket from "../{models}/Ticket";
import { NextResponse } from "next/server";

export async function GET(req, res) { }
export async function POST(req, res) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);
    return NextResponse.json(
      { message: "ticket created", error },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating ticket", error },
      { status: 500 }
    );
  }
}