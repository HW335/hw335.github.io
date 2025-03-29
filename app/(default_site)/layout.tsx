import * as React from "react"
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"



import "../globals.css";



import { FadeIn } from "@/components/animation/fade-in"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



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
                                <span className="font-bold text-4xl select-none">
                                    MMLab | Multimedia Laboratory
                                </span>
                            </div>
                        </div>
                        {/* full width */}
                        <div className="w-full pl-6 pr-6 flex justify-center 3xl:justify-evenly">
                            <div className="w-48 hidden 3xl:block overflow-hidden">
                                <div className="w-full max-w-7xl mt-20 flex flex-col gap-3">
                                    <span className="font-bold text-4xl select-none">
                                        MMLab
                                    </span>
                                </div>
                            </div>
                            <div className="w-full max-w-7xl mt-20 grid gap-10 grid-cols-2 lg:grid-cols-4">
                                {footers.map((footer) => (
                                    <div key={footer.title} className="flex flex-col gap-3">
                                        <h3 className="font-bold text-xl mb-3 select-none">
                                            {footer.title}
                                        </h3>
                                        {footer.links.map((f) => (
                                            <div key={f.subtitle}>
                                                <a key={f.subtitle} href={f.href} target={f.target} className="hover:underline select-none">
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
                        <div className="w-full pl-6 pr-6 flex flex-row justify-center mt-20">
                            <div className="max-w-7xl w-full flex flex-row justify-between">
                                <div className="flex-1 flex flex-col justify-start">
                                    <span className="select-none">
                                        MMLab © 2001 - 2025
                                    </span>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <span className="hover:underline cursor-pointer select-none">Site Credits</span>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-3xl p-6">
                                            <DialogHeader className="p-3">
                                                <DialogTitle>
                                                    Site Credits
                                                </DialogTitle>
                                                <div className="w-full flex flex-col items-center">
                                                    <Separator className="mt-3"/>
                                                </div>
                                                <DialogDescription className="mt-3">
                                                    <span>
                                                        Thanks to the following site developers and all lab members for contributions.
                                                    </span>
                                                    <ul className="mt-3 ml-6 space-y-3 list-outside list-disc">
                                                        <li><a href="https://faikit.github.io/" target="_blank" className="hover:underline">Huijie Wang</a></li>
                                                    </ul>
                                                </DialogDescription>
                                            </DialogHeader>
                                            {/* <DialogFooter className="sm:justify-start">
                                            <DialogClose asChild>
                                                <Button type="button" variant="secondary">
                                                Close
                                                </Button>
                                            </DialogClose>
                                            </DialogFooter> */}
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </div>
                    </footer>
                </FadeIn>
                


            </body>
        </html>
    );
}
