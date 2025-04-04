import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Publication | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Publication", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
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



import { publications, publication_categories } from "@/data/publication"



export default function Home() {
    return (
        <main className="h-full">



            {/* Landing */}
            <div className="w-full h-64 flex flex-row justify-center items-end pl-6 pr-6 bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440] bg-fixed">
                <div className="w-full max-w-7xl flex flex-col justify-start pb-10 gap-6">
                    <FadeIn>
                        <Breadcrumb>
                            <BreadcrumbList>
                                    <BreadcrumbLink asChild>
                                        <Link href="/" className="text-white animated-underline hover:text-white">MMLab</Link>
                                    </BreadcrumbLink>
                                <BreadcrumbSeparator>
                                    <Slash className="text-white" />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/research" className="text-white animated-underline hover:text-white">Resaerch</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <Slash className="text-white" />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/research#publication" className="text-white animated-underline hover:text-white">Publication</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <Slash className="text-white" />
                                </BreadcrumbSeparator>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </FadeIn>
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                        <FadeIn>Publications</FadeIn>
                    </h1>
                </div>
            </div>
 
 

            <FadeIn>
                <div className="w-full pl-6 pr-6 flex flex-col items-center">
                    


                    <div className="w-full max-w-7xl mt-20">


                        <Tabs defaultValue="Topic" >
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="Topic">Topic</TabsTrigger>
                                <TabsTrigger value="Year">Year</TabsTrigger>
                                <TabsTrigger value="PI">PI</TabsTrigger>
                            </TabsList>
                            {publication_categories.map((c) => (
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
                                                                            <Link href={link.url} target="_blank" className="animated-underline" key={link.website}>{link.website}</Link>
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
