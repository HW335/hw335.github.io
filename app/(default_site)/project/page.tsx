import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Project | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Project", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import { Separator } from "@/components/ui/separator"



import { FadeIn } from "@/components/animation/fade-in"




export default function Home() {
    return (
        <main>



            {/* Landing */}
            <div className="w-full h-svh flex flex-row justify-center items-center pl-6 pr-6 bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440] bg-fixed">
                <div className="w-full max-w-7xl flex flex-row justify-start">
                    <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                        <FadeIn>Project</FadeIn>
                    </h1>
                </div>
            </div>



            <FadeIn>
                <div className="w-full flex flex-col lg:flex-row pt-32" id="embodied">
                    <div className="flex-2/5 bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440]"></div>
                    <div className="flex-3/5 flex flex-col p-6 pt-10 pb-10 lg:p-20 gap-6">
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
                <div className="w-full flex flex-col lg:flex-row-reverse pt-32" id="ad">
                    <div className="flex-2/5 bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440]"></div>
                    <div className="flex-3/5 flex flex-col p-6 pt-10 pb-10 lg:p-20 gap-6">
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



            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <Separator className="max-w-7xl mt-20"/>
            </div>



        </main>
    );
}
