import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import Topbar from "@/components/shared/TopBar";
import LeftSideBar from "@/components/shared/LeftSidebar";
import RightSideBar from "@/components/shared/RightSideBar";
import BottomBar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });
export const metaData = {
  title: 'Threads',
  description: 'A next js 13 Meta Threads application' 
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
      <body className={inter.className}>
        <Topbar />

        <main className="flex flex-row">
          <LeftSideBar />

            <section className=" main-container">
              <div className="w-full max-w-4xl">
                  {children}
              </div>
            </section>

          <RightSideBar />
        </main>

        <BottomBar />
        </body>
      </ClerkProvider>
    </html>
  );
}
