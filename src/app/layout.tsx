import { Inter } from "next/font/google";
import "../styles/index.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}