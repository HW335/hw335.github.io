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
        <ul className="fixed flex flex-row gap-3 m-6">
            {components.map((component) => (
                <Button asChild key={component.title} className="bg-white text-soft-black hover:bg-amber-400">
                    <Link href={component.href}>{component.title}</Link>
                </Button>
            ))}
        </ul>
    )
}
