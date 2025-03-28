import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "404",
    description: "404 Not Found",
    keywords: ["404"],
};



import Link from 'next/link'



import { FadeIn } from "@/components/animation/fade-in"




export default function NotFound() {
    return (
        <main>
            <div className="w-full h-svh flex flex-row justify-center items-center pl-6 pr-6 bg-gradient-to-br from-indigo-300 via-yellow-400 to-pink-500 bg-fixed">
                <FadeIn>
                    <div className="w-full max-w-7xl flex flex-col gap-6 select-none">
                        <h1 className="font-bold text-3xl sm:text-6xl text-white">
                            404
                        </h1>
                        <h1 className="font-bold text-3xl sm:text-6xl text-white">
                            Not Found
                        </h1>
                        <Link href="/" className='font-bold text-white hover:underline'>
                            return home
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </main>
    )
}
