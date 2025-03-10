import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Acme Dashboard</title>
        <meta name="description" content="A simple and efficient dashboard" />
        <link rel="icon" href="/icon.jpg" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}





// import { Metadata } from "next";
// import "@/app/ui/global.css";
// import { inter } from "./ui/fonts";

// export const metadata: Metadata = {
//   title: "Acme Dashboard",
//   description: "A simple and efficient dashboard",
//   icons: {
//     icon: "/icon.jpg",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} antialiased`}>{children}</body>
//     </html>
//   );
// }
