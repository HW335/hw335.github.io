import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Open Source | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Open Source", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import Link from "next/link"
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
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"



import { FadeIn } from "@/components/animation/fade-in"



import { open_source_categories, open_sources } from "@/data/open-source"
const paths: { path: string; url: string; }[] = [
    {
        path: "MMLab",
        url: "/"
    },
    {
        path: "Resaerch",
        url: "/research"
    },
    {
        path: "Open Source",
        url: "/research#open-source"
    },
]



export default function Home() {
    return (
        <main className="h-full">



            {/* Landing */}
            <div className="w-full h-72 flex flex-row justify-center bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440] bg-fixed">
                <div className="w-full h-full pl-6 pr-6 max-w-7xl flex flex-col justify-end pb-10 gap-6">
                    <FadeIn>
                        <Breadcrumb>
                            <BreadcrumbList>
                                {paths.map((path) => (
                                    <BreadcrumbList key={path.path}>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink asChild>
                                                <Link href={path.url} className="text-white animated-underline hover:text-white">
                                                    {path.path}
                                                </Link>
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbItem>
                                            <BreadcrumbSeparator>
                                                <Slash className="text-white" />
                                            </BreadcrumbSeparator>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </FadeIn>
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                        <FadeIn>
                            Projects & Datasets
                        </FadeIn>
                    </h1>
                </div>
            </div>
 
 
            
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <div className="w-full max-w-7xl mt-20">
                    <Tabs defaultValue={open_source_categories[0].category}>



                        <FadeIn>
                            <TabsList className="grid w-full grid-cols-3">
                                {open_source_categories.map((category) => (
                                    <TabsTrigger value={category.category} key={category.category}>{category.category}</TabsTrigger>
                                ))}
                            </TabsList>
                        </FadeIn>



                        {open_source_categories.map((category) => (
                            <TabsContent value={category.category} key={category.category}>

                                {category.years.map((year) => (
                                    <div className="mt-20" key={year}>

                                        <FadeIn>
                                            <h2 className="w-full max-w-7xl mb-10 text-6xl font-bold"> 
                                                <Link href="#teir2" className="scroll-mt-20 group flex items-center" id={year}>
                                                    {year}
                                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                                        </svg>
                                                    </span>                        
                                                </Link>
                                            </h2>
                                        </FadeIn>

                                        <div className="grid w-full grid-cols-1 gap-6">
                                            {[...open_sources.values()]
                                                .filter(open_source => open_source.keys.includes(category.category))
                                                .filter(open_source => open_source.keys.includes(year))
                                                .map((open_source) => 
                                            (
                                                <FadeIn key={open_source.title}>
                                                    <div>
                                                        <Card className="border-border">
                                                            <CardHeader>
                                                                <CardTitle className="text-xl">{open_source.title}</CardTitle>
                                                                <CardDescription>{open_source.description}</CardDescription>
                                                            </CardHeader>
                                                            <CardContent>
                                                                <p>{open_source.tags[0].tag}</p>
                                                            </CardContent>
                                                            <CardFooter className="flex flex-row gap-3 flex-wrap">
                                                                {open_source.links.map((link) => (
                                                                    <Link href={link.url} target="_blank" className="animated-underline" key={link.link}>{link.link}</Link>
                                                                ))} 
                                                            </CardFooter>
                                                        </Card>
                                                    </div>
                                                </FadeIn>
                                            ))}   
                                        </div>

                                        <div className="w-full flex flex-col items-center">
                                            <Separator className="max-w-7xl mt-20"/>
                                        </div>

                                    </div>
                                ))}

                            </TabsContent>
                        ))}



                    </Tabs>
                </div>
            </div>



        </main>
    );
}
