import type { Metadata } from "next";
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'



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



// footer
const footers: { title: string; links: { subtitle: string; href: string; }[];}[] = [
    {
        title: "About",
        links: [
            {
                subtitle: "Team",
                href: "/team",
            },
            {
                subtitle: "Team",
                href: "/team",
            },
            {
                subtitle: "Team",
                href: "/team",
            },
        ],
    },
    {
        title: "About",
        links: [
            {
                subtitle: "Team",
                href: "/team",
            },
            {
                subtitle: "Team",
                href: "/team",
            },
        ],
    },
    {
        title: "About",
        links: [
            {
                subtitle: "Team",
                href: "/team",
            },
            {
                subtitle: "Team",
                href: "/team",
            },
            {
                subtitle: "Team",
                href: "/team",
            },
        ],
    },
    {
        title: "About",
        links: [
            {
                subtitle: "Team",
                href: "/team",
            },
        ],
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

             

                <div className="w-full pl-6 pr-6 flex flex-col items-center">
                    <Separator className="max-w-7xl mt-20"/>
                </div>



                <FadeIn>
                    <footer className="w-full mb-20 flex flex-col gab-10">
                        <div className="w-full pl-6 pr-6 flex flex-col items-center 3xl:hidden">
                            <div className="w-full max-w-7xl mt-20 flex gap-10 items-center">
                                <div>
                                    <Image src="/logos/jc_stem_lab.png" width={50} height={50} alt="logo"/>
                                </div>
                                <span className="font-bold text-4xl">
                                    JC STEM LAB
                                </span>
                            </div>
                        </div>
                        {/* full width */}
                        <div className="w-full pl-6 pr-6 flex justify-center 3xl:justify-evenly">
                            <div className="w-48 hidden 3xl:block overflow-hidden">
                                <div className="w-full max-w-7xl mt-20 flex flex-col gap-3">
                                    <div>
                                        <Image src="/logos/jc_stem_lab.png" width={80} height={80} alt="logo"/>
                                    </div>
                                    <span className="font-bold text-4xl">
                                        JC STEM LAB
                                    </span>
                                </div>
                            </div>
                            <div className="w-full max-w-7xl mt-20 grid gap-10 grid-cols-2 lg:grid-cols-4">
                                {footers.map((footer) => (
                                    <div key={footer.title} className="flex flex-col gap-3">
                                        <h3 className="font-bold text-xl mb-3">
                                            {footer.title}
                                        </h3>
                                        {footer.links.map((f) => (
                                            <a key={f.subtitle} href={f.href} className="hover:underline">
                                                {f.subtitle}
                                            </a>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className="w-48 hidden 3xl:block overflow-hidden"></div>
                        </div>
                        {/* --- */}
                        <div className="w-full pl-6 pr-6 flex flex-col items-center">
                            <div className="w-full max-w-7xl mt-20 flex items-center">
                                <span className="select-none">
                                    © 2025 All Rights Reserved
                                </span>
                            </div>
                        </div>
                    </footer>
                </FadeIn>
                


            </body>
        </html>
    );
}
