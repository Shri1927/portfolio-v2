import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: { locale: string } }
) {
  try {
    const filePath = path.join(process.cwd(), "blog", "typescript-tutor (2).html");
    const fileContent = fs.readFileSync(filePath, "utf8");
    return new Response(fileContent, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Error loading TypeScript Tutor HTML:", error);
    return new Response("Error loading tutorial", { status: 500 });
  }
}
