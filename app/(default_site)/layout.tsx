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
        title: "Research",
        href: "/research",
        links: [
            {
                subtitle: "Topic",
                href: "/research#topic",
                target: "_self",
            },
            {
                subtitle: "Project",
                href: "/project",
                target: "_self",
            },
            {
                subtitle: "Dataset [todo]",
                href: "/dataset",
                target: "_self",
            },
            {
                subtitle: "Publication",
                href: "/publication",
                target: "_self",
            },
            {
                subtitle: "Event [todo]",
                href: "/event",
                target: "_self",
            },
        ],
    },
    {
        title: "About [todo]",
        href: "/about",
        links: [
            {
                subtitle: "Vision [todo]",
                href: "/vision",
                target: "_self",
            },
            {
                subtitle: "News [todo]",
                href: "/news",
                target: "_self",
            },
            {
                subtitle: "Blog [todo]",
                href: "/blog",
                target: "_self",
            },
            {
                subtitle: "Member",
                href: "/member",
                target: "_self",
            },
            {
                subtitle: "Partners / investors? [todo]",
                href: "/partners",
                target: "_self",
            },
            {
                subtitle: "Join Us [todo]",
                href: "/career",
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
                                <div className="w-full mt-20 flex flex-row flex-wrap gap-6 select-none">

                                    {/* to keep the same */}
                                    <Link href="https://x.com/" target="_blank" className="select-none hover:text-amber-400">
                                        <svg className="size-8 text-inherit" aria-hidden="true" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                                        </svg>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        {/* --- */}
                        <div className="w-full pl-6 pr-6 flex flex-col items-center 3xl:hidden">
                            <div className="w-full max-w-7xl mt-20 flex gap-6 flex-wrap">

                                {/* to keep the same */}
                                <Link href="https://x.com/" target="_blank" className="select-none hover:text-amber-400">
                                    <svg className="size-8 text-inherit" aria-hidden="true" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                                    </svg>
                                </Link>

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
                                            <DialogContent className="sm:max-w-3xl p-6">
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
                                                        <ul className="mt-3 ml-6 space-y-3 list-outside list-disc">
                                                            <li><Link href="https://faikit.github.io/" target="_blank" className="animated-underline">Huijie Wang</Link></li>
                                                        </ul>
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
