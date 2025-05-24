"use client";

import React from "react";


export default function Home() {

    return (
        <div className={'flex flex-col justify-center items-center w-full h-full'}>
            <div className={'self-start mb-5'}>Search for a song to get some interesting stats like BPM, key, etc.</div>
            <div className={'self-start mb-5'}>This is going to use <a href={'https://getsongbpm.com/api'}>https://getsongbpm.com/api</a></div>
            <div className={'self-start mb-5'}>Under construction...</div>
        </div>
    );
}
