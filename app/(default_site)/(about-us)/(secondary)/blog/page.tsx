import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Blog | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Blog", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import Link from "next/link"
import Image from 'next/image'
import { Slash } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"



import { FadeIn } from "@/components/animation/fade-in"



import { blog_categories, blogs } from "@/data/blog"
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
        path: "Blog",
        url: "/about-us#blog"
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
                            All Articles
                        </FadeIn>
                    </h1>
                </div>
            </div>



            <div className="w-full pl-6 pr-6 flex justify-center 2xl:justify-evenly">



                {/* navigator */}
                <div className="w-48 hidden 2xl:block">
                    <div className="w-full h-fit mt-20 flex flex-col gap-3 sticky top-64">
                        {blog_categories.map((category) => (
                            <Link className="select-none flex items-center gap-3 group hover:text-amber-400" href={category.category_id} key={category.category}>
                                <FadeIn>
                                    <span className="border-l-4 border-l-foreground text-sm">
                                        &nbsp;
                                    </span>
                                </FadeIn>
                                <FadeIn>
                                    <span className="text-xl font-bold">
                                        {category.category}
                                    </span>
                                </FadeIn>
                            </Link>
                        ))}
                    </div>
                </div>



                <div className="w-full max-w-7xl flex flex-col">
                    {blog_categories.map((category) => (
                        <div key={category.category}>



                            <FadeIn>
                                <div className="w-full flex flex-col items-center">
                                    
                                    <h2 className="w-full max-w-7xl mt-20 mb-20 text-6xl font-bold"> 
                                        <Link href={category.category_id} className="scroll-mt-32 group flex items-center" id={category.category}>
                                            {category.category}
                                            <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                                </svg>
                                            </span>                        
                                        </Link>
                                    </h2>

                                    <div className="w-full max-w-7xl grid gap-10 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                                        {[...blogs.values()].filter(n => n.keys.includes(category.category)).map((item) => (
                                            <Link className="w-full h-96 relative rounded-xl shadow-sm overflow-hidden group" href={item.link} key={item.title}>
                                                <div>
                                                    <Image
                                                        src={item.figure}
                                                        alt={item.figure}
                                                        fill
                                                        className="object-cover object-center loading select-none group-hover:scale-105 transition delay-100 duration-200"
                                                    />
                                                </div>
                                                <div className="w-full h-full absolute flex flex-col justify-between p-6">
                                                    <span className="text-white font-bold">
                                                        {item.date}
                                                    </span>
                                                    <h3 className="text-white font-bold text-3xl">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                            </Link>
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
