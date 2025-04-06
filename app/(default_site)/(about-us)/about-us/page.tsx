import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "About Us | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["About Us", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};


import Image from 'next/image'
import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"




import { FadeIn } from "@/components/animation/fade-in"



import { news } from "@/data/news"
const selected_news = [...news.values()].filter(n => n.keys.includes("selected"))
import { blogs } from "@/data/blog"



export default function Home() {
    return (
        <main>



            {/* Landing */}
            <div className="w-full h-svh flex flex-row justify-center items-center pl-6 pr-6 bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440] bg-fixed">
                <div className="w-full max-w-7xl flex flex-col justify-start">
                    <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                        <FadeIn>MMLab is xxx</FadeIn>
                    </h1>
                    <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                        <FadeIn>founded to</FadeIn>
                    </h1>
                    <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                        <FadeIn>change the world</FadeIn>
                    </h1>
                </div>
            </div>



            {/* News */}
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <div className="w-full pl-6 pr-6 flex flex-col items-center mt-20">
                    <div className="w-full max-w-7xl flex flex-row justify-between">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> 
                            <FadeIn>
                                <Link href="#news" className="scroll-mt-32 group flex items-center" id="news">
                                    News
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                        <div className="flex flex-col justify-end">
                            <FadeIn>
                                <Link href="/news" className="animated-underline">History</Link>
                                <span>&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>



            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <div className="w-full max-w-7xl mt-10 flex flex-col lg:flex-row justify-between gap-6">
                    <div className="w-full flex flex-col gap-6">
                        {selected_news.slice(0,selected_news.length/2).map((item) => (
                            <FadeIn key={item.title}>
                                <div>
                                    <Card className="border-0 bg-pink-800" key={item.title}>
                                        <CardHeader>
                                            <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                                            <CardDescription className="text-white">{item.date}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-white">{item.detail}</p>
                                        </CardContent>
                                        <CardFooter className="text-white flex justify-end">
                                            <Link href={item.link} target="_blank" className="animated-underline">More</Link>
                                            <span>&nbsp;{'>'}</span>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </FadeIn>
                        ))}   
                    </div>
                    <div className="w-full flex flex-col gap-6">
                        {selected_news.slice(selected_news.length/2,news.length).map((item) => (
                            <FadeIn key={item.title}>
                                <div>
                                    <Card className="border-pink-800 bg-pink-800" key={item.title}>
                                        <CardHeader>
                                            <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                                            <CardDescription className="text-white">{item.date}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-white">{item.detail}</p>
                                        </CardContent>
                                        <CardFooter className="text-white flex justify-end">
                                            <Link href={item.link} target="_blank" className="animated-underline">More</Link>
                                            <span>&nbsp;{'>'}</span>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </FadeIn>
                        ))}   
                    </div>
                </div>
            </div>



            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <Separator className="max-w-7xl mt-20"/>
            </div>



            {/* Blog */}
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <div className="w-full pl-6 pr-6 flex flex-col items-center mt-20">
                    <div className="w-full max-w-7xl flex flex-row justify-between">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> 
                            <FadeIn>
                                <Link href="#blog" className="scroll-mt-32 group flex items-center" id="blog">
                                    Blog
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                        <div className="flex flex-col justify-end">
                            <FadeIn>
                                <Link href="/blog" className="animated-underline">Articles</Link>
                                <span>&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>



            <FadeIn>
                <div className="w-full pl-6 pr-6 mt-20 flex flex-col xl:flex-row justify-between gap-10">
                    <div className="flex-1 flex">
                        {[...blogs.values()].filter(n => n.keys.includes("heading")).map((item) => (
                            <Link className="w-full h-80 xl:h-full relative rounded-xl shadow-sm overflow-hidden group" href={item.link} key={item.title}>
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
                    <div className="flex-1 flex flex-col justify-between gap-10">
                        {[...blogs.values()].filter(n => n.keys.includes("secondary")).map((item) => (
                            <Link className="w-full h-80 relative rounded-xl shadow-sm overflow-hidden group" href={item.link} key={item.title}>
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



            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <Separator className="max-w-7xl mt-20"/>
            </div>



            {/* Members */}
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <div className="w-full pl-6 pr-6 flex flex-col items-center mt-20">
                    <div className="w-full max-w-7xl flex flex-row justify-between">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> 
                            <FadeIn>
                                <Link href="#member" className="scroll-mt-32 group flex items-center" id="member">
                                    Members
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                        <div className="flex flex-col justify-end">
                            <FadeIn>
                                <Link href="/member" className="animated-underline">All</Link>
                                <span>&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>



            <div className="w-full pl-6 pr-6 flex flex-col items-center">

                <FadeIn>
                    <div className="w-full max-w-7xl mt-20 flex flex-col gap-10 md:flex-row md:gap-20 justify-between">
                        <div className="flex-1/3 md:max-w-64">
                            <AspectRatio ratio={1/1}>
                                <Image
                                    src="/person/ping_luo.jpg"
                                    alt="img"
                                    fill
                                    className="h-full w-full rounded-md object-cover bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440]"
                                />
                            </AspectRatio>
                        </div>
                        <div className="flex-2/3 flex flex-col gap-6">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                                Ping Luo
                            </h1>
                            <p>
                                Accelerated by a standardized collection pipeline with human-in-the-loop verification, AgiBot World guarantees high-quality and diverse data distribution. It is extensible from grippers to dexterous hands and visuo-tactile sensors for fine-grained skill acquisition. Building on top of data, we introduce Genie Operator-1 (GO-1), a novel generalist policy that leverages latent action representations to maximize data utilization, demonstrating predictable performance scaling with increased data volume. Policies pre-trained on our dataset achieve an average performance improvement of 30% over those trained on Open X-Embodiment, both in in-domain and out-of-distribution scenarios. 
                            </p>
                        </div>
                    </div>
                </FadeIn>



                <FadeIn>
                    <div className="w-full max-w-7xl mt-20 flex flex-col gap-10 md:flex-row md:gap-20 justify-between">
                        <div className="flex-1/3 md:max-w-64">
                            <AspectRatio ratio={1/1}>
                                <Image
                                    src="/person/hongyang_li.jpg"
                                    alt="img"
                                    fill
                                    className="h-full w-full rounded-md object-cover bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440]"
                                />
                            </AspectRatio>
                        </div>
                        <div className="flex-2/3 flex flex-col gap-6">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                                Hongyang Li
                            </h1>
                            <p>
                                Accelerated by a standardized collection pipeline with human-in-the-loop verification, AgiBot World guarantees high-quality and diverse data distribution. It is extensible from grippers to dexterous hands and visuo-tactile sensors for fine-grained skill acquisition. Building on top of data, we introduce Genie Operator-1 (GO-1), a novel generalist policy that leverages latent action representations to maximize data utilization, demonstrating predictable performance scaling with increased data volume. Policies pre-trained on our dataset achieve an average performance improvement of 30% over those trained on Open X-Embodiment, both in in-domain and out-of-distribution scenarios. 
                            </p>
                        </div>
                    </div>
                </FadeIn>

            </div>



            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <Separator className="max-w-7xl mt-20"/>
            </div>



            {/* Career */}
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <div className="w-full pl-6 pr-6 flex flex-col items-center mt-20">
                    <div className="w-full max-w-7xl flex flex-row justify-between">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> 
                            <FadeIn>
                                <Link href="#career" className="scroll-mt-32 group flex items-center" id="career">
                                    Career
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                    </div>
                </div>
            </div>



            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <Separator className="max-w-7xl mt-20"/>
            </div>



        </main>
    );
}
