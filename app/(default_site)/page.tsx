import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "MMLab | Multimedia Laboratory",
    description: "Multimedia Laboratory",
    keywords: ["MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'



import { FadeIn } from "@/components/animation/fade-in"
import { RollinggText1 } from "@/components/animation/rolling-text-1"
import { RollinggText2 } from "@/components/animation/rolling-text-2"
import { RollinggText3 } from "@/components/animation/rolling-text-3"



import { news } from "@/data/news"



export default function Home() {
    return (
        <main>



            {/* Landing */}
            <div className="w-full h-svh flex flex-row justify-center items-center pl-6 pr-6 bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440] bg-fixed">
                <div className="w-full max-w-7xl flex flex-col gap-6">
                    <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                        <FadeIn>Multimedia</FadeIn>
                    </h1>
                    <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                        <FadeIn>Laboratory</FadeIn>
                    </h1>
                </div>
            </div>



            
            <h2 className='p-6 pt-10 pb-10 md:p-20 min-h-64 lg:min-h-96 h-full flex flex-col justify-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl gap-3 bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440]'>
                <FadeIn><RollinggText1/></FadeIn>
                <FadeIn><RollinggText2/></FadeIn>
                <FadeIn><RollinggText3/></FadeIn>
            </h2>
            



            <div className="w-full pl-6 pr-6 flex flex-col items-center mt-20">
                <div className="w-full max-w-7xl flex flex-row justify-between">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex flex-col gap-3">
                        <FadeIn>
                            Explore
                        </FadeIn>
                        <FadeIn>
                            Highlights xxx
                        </FadeIn>
                    </h2>
                    <div className="flex flex-col justify-end">
                        <FadeIn>
                            <Link href="/about-us" className="animated-underline">About Us</Link>
                            <span>&nbsp;{'>'}</span>
                        </FadeIn>
                    </div>
                </div>
            </div>
            <div className="w-full relative mt-20 h-96">
                <Image
                    src="/background/mmlab@hu.jpg"
                    alt="mmlab@hku"
                    fill
                    className="object-cover object-center loading select-none h-full"
                />
                <div className="absolute flex flex-row w-full h-full justify-between">
                    <div className="flex-1 h-full"></div>
                    <div className="flex-grow  h-full w-full max-w-7xl ml-6 lg:ml-20 mr-6 lg:mr-20 flex flex-col gap-6 text-white justify-center">
                        <FadeIn>
                            <h1 className="text-xl font-bold">
                                AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems
                            </h1>
                        </FadeIn>
                        <FadeIn>
                            <p>
                                We explore how scalable robot data can address real-world challenges for generalized robotic manipulation. Introducing AgiBot World, a large-scale platform comprising over 1 million trajectories across 217 tasks in five deployment scenarios, we achieve an order-of-magnitude increase in data scale compared to existing datasets. 
                            </p>
                        </FadeIn>
                    </div>
                    <div className="flex-1 h-full bg-background"></div>
                </div>
            </div>
            <div className="w-full relative mt-20 h-96">
                <Image
                    src="/background/mmlab@hu.jpg"
                    alt="mmlab@hku"
                    fill
                    className="object-cover object-center loading select-none h-full"
                />
                <div className="absolute flex flex-row w-full h-full justify-between">
                    <div className="flex-1 h-full bg-background"></div>
                    <div className="flex-grow  h-full w-full max-w-7xl ml-6 lg:ml-20 mr-6 lg:mr-20 flex flex-col gap-6 text-white justify-center">
                        <FadeIn>
                            <h1 className="text-xl font-bold">
                                AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems
                            </h1>
                        </FadeIn>
                        <FadeIn>
                            <p>
                                We explore how scalable robot data can address real-world challenges for generalized robotic manipulation. Introducing AgiBot World, a large-scale platform comprising over 1 million trajectories across 217 tasks in five deployment scenarios, we achieve an order-of-magnitude increase in data scale compared to existing datasets. 
                            </p>
                        </FadeIn>
                    </div>
                    <div className="flex-1 h-full"></div>
                </div>
            </div>


            
            <div className="w-full flex flex-col xl:flex-row scroll-mt-32 mt-32" id="MMLab@HKU">
                <div className="flex-2/5 min-h-96 relative">
                    <Image
                        src="/background/mmlab@hku.jpg"
                        alt="mmlab@hku"
                        fill
                        className="object-cover object-center loading select-none"
                    />
                </div>
                <div className="flex-3/5">
                    <div className="flex flex-col p-6 pt-10 pb-10 lg:p-20 gap-6 bg-[#25520d]">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#b5a774] mb-6">
                            <FadeIn>MMLab @ HKU</FadeIn>
                        </h1>
                        <FadeIn>
                            <p className="text-white">
                                x fdsafvea rea asveracv wacv weWe explore how scalable robot data can address real-world challenges for generalized robotic manipulation. Introducing AgiBot World, a large-scale platform comprising over 1 million trajectories across 217 tasks in five deployment scenarios, we achieve an order-of-magnitude increase in data scale compared to existing datasets.
                            </p>
                        </FadeIn>
                        <FadeIn>
                            <p className="text-white">
                                Accelerated by a standardized collection pipeline with human-in-the-loop verification, AgiBot World guarantees high-quality and diverse data distribution. It is extensible from grippers to dexterous hands and visuo-tactile sensors for fine-grained skill acquisition. Building on top of data, we introduce Genie Operator-1 (GO-1), a novel generalist policy that leverages latent action representations to maximize data utilization, demonstrating predictable performance scaling with increased data volume. Policies pre-trained on our dataset achieve an average performance improvement of 30% over those trained on Open X-Embodiment, both in in-domain and out-of-distribution scenarios. 
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col xl:flex-row-reverse scroll-mt-32" id="MMLab@CUHK">
                <div className="flex-2/5 min-h-96 relative">
                    <Image
                        src="/background/mmlab@cuhk.jpg"
                        alt="mmlab@cuhk"
                        fill
                        className="object-cover object-center loading select-none"
                    />
                </div>
                <div className="flex-3/5">
                    <div className="flex flex-col p-6 pt-10 pb-10 lg:p-20 gap-6 bg-[#652371]">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#e59c2e] mb-6">
                            <FadeIn>MMLab @ CUHK</FadeIn>
                        </h1>
                        <FadeIn>
                            <p className="text-white">
                                The CUHK Multimedia Lab (MMLab) is one of the pioneering institutes on deep learning. In GPU Technology Conference (GTC) 2016, a world-wide technology summit, our lab is recognized as one of the top ten AI pioneers, and listed together with top research groups in the world (e.g. MIT, Stanford, Berkeley, and Univ. of Toronto). Today, we remain one of the most active research labs in computer vision and deep learning, publishing over 40 papers on top conferences (CVPR/ICCV/ECCV/NIPS) every year.
                            </p>
                        </FadeIn>
                        <FadeIn>
                            <p className="text-white">
                                Our lab has a large group of talented students, plenty of computational resources, and steady financial support, and free research environment.
                            </p>
                        </FadeIn>
                        <div className="flex justify-end mt-6">
                            <FadeIn>
                                <Link href="https://mmlab.ie.cuhk.edu.hk/" target="_blank" className="text-[#e59c2e] animated-underline">More</Link>
                                <span className="text-[#e59c2e]">&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col xl:flex-row scroll-mt-32" id="MMLab@NTU">
                <div className="flex-2/5 min-h-96 relative">
                    <Image
                        src="/background/mmlab@ntu.jpg"
                        alt="mmlab@ntu"
                        fill
                        className="object-cover object-center loading select-none"
                    />
                </div>
                <div className="flex-3/5">
                    <div className="flex flex-col p-6 pt-10 pb-10 lg:p-20 gap-6 bg-[#181C62]">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D71440] mb-6">
                            <FadeIn>MMLab @ NTU</FadeIn>
                        </h1>
                        <FadeIn>
                            <p className="text-white">
                                MMLab@NTU was formed on the 1 August 2018, with a research focus on computer vision and deep learning. It is now a group with three faculty members and more than 40 members including research fellows, research assistants, research engineers and PhD students.
                            </p>
                        </FadeIn>
                        <FadeIn>
                            <p className="text-white">
                                Members in MMLab@NTU conduct research primarily in low-level vision, image and video understanding, and generative AI. Have a look at the overview of <Link href="https://www.mmlab-ntu.com/research.html" target="_blank" className="text-[#D71440] animated-underline">our research</Link>. All publications are listed <Link href="https://www.mmlab-ntu.com/publication_topic.html" target="_blank" className="text-[#D71440] animated-underline">here</Link>. 
                            </p>
                        </FadeIn>
                        <FadeIn>
                            <p className="text-white">
                                We are always looking for motivated PhD students, postdocs, research assistants who have the same interests like us. Check out the <Link href="https://www.mmlab-ntu.com/careers.html" target="_blank" className="text-[#D71440] animated-underline">careers</Link> page and follow us on <Link href="https://twitter.com/MMLabNTU" target="_blank" className="text-[#D71440] animated-underline">Twitter</Link>.
                            </p>
                        </FadeIn>
                        <div className="flex justify-end mt-6">
                            <FadeIn>
                                <Link href="https://www.mmlab-ntu.com/" target="_blank" className="text-[#D71440] animated-underline">More</Link>
                                <span className="text-[#D71440]">&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
            
                

        </main>
    );
}
