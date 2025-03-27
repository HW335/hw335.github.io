import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"



const components: { title: string; href: string;}[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Team",
        href: "/team",
    },
    {
        title: "404",
        href: "/404",
    },
]

export function Header() {
    return (
        <header>
            <ul className="fixed flex flex-row gap-3 m-6 z-20">
                {components.map((component) => (
                    <Button asChild key={component.title} className="bg-white text-soft-black hover:bg-amber-400">
                        <Link href={component.href}>{component.title}</Link>
                    </Button>
                ))}
            </ul>
            <div className="fixed right-0 bottom-0 m-6 z-20">
                <a href="#" className="text-soft-black bg-white hover:bg-amber-400 rounded-full flex justify-center items-center p-2">
                    <span>
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </span>
                </a>
            </div>
        </header>

    )
}
