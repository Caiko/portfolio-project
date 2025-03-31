import Navbar from "@/components/Navbar/NavBar";
import "@/styles/globals.scss";

export const metadata = {
  title: "Marin Nikolov",
  description: "Built with Next.js 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
