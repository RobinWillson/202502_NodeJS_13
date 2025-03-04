import SvrPost from "@/app/{models}/PostModel";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const svrPosts = await SvrPost.find();
    console.log("svrPosts :", svrPosts); // Debugging log
    return NextResponse.json({ svrPosts }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error get posts", error },
      { status: 500 }
    );
  }
}
export async function POST(req, res) {
  try {
    const body = await req.json();
    const postData = body.formData;
    await SvrPost.create(postData);
    return NextResponse.json(
      { message: "post created", error },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating post", error },
      { status: 500 }
    );
  }
}