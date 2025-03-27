import Navbar from "@/components/Navbar/NavBar";
import "../styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body className="bg-black">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
