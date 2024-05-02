import { NextResponse } from "next/server";
import dbConnect from "../../lib/dbConnect";
import Post from "../../models/postModel";

export async function GET() {
    await dbConnect();
    
    const posts = await Post.find();
    return NextResponse.json(posts);
}

export async function POST(request) {
    await dbConnect();

    const data = await request.json();

    const post = await Post.create(data);
    return NextResponse.json(post);
}