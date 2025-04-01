import Navbar from "@/components/Navbar/NavBar";
import "@/styles/globals.scss";
import { AppProvider } from "@/context/AppContext";

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
        <AppProvider>
          <Navbar />
          <main>{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
