import type { Metadata } from "next";
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"



import "./globals.css";



import { FadeIn } from "@/components/animation/fade-in"



// font
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});



// icon
export const metadata: Metadata = {
    icons: {
        icon: [
            {
                url: "/logos/jc_stem_lab.png",
                href: "/logos/jc_stem_lab.png",
            },
        ],
    },
};



// header
const headers: { title: string; href: string;}[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Team",
        href: "/team",
    },
    {
        title: "404",
        href: "/404",
    },
]



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.className}>
            <body id="#">



                <header>
                    <ul className="fixed flex flex-row gap-3 m-6 z-20">
                        {headers.map((header) => (
                            <Button asChild key={header.title} className="bg-white text-soft-black hover:bg-amber-400">
                                <Link href={header.href} className="select-none">{header.title}</Link>
                            </Button>
                        ))}
                    </ul>
                    <div className="fixed right-0 bottom-0 m-6 z-20">
                        <a href="#" className="text-soft-black bg-white hover:bg-amber-400 rounded-full flex justify-center items-center p-2 select-none">
                            <span>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </header>



                {children}



                <FadeIn>
                    <div className="w-full pl-6 pr-6 flex flex-col items-center">
                        <Separator className="max-w-7xl mt-20"/>
                    </div>
                </FadeIn>

                

                <footer>

                </footer>
                


            </body>
        </html>
    );
}
