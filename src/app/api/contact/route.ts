// require("dotenv").config();
import { Helpers } from "../../../../Helpers";
import { createHTMLToSend } from "../../../../Helpers/mail";

import { replacements } from "../../../../Helpers/types";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(req: NextRequest, res: NextResponse) {
  const { fullName, email, phone, message, choise } = await req.json();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
    secure: true,
  });
  const emailPath = path.resolve(
    "src/app/api/contact/Email-template",
    "mail.html"
  );
  const replacements: replacements = {
    name: fullName,
    message,
    phone,
    email,
    greeting: Helpers.setGreeting(),
    service: choise,
  };
  let htmlToSend = createHTMLToSend(emailPath, replacements);
  let mailData = {
    from: "Portfolio Contact form",
    to: "mosesnwigberi@gmail.com",
    subject: `New message from ${fullName} in your Porfolio website Contact form`,
    html: htmlToSend,
    text: message + "| Sent from: " + email,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) {
        console.log("This is the error: " + err);
        reject("This is the error: " + err);
      } else {
        resolve(info);
        return NextResponse.json({ error: "All Done" }, { status: 200 });
      }
    });
  });
  return NextResponse.json({ error: "All Done" }, { status: 200 });
}
