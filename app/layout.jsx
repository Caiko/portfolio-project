import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/NavBar";
import "@/styles/globals.scss";

export const metadata = {
  title: "Marin Nikolov",
  description:
    "Showcasing Marin Nikolov's Portfolio: projects, skills, and experience in web development.",
  keywords: [
    "Marin Nikolov",
    "Portfolio",
    "Software Developer",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Digital Transformation",
    "Business Strategy",
    "Supply Chain Optimization",
    "Process Automation",
    "SAP ERP",
    "Power BI",
    "Excel",
    "Notion",
    "Jira",
    "SSMS",
    "C#",
    "Node.js",
    "Express.js",
    "HTML",
    "CSS",
    "SASS",
    "SCSS",
    "NestJS",
    ".NET",
    "SQL",
    "Tailwind CSS",
    "GitHub",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Vite",
    "Visual Studio Code",
    "Cloud Computing",
    "VPNs",
    "Cybersecurity",
    "Server Management",
    "Linux Administration",
    "Networking Tools",
    "Terraform",
    "Ansible",
    "pfSense",
    "Proxmox",
    "WireGuard",
    "Tailscale",
  ],
  authors: [{ name: "Marin Nikolov", url: "https://marinnikolov.com/" }],
  creator: "Marin Nikolov",
  publisher: "Marin Nikolov",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Marin Nikolov</title>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
