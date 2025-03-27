import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "404",
    description: "404 Not Found",
    keywords: ["404"],
};



import Link from 'next/link'



export default function NotFound() {
    return (
        <main className='h-svh w-full flex flex-col justify-center items-center'>
            <div className="flex flex-col gap-6">
                <h1 className="font-bold text-6xl">
                    404
                </h1>
                <h1 className="font-bold text-6xl">
                    Not Found
                </h1>
                <Link href="/" className='hover:underline'>
                    return home
                </Link>
            </div>
        </main>
    )
}
