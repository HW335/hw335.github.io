import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Member | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Member", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import Image from 'next/image'
import Link from "next/link"
import { Slash } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"



import { FadeIn } from "@/components/animation/fade-in"



import { members } from "@/data/member"
const paths: { path: string; url: string; }[] = [
    {
        path: "MMLab",
        url: "/"
    },
    {
        path: "About Us",
        url: "/about-us"
    },
    {
        path: "Member",
        url: "/about-us#member"
    },
]



export default function Home() {
    return (
        <main>



            {/* Landing */}
            <div className="w-full h-72 pl-6 pr-6 flex flex-row justify-center bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440] bg-fixed">
                <div className="w-full h-full max-w-7xl flex flex-col justify-end pb-10 gap-6">
                    <FadeIn>
                        <Breadcrumb>
                            <BreadcrumbList>
                                {paths.map((path) => (
                                    <BreadcrumbList key={path.path}>
                                        <BreadcrumbLink asChild>
                                            <Link href={path.url} className="text-white animated-underline hover:text-white">
                                                {path.path}
                                            </Link>
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator>
                                            <Slash className="text-white" />
                                        </BreadcrumbSeparator>
                                    </BreadcrumbList>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </FadeIn>
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                        <FadeIn>
                            All Members
                        </FadeIn>
                    </h1>
                </div>
            </div>



            <div className="w-full pl-6 pr-6 flex justify-center 2xl:justify-evenly">



                {/* navigator */}
                <div className="w-48 hidden 2xl:block">
                    <div className="w-full h-fit mt-20 flex flex-col gap-3 sticky top-64">
                        {members.map((branch) => (
                            <Link className="select-none flex items-center gap-3 group hover:text-amber-400" href={branch.branch_id_} key={branch.branch}>
                                <FadeIn>
                                    <span className="border-l-4 border-l-foreground text-sm">
                                        &nbsp;
                                    </span>
                                </FadeIn>
                                <FadeIn>
                                    <span className="text-xl font-bold">
                                        {branch.branch}
                                    </span>
                                </FadeIn>
                            </Link>
                        ))}
                    </div>
                </div>
                


                <div className="w-full max-w-7xl flex flex-col">
                    {members.map((branch) => (
                        <div>
                            <FadeIn>
                                <div className="w-full flex flex-col items-center">
                                    <h2 className="w-full max-w-7xl mt-20 text-6xl font-bold"> 
                                        <Link href={branch.branch_id_} className="scroll-mt-32 group flex items-center" id={branch.branch_id}>
                                            {branch.branch}
                                            <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                                </svg>
                                            </span>                        
                                        </Link>
                                    </h2>
                                    <div className="w-full max-w-7xl mt-20 grid gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                                        {branch.person.map((member) => (
                                            <div className="flex flex-col gap-3" key={member.name}>
                                                <AspectRatio ratio={1/1}>
                                                    <Image
                                                        src={member.img}
                                                        alt={member.name}
                                                        fill
                                                        className="h-full w-full rounded-md object-cover loading"
                                                    />
                                                </AspectRatio>
                                                <span className="font-bold text-xl">{member.name}</span>
                                                <span>{member.affiliation}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                            <div className="w-full flex flex-col items-center">
                                <Separator className="max-w-7xl mt-20"/>
                            </div>
                        </div>
                    ))}
                </div>



                <div className="w-48 hidden 2xl:block"></div>



            </div>



        </main>
    );
}
