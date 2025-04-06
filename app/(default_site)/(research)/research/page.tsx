import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Research | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Research", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import Link from "next/link"
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"



import { FadeIn } from "@/components/animation/fade-in"



import { events } from "@/data/event"



export default function Home() {
    return (
        <main>



            {/* Landing */}
            <div className="w-full h-svh flex flex-row justify-center items-center pl-6 pr-6 bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440] bg-fixed">
                <div className="w-full max-w-7xl flex flex-row justify-start">
                    <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                        <FadeIn>Research<br></br>xxx xa ewav asjvcoewa jo<br></br>dw jowd</FadeIn>
                    </h1>
                </div>
            </div>



            {/* Topic */}
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                
                <h2 className="w-full max-w-7xl mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> 
                    <FadeIn>
                        <Link href="#topic" className="scroll-mt-32 group flex items-center" id="topic">
                            Topic
                            <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </span> 
                        </Link>
                    </FadeIn>
                </h2>
            
                <FadeIn>
                    <div className="w-full max-w-7xl mt-10 flex flex-col justify-between">
                        <div className="flex flex-col gap-6">
                            <p>
                                short text for introducing overall research topics, idealy some high-level vision.
                            </p>
                            <p>
                                We explore how scalable robot data can address real-world challenges for generalized robotic manipulation. Introducing AgiBot World, a large-scale platform comprising over 1 million trajectories across 217 tasks in five deployment scenarios, we achieve an order-of-magnitude increase in data scale compared to existing datasets. 
                            </p>
                            <p>
                                Accelerated by a standardized collection pipeline with human-in-the-loop verification, AgiBot World guarantees high-quality and diverse data distribution. It is extensible from grippers to dexterous hands and visuo-tactile sensors for fine-grained skill acquisition. Building on top of data, we introduce Genie Operator-1 (GO-1), a novel generalist policy that leverages latent action representations to maximize data utilization, demonstrating predictable performance scaling with increased data volume. Policies pre-trained on our dataset achieve an average performance improvement of 30% over those trained on Open X-Embodiment, both in in-domain and out-of-distribution scenarios. 
                            </p>
                        </div>
                    </div>
                </FadeIn>

            </div>


            
            <div className="w-full flex flex-col xl:flex-row pt-20" id="embodied">
                <div className="flex-2/5">
                    <div className="bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440] w-full h-full"></div>
                </div>                
                <div className="flex-3/5 flex flex-col p-6 pt-10 pb-10 xl:p-20 gap-6">
                    <div className="color-text-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-6">
                            Embodied AI
                        </h1>
                    </div>
                    <FadeIn>
                        <p>
                            We explore how scalable robot data can address real-world challenges for generalized robotic manipulation. Introducing AgiBot World, a large-scale platform comprising over 1 million trajectories across 217 tasks in five deployment scenarios, we achieve an order-of-magnitude increase in data scale compared to existing datasets. 
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <p>
                            Accelerated by a standardized collection pipeline with human-in-the-loop verification, AgiBot World guarantees high-quality and diverse data distribution. It is extensible from grippers to dexterous hands and visuo-tactile sensors for fine-grained skill acquisition. Building on top of data, we introduce Genie Operator-1 (GO-1), a novel generalist policy that leverages latent action representations to maximize data utilization, demonstrating predictable performance scaling with increased data volume. Policies pre-trained on our dataset achieve an average performance improvement of 30% over those trained on Open X-Embodiment, both in in-domain and out-of-distribution scenarios. 
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <p>
                            GO-1 exhibits exceptional capability in real-world dexterous and long-horizon tasks, achieving over 60% success rate on complex tasks and outperforming prior RDT approach by 32%. 
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <p>
                            By open-sourcing the dataset, tools, and models, we aim to democratize access to large-scale, high-quality robot data, advancing the pursuit of scalable and general-purpose intelligence.
                        </p>
                    </FadeIn>
                </div>
            </div>
            


            <div className="w-full flex flex-col xl:flex-row-reverse pt-20" id="embodied">
                <div className="flex-2/3 pt-64 pb-20">
                    <div className="bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440] w-full h-full"></div>
                </div>
                <div className="flex-1/3 flex flex-col p-6 pt-10 pb-10 xl:p-20 gap-6">
                    <div className="color-text-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-6">
                            Autonomous Driving
                        </h1>
                    </div>
                    <FadeIn>
                        <p>
                            We explore how scalable robot data can address real-world challenges for generalized robotic manipulation. Introducing AgiBot World, a large-scale platform comprising over 1 million trajectories across 217 tasks in five deployment scenarios, we achieve an order-of-magnitude increase in data scale compared to existing datasets. 
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <p>
                            Accelerated by a standardized collection pipeline with human-in-the-loop verification, AgiBot World guarantees high-quality and diverse data distribution. It is extensible from grippers to dexterous hands and visuo-tactile sensors for fine-grained skill acquisition. Building on top of data, we introduce Genie Operator-1 (GO-1), a novel generalist policy that leverages latent action representations to maximize data utilization, demonstrating predictable performance scaling with increased data volume. Policies pre-trained on our dataset achieve an average performance improvement of 30% over those trained on Open X-Embodiment, both in in-domain and out-of-distribution scenarios. 
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <p>
                            GO-1 exhibits exceptional capability in real-world dexterous and long-horizon tasks, achieving over 60% success rate on complex tasks and outperforming prior RDT approach by 32%. 
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <p>
                            By open-sourcing the dataset, tools, and models, we aim to democratize access to large-scale, high-quality robot data, advancing the pursuit of scalable and general-purpose intelligence.
                        </p>
                    </FadeIn>
                </div>
            </div>



            <div className="w-full pl-6 pr-6 bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440] bg-fixed mt-20">
                <div className="w-full flex flex-col items-center">
                    <div className="w-full max-w-7xl mt-20 mb-20 flex flex-col xl:flex-row gap-20 xl:items-center"> 
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"> 
                            <FadeIn>A short slogan for research vision</FadeIn>
                        </h2>
                    </div>
                </div>
            </div>




            {/* Publication */}
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <h2 className="w-full max-w-7xl mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> 
                    <FadeIn>
                        <Link href="#publication" className="scroll-mt-32 group flex items-center" id="publication">
                            Publication
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



            <div className="w-full pl-6 pr-6 flex flex-col items-center">

                <FadeIn>
                    <div className="w-full max-w-7xl mt-20 flex flex-col gap-10 md:flex-row md:gap-20 justify-between">
                        <div className="flex-1/3">
                            <AspectRatio ratio={1/1}>
                                <Image
                                    src="/logos/jc_stem_lab.png"
                                    alt="img"
                                    fill
                                    className="h-full w-full rounded-md object-cover bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440]"
                                />
                            </AspectRatio>
                        </div>
                        <div className="flex-2/3 flex flex-col gap-6">
                            <h1 className="text-xl font-bold">
                                AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems
                            </h1>
                            <p>
                                We explore how scalable robot data can address real-world challenges for generalized robotic manipulation. Introducing AgiBot World, a large-scale platform comprising over 1 million trajectories across 217 tasks in five deployment scenarios, we achieve an order-of-magnitude increase in data scale compared to existing datasets. 
                            </p><p>
                                Accelerated by a standardized collection pipeline with human-in-the-loop verification, AgiBot World guarantees high-quality and diverse data distribution. It is extensible from grippers to dexterous hands and visuo-tactile sensors for fine-grained skill acquisition. Building on top of data, we introduce Genie Operator-1 (GO-1), a novel generalist policy that leverages latent action representations to maximize data utilization, demonstrating predictable performance scaling with increased data volume. Policies pre-trained on our dataset achieve an average performance improvement of 30% over those trained on Open X-Embodiment, both in in-domain and out-of-distribution scenarios. 
                            </p><p>
                                GO-1 exhibits exceptional capability in real-world dexterous and long-horizon tasks, achieving over 60% success rate on complex tasks and outperforming prior RDT approach by 32%. 
                            </p><p>
                                By open-sourcing the dataset, tools, and models, we aim to democratize access to large-scale, high-quality robot data, advancing the pursuit of scalable and general-purpose intelligence.
                            </p>
                        </div>
                    </div>
                </FadeIn>



                <FadeIn>
                    <div className="w-full max-w-7xl mt-20 flex flex-col gap-10 md:flex-row-reverse md:gap-20 justify-between">
                        <div className="flex-1/3">
                            <AspectRatio ratio={1/1}>
                                <Image
                                    src="/logos/jc_stem_lab.png"
                                    alt="img"
                                    fill
                                    className="h-full w-full rounded-md object-cover bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440]"
                                />
                            </AspectRatio>
                        </div>
                        <div className="flex-2/3 flex flex-col gap-6">
                            <h1 className="text-xl font-bold">
                                AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems
                            </h1>
                            <p>
                                We explore how scalable robot data can address real-world challenges for generalized robotic manipulation. Introducing AgiBot World, a large-scale platform comprising over 1 million trajectories across 217 tasks in five deployment scenarios, we achieve an order-of-magnitude increase in data scale compared to existing datasets. 
                            </p><p>
                                Accelerated by a standardized collection pipeline with human-in-the-loop verification, AgiBot World guarantees high-quality and diverse data distribution. It is extensible from grippers to dexterous hands and visuo-tactile sensors for fine-grained skill acquisition. Building on top of data, we introduce Genie Operator-1 (GO-1), a novel generalist policy that leverages latent action representations to maximize data utilization, demonstrating predictable performance scaling with increased data volume. Policies pre-trained on our dataset achieve an average performance improvement of 30% over those trained on Open X-Embodiment, both in in-domain and out-of-distribution scenarios. 
                            </p><p>
                                GO-1 exhibits exceptional capability in real-world dexterous and long-horizon tasks, achieving over 60% success rate on complex tasks and outperforming prior RDT approach by 32%. 
                            </p><p>
                                By open-sourcing the dataset, tools, and models, we aim to democratize access to large-scale, high-quality robot data, advancing the pursuit of scalable and general-purpose intelligence.
                            </p>
                        </div>
                    </div>
                </FadeIn>



            </div>



            <div className="w-full pl-6 pr-6 bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440] bg-fixed mt-20">
                <div className="w-full flex flex-col items-center">
                    <div className="w-full max-w-7xl mt-20 mb-20 flex flex-col xl:flex-row gap-20 xl:items-center"> 
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"> 
                                <FadeIn>Publications</FadeIn>
                            </h2>
                            <FadeIn>
                                <Link href="/publication" className="font-bold text-xl text-white animated-underline">More</Link>
                                <span className="font-bold text-xl text-white">&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                        <div className="w-full pl-12 pr-12">
                            <FadeIn>
                                <Carousel
                                    opts={{
                                        align: "start",
                                    }}
                                >
                                    <CarouselContent>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                        <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
                                            <Card className="border-0">
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <span>{index + 1}</span>
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="border-0" />
                                    <CarouselNext className="border-0" />
                                </Carousel>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>



            {/* Open Source */}
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <h2 className="w-full max-w-7xl mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> 
                    <FadeIn>
                        <Link href="#open-source" className="scroll-mt-32 group flex items-center" id="open-source">
                            Open Source
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



            <div className="w-full pl-6 pr-6 flex flex-col items-center">

                <FadeIn>
                    <div className="w-full max-w-7xl mt-20 flex flex-col gap-10 md:flex-row md:gap-20 justify-between">
                        <div className="flex-1/3">
                            <AspectRatio ratio={1/1}>
                                <Image
                                    src="/logos/jc_stem_lab.png"
                                    alt="img"
                                    fill
                                    className="h-full w-full rounded-md object-cover bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440]"
                                />
                            </AspectRatio>
                        </div>
                        <div className="flex-2/3 flex flex-col gap-6">
                            <h1 className="text-xl font-bold">
                                AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems
                            </h1>
                            <p>
                                We explore how scalable robot data can address real-world challenges for generalized robotic manipulation. Introducing AgiBot World, a large-scale platform comprising over 1 million trajectories across 217 tasks in five deployment scenarios, we achieve an order-of-magnitude increase in data scale compared to existing datasets. 
                            </p><p>
                                Accelerated by a standardized collection pipeline with human-in-the-loop verification, AgiBot World guarantees high-quality and diverse data distribution. It is extensible from grippers to dexterous hands and visuo-tactile sensors for fine-grained skill acquisition. Building on top of data, we introduce Genie Operator-1 (GO-1), a novel generalist policy that leverages latent action representations to maximize data utilization, demonstrating predictable performance scaling with increased data volume. Policies pre-trained on our dataset achieve an average performance improvement of 30% over those trained on Open X-Embodiment, both in in-domain and out-of-distribution scenarios. 
                            </p><p>
                                GO-1 exhibits exceptional capability in real-world dexterous and long-horizon tasks, achieving over 60% success rate on complex tasks and outperforming prior RDT approach by 32%. 
                            </p><p>
                                By open-sourcing the dataset, tools, and models, we aim to democratize access to large-scale, high-quality robot data, advancing the pursuit of scalable and general-purpose intelligence.
                            </p>
                        </div>
                    </div>
                </FadeIn>



            </div>



            <div className="w-full pl-6 pr-6 bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440] bg-fixed mt-20">
                <div className="w-full flex flex-col items-center">
                    <div className="w-full max-w-7xl mt-20 mb-20 flex flex-col xl:flex-row gap-20 xl:items-center"> 
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"> 
                                <FadeIn>Discover All<br></br>Projects and Datasets</FadeIn>
                            </h2>
                            <FadeIn>
                                <Link href="/open-source" className="font-bold text-xl text-white animated-underline">More</Link>
                                <span className="font-bold text-xl text-white">&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>



            {/* Event */}
            <div className="bg-gray-300">
                <div className="w-full pl-6 pr-6 flex flex-col items-center">
                    <h2 className="w-full max-w-7xl mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> 
                        <FadeIn>
                            <Link href="#event" className="scroll-mt-32 group flex items-center" id="event">
                                Event
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



                <div className="w-full pl-6 pr-6 flex flex-col items-center mt-20">
                    <div className="w-full max-w-7xl grid gap-20 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                        {[...events.values()].filter(n => n.keys.includes("selected")).map((item) => (
                            <FadeIn key={item.title}>
                                <div className="flex flex-col gap-6">
                                    <Link className="w-full h-64 relative rounded-xl shadow-sm overflow-hidden group" href={item.link}>
                                        <div>
                                            <Image
                                                src={item.figure}
                                                alt={item.figure}
                                                fill
                                                className="object-cover object-center loading select-none group-hover:scale-105 transition delay-100 duration-200"
                                            />
                                        </div>
                                    </Link>
                                    <h3 className="font-bold text-3xl">
                                        {item.title}
                                    </h3>
                                    <span className="font-bold">
                                        {item.date}
                                    </span>
                                </div>
                            </FadeIn>
                        ))}   
                    </div>
                </div>



                <div className="w-full pl-6 pr-6 mt-20">
                <div className="w-full flex flex-col items-center">
                    <div className="w-full max-w-7xl mt-20 mb-20 flex flex-col xl:flex-row gap-20 xl:items-center"> 
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> 
                                <FadeIn>Check out<br></br>All Events</FadeIn>
                            </h2>
                            <FadeIn>
                                <Link href="/event" className="font-bold text-xl animated-underline">More</Link>
                                <span className="font-bold text-xl">&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>

            </div>


        </main>
    );
}
