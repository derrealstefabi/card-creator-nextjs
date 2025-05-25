import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Music APIs",
    description: "Music API playground",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased py-10 px-5 md:px-10 print:p-0`}>
        <nav className={"flex  justify-center mb-8"}>
            <Link href={'/'}><Image width={48} height={48} className={'w-[48px] h-[48px]'} src={'cat.svg'} alt={'home'}></Image></Link>
            <Link href={'/'} className={'ms-auto me-5'}>Card Creator</Link>
            <Link href={'/songstats'}>Show Stats for Song</Link>
        </nav>
        <h1 className={"w-full text-center text-3xl mb-8 print:hidden"}>Card Creator</h1>
        <div
            className={`flex justify-center m-auto w-max max-w-full p-8 rounded-lg bg-gray-800 print:w-full print:bg-white print:p-0`}>
            {children}
        </div>
        </body>
        </html>
    );
}
