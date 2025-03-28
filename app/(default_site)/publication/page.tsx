import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Publication",
    description: "Generated by create next app",
    keywords: ["key1","key2"],
};



import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
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



import { FadeIn } from "@/components/animation/fade-in"



const categories: { c1: string; c2s: string[]; }[] = [
    {
        c1: "Topic",
        c2s: [
            "Embodied AI",
            "Computer Vision",
        ]
    },
    {
        c1: "Year",
        c2s: [
            "2025",
            "2024",
            "2023",
            "2022",
            "2021",
        ]
    },
    {
        c1: "PI",
        c2s: [
            "Ping Lup",
            "Hongyang Li",
        ]
    },
]



const pubblications: { title: string; authors: string; proceedings: string; links: { website: string; url: string; }[]; keys: string[]; }[] = [
    {
        title: "Planning-oriented autonomous driving",
        authors: "Yihan Hu, Jiazhi Yang, Li Chen, Keyu Li, Chonghao Sima, Xizhou Zhu, Siqi Chai, Senyao Du, Tianwei Lin, Wenhai Wang, Lewei Lu, Xiaosong Jia, Qiang Liu, Jifeng Dai, Yu Qiao, Hongyang Li",
        proceedings: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2023",
        links: [
            {
                website: "proceeding",
                url: "https://openaccess.thecvf.com/content/CVPR2023/html/Hu_Planning-Oriented_Autonomous_Driving_CVPR_2023_paper.html",
            },
        ],
        keys :[
            "key1", "key2",
        ],
    },
    {
        title: "Topic",
        authors: "scadj fijewaofcjw dw",
        proceedings: "daf avrea ",
        links: [
            {
                website: "xxx",
                url: "https://opendrivelab.com",
            },
            {
                website: "xdwxx",
                url: "https://opendrivelab.com",
            },
        ],
        keys :[
            "key1", "key2", "key22",
        ],
    },
]



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
                    <a href="#selected" className="scroll-mt-20 group flex items-center" id="selected">
                        Selected Works
                        <span className="ml-6 hidden group-hover:inline-block size-10 text-soft-black">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                            </svg>
                        </span> 
                    </a>
                </h2>
                <div className="w-full mt-20">
                    some works with charming figures
                </div>
            </div>



            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <Separator className="max-w-7xl mt-20"/>
            </div>



            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                
                <h2 className="w-full max-w-7xl mt-20 text-6xl font-bold"> 
                    <a href="#gallery" className="scroll-mt-20 group flex items-center" id="gallery">
                        Gallery
                        <span className="ml-6 hidden group-hover:inline-block size-10 text-soft-black">
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
                            <TabsContent value={c.c1}>
                                <Tabs defaultValue={c.c2s[0]} className="mt-3">
                                    <TabsList className={"grid w-full grid-cols-" + c.c2s.length}>
                                        {c.c2s.map((c2) => (
                                            <TabsTrigger value={c2}>{c2}</TabsTrigger>
                                        ))}
                                    </TabsList>
                                    {c.c2s.map((c2) => (
                                        <TabsContent value={c2} className="mt-6">
                                            <div className="grid w-full grid-cols-2 gap-6">
                                                {pubblications.map((pubblication) => (
                                                    <Card className="border-0">
                                                        <CardHeader>
                                                            <CardTitle className="text-xl">{pubblication.title}</CardTitle>
                                                            <CardDescription>{pubblication.authors}</CardDescription>
                                                        </CardHeader>
                                                        <CardContent>
                                                            <p>{pubblication.proceedings}</p>
                                                        </CardContent>
                                                        <CardFooter className="flex flex-row gap-3">
                                                            {pubblication.links.map((link) => (
                                                                <a href={link.url} target="_blank" className="hover:underline">{link.website}</a>
                                                            ))} 
                                                        </CardFooter>
                                                    </Card>
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



        </main>
    );
}
