import { NextRequest, NextResponse } from "next/server";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { storage } from "~~/services/firebase";
import prisma from "~~/services/prisma";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;
  const title: string = data.get("title") as unknown as string;
  const description: string = data.get("description") as unknown as string;

  try {
    if (!file || !title || !description) {
      return NextResponse.json(
        { error: "Missing variables in request", success: false },
        { status: 500, statusText: "Error in the server, check the console" },
      );
    }

    console.log(path.extname(file.name));
    const videoRef = ref(storage, `videos/${uuidv4()}${path.extname(file.name)}`);

    const snapshot = await uploadBytes(videoRef, file);
    const videoMediaUrl = await getDownloadURL(snapshot.ref);

    const post = await prisma.gmPost.create({
      data: {
        title,
        content: description,
        mediaUrl: videoMediaUrl,
      },
    });
    return NextResponse.json({ post, message: "Post was created successfully", success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong", success: false },
      { status: 500, statusText: "Error in the server, check the console" },
    );
  }
}
