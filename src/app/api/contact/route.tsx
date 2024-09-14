import { mailOptions, transpoter } from "@/app/config/nodemailer.config";
import { NextRequest, NextResponse } from "next/server";
import { ContactEmailTemplate } from "@/template/contact";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  try {
    await transpoter.sendMail({
      ...mailOptions,
      subject: "Contact Me From PPCD Website",
      html: ContactEmailTemplate(body),
    });
    return NextResponse.json({ sucess: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
