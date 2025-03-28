import Navbar from "@/components/Navbar/NavBar";
import "../styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
