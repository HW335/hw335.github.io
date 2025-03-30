import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "404 | MMLab",
    description: "404 Not Found",
    keywords: ["404", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



// import Link from 'next/link'



import { FadeIn } from "@/components/animation/fade-in"




export default function NotFound() {
    return (
        <main>
            <div className="w-full h-svh flex flex-row justify-center items-center pl-6 pr-6 bg-gradient-to-br from-[#b5a774] via-[#e59c2e] to-[#D71440] bg-fixed">
                <div className="w-full max-w-7xl flex flex-col gap-6 select-none">
                    <FadeIn>
                        <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                            404
                        </h1>
                    </FadeIn>
                    <FadeIn>
                        <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                            Not Found
                        </h1>
                    </FadeIn>
                    {/* <Link href="/" className='font-bold text-white animated-underline'>
                        return home
                    </Link> */}
                </div>
            </div>
        </main>
    )
}
