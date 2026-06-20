import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Headers from "@/components/Headers";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

export const metadata = {
  title: "Spott",
  description: "Creative and Amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider appearance={{ baseTheme: "dark" }}>
            <ConvexClientProvider>
              {/* Header */}
              <Headers />
              {/* glow effect */}

              <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
              </div>
              <main className="relative min-h-screen container mx-auto pt-40 md:pt-32">
                {children}
                {/* Footer */}

                <div className=" fixed bottom-0 left-0 right-0">
                  <div>THIS IS THE Footer</div>
                </div>
              </main>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
