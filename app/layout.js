import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-switcher";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareerCraft AI",
  description:
    "CareerCraft AI – Create professional resumes, tailored cover letters, prepare for interviews, and explore the latest job trends using AI.",
  authors: [{ name: "Shivam Singh", url: "https://github.com/DevShivaa321" }],
  keywords: [
    "AI resume builder",
    "AI cover letter generator",
    "Career assistant",
    "Interview preparation",
    "Job market trends",
    "CareerCraft AI",
  ],
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" width={130} height={120} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Shivam Singh" />
          <meta
            name="description"
            content="CareerCraft AI – Create professional resumes, tailored cover letters, prepare for interviews, and explore the latest job trends using AI."
          />
        </head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>© 2025 CareerCraft AI | Crafted by Shivam Singh</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
