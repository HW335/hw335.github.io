import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Research",
    description: "Generated by create next app",
    keywords: ["key1","key2"],
};



import Image from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"



import { FadeIn } from "@/components/animation/fade-in"




export default function Home() {
    return (
        <main>



            {/* Landing */}
            <div className="w-full h-svh flex flex-row justify-center items-center pl-6 pr-6 bg-gradient-to-br from-indigo-300 via-yellow-400 to-pink-500 bg-fixed">
                <div className="w-full max-w-7xl flex flex-row justify-start">
                    <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                        <FadeIn>Research</FadeIn>
                    </h1>
                </div>
            </div>



            <div className="w-full pl-6 pr-6 pt-20 flex flex-col md:flex-row justify-between">
                <div>
                    {/* <AspectRatio ratio={1/1}>
                        <Image
                            src="https://opendrivelab.com/assets/background/agibot_world.jpg"
                            alt="img"
                            fill
                            className="h-full w-full rounded-md object-cover bg-gradient-to-br from-indigo-300 via-yellow-400 to-pink-500"
                        />
                    </AspectRatio> */}
                </div>
            </div>




        </main>
    );
}
