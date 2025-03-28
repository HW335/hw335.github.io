import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Publication | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Publication", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import { Separator } from "@/components/ui/separator"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"



import { FadeIn } from "@/components/animation/fade-in"



import { publications, categories } from "@/data/publication"



export default function Home() {
    return (
        <main className="h-full">



            {/* Landing */}
            <div className="w-full h-svh flex flex-row justify-center items-center pl-6 pr-6 bg-gradient-to-br from-indigo-300 via-yellow-400 to-pink-500 bg-fixed">
                <div className="w-full max-w-7xl flex flex-row justify-start">
                    <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                        <FadeIn>Publication</FadeIn>
                    </h1>
                </div>
            </div>
        

            
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                
                <h2 className="w-full max-w-7xl mt-20 text-6xl font-bold"> 
                    <FadeIn>
                        <a href="#selected" className="scroll-mt-20 group flex items-center" id="selected">
                            Selected Works
                            <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </span> 
                        </a>
                    </FadeIn>
                </h2>
                




                <FadeIn>
                    <div className="w-full max-w-7xl mt-20 flex flex-col gap-10 md:flex-row md:gap-20 justify-between">
                        <div className="flex-1/3">
                            <AspectRatio ratio={1/1}>
                                <Image
                                    src="/logos/jc_stem_lab.png"
                                    alt="img"
                                    fill
                                    className="h-full w-full rounded-md object-cover bg-gradient-to-br from-indigo-300 via-yellow-400 to-pink-500"
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
                                    className="h-full w-full rounded-md object-cover bg-gradient-to-br from-indigo-300 via-yellow-400 to-pink-500"
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



            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <Separator className="max-w-7xl mt-20"/>
            </div>


            <FadeIn>
                <div className="w-full pl-6 pr-6 flex flex-col items-center">
                    
                    <h2 className="w-full max-w-7xl mt-20 text-6xl font-bold"> 
                        <a href="#gallery" className="scroll-mt-20 group flex items-center" id="gallery">
                            Gallery
                            <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </span> 
                        </a>
                    </h2>



                    <div className="w-full max-w-7xl mt-20">


                        <Tabs defaultValue="Topic" >
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="Topic">Topic</TabsTrigger>
                                <TabsTrigger value="Year">Year</TabsTrigger>
                                <TabsTrigger value="PI">PI</TabsTrigger>
                            </TabsList>
                            {categories.map((c) => (
                                <TabsContent value={c.c1} key={c.c1}>
                                    <Tabs defaultValue={c.c2s[0]} className="mt-3">
                                        <TabsList className={"grid w-full " + c.len}>
                                            {c.c2s.map((c2) => (
                                                <TabsTrigger value={c2} key={c2}>{c2}</TabsTrigger>
                                            ))}
                                        </TabsList>
                                        {c.c2s.map((c2) => (
                                            <TabsContent value={c2} key={c2} className="mt-6">
                                                <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6">
                                                    {[...publications.values()].filter(publication => publication.keys.includes(c2)).map(( publication) => (
                                                        <FadeIn key={publication.title}>
                                                            <div>
                                                                <Card className="border-border">
                                                                    <CardHeader>
                                                                        <CardTitle className="text-xl">{publication.title}</CardTitle>
                                                                        <CardDescription>{publication.authors}</CardDescription>
                                                                    </CardHeader>
                                                                    <CardContent>
                                                                        <p>{publication.proceedings}</p>
                                                                    </CardContent>
                                                                    <CardFooter className="flex flex-row gap-3 flex-wrap">
                                                                        {publication.links.map((link) => (
                                                                            <a href={link.url} target="_blank" className="animated-underline" key={link.website}>{link.website}</a>
                                                                        ))} 
                                                                    </CardFooter>
                                                                </Card>
                                                            </div>
                                                        </FadeIn>
                                                    ))}   
                                                </div>
                                            </TabsContent>
                                        ))}                       
                                    </Tabs>       
                                </TabsContent>
                            ))}
                            <TabsContent value="account">



                            </TabsContent>

                        </Tabs>



                    </div>
                </div>
            </FadeIn>



            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <Separator className="max-w-7xl mt-20"/>
            </div>



        </main>
    );
}
