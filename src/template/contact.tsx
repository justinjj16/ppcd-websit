import { ContactEmailTemplateProps } from "@/types/contact";

export const ContactEmailTemplate = ({
  name,
  email,
  message,
}: ContactEmailTemplateProps) => `<html>
  <head>
    <meta charSet='utf-8' />
    <title></title>
  </head>
  <style>

  </style>
  <body style={{ backgroundColor: "#f7f5fa", margin: '0 !important', padding: '0 !important' }}>
  <div>
  <p>FullName: ${name}</p>
  </div>
    <div>
    <p>Email: ${email}</p>
    </div>
    <div>
    <p>Message: ${message}</p>
    </div>
  </body>
</html>`;
