import * as React from "react"
import Image from 'next/image'



import "../globals.css";



import { FadeIn } from "@/components/animation/fade-in"



// font
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});




// footer
const footers: { title: string; links: { subtitle: string; href: string; target: string; }[];}[] = [
    {
        title: "Research",
        links: [
            {
                subtitle: "Embodied AI",
                href: "/research#embodied",
                target: "_self",
            },
            {
                subtitle: "Autonomous Driving",
                href: "/research#ad",
                target: "_self",
            },
        ],
    },
    {
        title: "Publication",
        links: [
            {
                subtitle: "Selected Works",
                href: "/publication#selected",
                target: "_self",
            },
            {
                subtitle: "Gallery",
                href: "/publication#gallery",
                target: "_self",
            },
        ],
    },
    {
        title: "Team",
        links: [
            {
                subtitle: "Team",
                href: "/team",
                target: "_self",
            },
        ],
    },
    {
        title: "MMLab",
        links: [
            {
                subtitle: "@ HKU",
                href: "/",
                target: "_self",
            },
            {
                subtitle: "@ CUHK",
                href: "https://mmlab.ie.cuhk.edu.hk/",
                target: "_blank",
            },
            {
                subtitle: "@ NTU",
                href: "https://www.mmlab-ntu.com/",
                target: "_blank",
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



                {children}



                <FadeIn>
                    <footer className="w-full mb-20 flex flex-col gab-10">
                        <div className="w-full pl-6 pr-6 flex flex-col items-center 3xl:hidden">
                            <div className="w-full max-w-7xl mt-20 flex gap-10 items-center">
                                <span className="font-bold text-4xl">
                                    MMLab | Multimedia Laboratory
                                </span>
                            </div>
                        </div>
                        {/* full width */}
                        <div className="w-full pl-6 pr-6 flex justify-center 3xl:justify-evenly">
                            <div className="w-48 hidden 3xl:block overflow-hidden">
                                <div className="w-full max-w-7xl mt-20 flex flex-col gap-3">
                                    <span className="font-bold text-4xl">
                                        MMLab
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
                                            <div key={f.subtitle}>
                                                <a key={f.subtitle} href={f.href} target={f.target} className="hover:underline">
                                                    {f.subtitle}
                                                </a>
                                            </div>
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
