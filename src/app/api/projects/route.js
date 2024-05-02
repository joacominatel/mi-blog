import { NextResponse } from "next/server";
import dbConnect from "../../lib/dbConnect";
import projectModel from "../../models/projectModel";

export async function GET() {
    await dbConnect();
    
    const projects = await projectModel.find();
    return NextResponse.json(projects);
}

export async function POST(request) {
    await dbConnect();

    const data = await request.json();

    const project = await projectModel.create(data);
    return NextResponse.json(project);
}