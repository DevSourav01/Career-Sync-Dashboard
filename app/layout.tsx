import type { Metadata } from "next";
import {  Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cookies } from "next/headers";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "CareerSync",
  description: "CareerSync dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
<html lang="en" suppressHydrationWarning className={jakarta.variable}>
        <body className="font-sans antialiased">
        <ThemeProvider  attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
          <TooltipProvider>
            <SidebarProvider defaultOpen={defaultOpen}>
              <div className="flex min-h-screen w-full">
                <AppSidebar />

                <main className="flex-1">
                  <Navbar />
                  <div className="px-4 py-4">{children}</div>
                </main>
              </div>
            </SidebarProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}