import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.scss";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased p-10 print:p-0`}>
        <h1 className={"w-full text-center text-3xl mb-8 print:hidden"}>Card Creator</h1>
        <div
            className={`flex justify-center m-auto w-max max-w-full p-8 rounded-lg bg-gray-800 print:w-full print:bg-white print:p-0`}>
            {children}
        </div>
        </body>
        </html>
    );
}
