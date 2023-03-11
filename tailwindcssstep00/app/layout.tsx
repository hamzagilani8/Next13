import './globals.css';
import NavBar from "@/components/navBar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <div>
      <NavBar/>
      </div>
        {children}
      </body>
    </html>
  );
}