import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"



const components: { title: string; href: string;}[] = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Team",
    href: "team",
  },
]

export function Header() {
    return (
        <ul className="fixed flex flex-row gap-3 p-6">
            {components.map((component) => (
                <Button asChild key={component.title}>
                    <Link href={component.href}>{component.title}</Link>
                </Button>
            ))}
      </ul>
    )
}
