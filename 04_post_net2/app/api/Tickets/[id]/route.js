import Ticket from "@/app/{models}/Ticket";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundTicket = await Ticket.findOne({ _id: id });
    return NextResponse.json(
      { foundTicket },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error getting ticket", error },
      { status: 500 }
    );
  }
}


export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Ticket Deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error delete ticket", error },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;
    const updatedTicket = await Ticket.findByIdAndUpdate(id, ticketData);

    return NextResponse.json(
      { message: "Ticket Update" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error update ticket", error },
      { status: 500 }
    );
  }
}

