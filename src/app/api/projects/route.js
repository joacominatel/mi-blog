import { NextResponse } from "next/server";
import dbConnect from "../../lib/dbConnect";
import projectModel from "../../models/projectModel";
import upload from "@/app/middleware/uploadFile";

export async function GET() {
    await dbConnect();
    
    const projects = await projectModel.find();
    return NextResponse.json(projects);
}

export async function POST(request) {
    await dbConnect();

    const data = await request.json();

    // Apply middleware on imageUrl post
    const imageUrl = await upload.single(data.imageUrl);

    const project = await projectModel.create({ ...data, imageUrl });
    return NextResponse.json(project);
}