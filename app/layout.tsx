import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});



import {
    Header,
} from "@/components/header"




export const metadata: Metadata = {
    icons: {
        icon: [
            {
                url: "/logos/jc_stem_lab.png",
                href: "/logos/jc_stem_lab.png",
            },
        ],
    },
};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.className}>
            <body>


                <header>
                    <Header/>
                </header>



                {children}


                
            </body>
        </html>
    );
}
