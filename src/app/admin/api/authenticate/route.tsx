import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

interface SignInDTO {
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  const body: SignInDTO = await request.json();

  try {
    const { email, password } = body;
    if (!email || !password) {
      return NextResponse.json({ message: "Bad Request" }, { status: 400 });
    }

    const credentials = `${email}:${password}`;
    const base64Credentials = Buffer.from(credentials).toString("base64");

    if (base64Credentials === process.env.LOGIN_SECRET) {
      const token = jwt.sign({ email, password }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      return NextResponse.json(
        { token, message: "Authentication successfully" },
        { status: 200 },
      );
    }
    return NextResponse.json(
      { error: "Invalid username or password" },
      { status: 401 },
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  const authorizationHeader = request.headers.get("Authorization");
  const token = authorizationHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "No token provided" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { email, password } = decoded;
    const credentials = `${email}:${password}`;
    const base64Credentials = Buffer.from(credentials).toString("base64");

    if (base64Credentials === process.env.LOGIN_SECRET) {
      return NextResponse.json(
        { isValid: true, message: "Protected data accessed" },
        { status: 200 },
      );
    }
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 },
    );
  }
}
