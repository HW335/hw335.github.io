import * as React from "react"
import { Separator } from "@/components/ui/separator"



import "../globals.css";



import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"



import { FadeIn } from "@/components/animation/fade-in"



// font
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});




// footer
const footers: { title: string; href: string; links: { subtitle: string; href: string; target: string; }[];}[] = [
    {
        title: "About Us",
        href: "/about-us",
        links: [
            {
                subtitle: "News",
                href: "/about-us#news",
                target: "_self",
            },
            {
                subtitle: "Blog",
                href: "/about-us#blog",
                target: "_self",
            },
            {
                subtitle: "Member",
                href: "/about-us#member",
                target: "_self",
            },
            {
                subtitle: "Career",
                href: "/about-us#career",
                target: "_self",
            },
        ],
    },
    {
        title: "Research",
        href: "/research",
        links: [
            {
                subtitle: "Topic",
                href: "/research#topic",
                target: "_self",
            },
            {
                subtitle: "Publication",
                href: "/research#publication",
                target: "_self",
            },            
            {
                subtitle: "Open Source",
                href: "/research#open-source",
                target: "_self",
            },
            {
                subtitle: "Event",
                href: "/research#event",
                target: "_self",
            },
        ],
    },
    {
        title: "",
        href: "",
        links: [
        ],
    },
    {
        title: "MMLab",
        href: "/",
        links: [
            {
                subtitle: "@ HKU",
                href: "/#MMLab@HKU",
                target: "_self",
            },
            {
                subtitle: "@ CUHK",
                href: "/#MMLab@CUHK",
                target: "_self",
            },
            {
                subtitle: "@ NTU",
                href: "/#MMLab@NTU",
                target: "_self",
            },
        ],
    },
]



const icons: { link: string; icon: string; }[] = [
    {
        link: "https://x.com/",
        icon: '<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/></svg>',
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
                                <Link href="/" className="font-bold text-3xl select-none hover:text-amber-400">
                                    Multimedia Laboratory
                                </Link>
                            </div>
                        </div>
                        {/* full width */}
                        <div className="w-full pl-6 pr-6 flex justify-center 3xl:justify-evenly">
                            <div className="w-48 hidden 3xl:block overflow-hidden">
                                <div className="w-full mt-20 flex flex-col gap-3">
                                    <Link href="/" className="font-bold text-3xl select-none hover:text-amber-400">
                                        MMLab
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full max-w-7xl mt-20 grid gap-10 grid-cols-2 lg:grid-cols-4">
                                {footers.map((footer) => (
                                    <div key={footer.title} className="flex flex-col gap-3">
                                        <Link href={footer.href} className="font-bold text-xl mb-3 select-none hover:text-amber-400">
                                            {footer.title}
                                        </Link>
                                        {footer.links.map((f) => (
                                            <div key={f.subtitle}>
                                                <Link key={f.subtitle} href={f.href} target={f.target} className="hover:text-amber-400 select-none">
                                                    {f.subtitle}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className="w-48 hidden 3xl:block overflow-hidden">
                                <div className="w-full mt-20 flex flex-row flex-wrap gap-10 select-none">

                                    {/* to keep the same */}
                                    <Link href="https://x.com/" target="_blank" className="select-none hover:text-amber-400">
                                        <svg className="size-8 text-inherit" aria-hidden="true" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                                        </svg>
                                    </Link>
                                    <HoverCard>
                                        <HoverCardTrigger  className="select-none hover:text-amber-400 hover:cursor-pointer">
                                            <svg className="size-8 text-inherit" aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                                            </svg>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="border-0 w-fit">
                                            <Link href="mailto:xxx@hku.hk" target="_blank" className="select-none hover:text-amber-400">xxx@hku.hk</Link>
                                        </HoverCardContent>
                                    </HoverCard>

                                </div>
                            </div>
                        </div>
                        {/* --- */}
                        <div className="w-full pl-6 pr-6 flex flex-col items-center 3xl:hidden">
                            <div className="w-full max-w-7xl mt-20 flex gap-10 flex-wrap">

                                {/* to keep the same */}
                                <Link href="https://x.com/" target="_blank" className="select-none hover:text-amber-400">
                                    <svg className="size-8 text-inherit" aria-hidden="true" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                                    </svg>
                                </Link>
                                <HoverCard>
                                    <HoverCardTrigger  className="select-none hover:text-amber-400 hover:cursor-pointer">
                                        <svg className="size-8 text-inherit" aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                                        </svg>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="border-0 w-fit">
                                        <Link href="mailto:xxx@hku.hk" target="_blank" className="select-none hover:text-amber-400">xxx@hku.hk</Link>
                                    </HoverCardContent>
                                </HoverCard>

                            </div>
                        </div>
                        <div className="w-full pl-6 pr-6 flex flex-row justify-center mt-20">
                            <div className="max-w-7xl w-full flex flex-row justify-between">
                                <div className="flex-1 flex flex-col justify-start">
                                    <span className="select-none">
                                        MMLab © 2001 - 2025
                                    </span>
                                    <span className="select-none">
                                        All Rights Reserved
                                    </span>
                                    <div>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <span className="hover:text-amber-400 cursor-pointer select-none">Site Credits</span>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-3xl p-6 border-0">
                                                <DialogHeader className="p-3 text-left">
                                                    <DialogTitle>
                                                        Site Credits
                                                    </DialogTitle>
                                                    <div className="w-full flex flex-col">
                                                        <Separator className="mt-3"/>
                                                    </div>
                                                    <DialogDescription className="mt-3">
                                                        <span>
                                                            Thanks to the following site developers and all lab members for contributions.
                                                        </span>
                                                            <li className="mt-3 space-y-3 list-outside list-disc">
                                                                <Link href="https://faikit.github.io/" target="_blank" className="animated-underline">Huijie Wang</Link>
                                                            </li>
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </FadeIn>
                


            </body>
        </html>
    );
}
