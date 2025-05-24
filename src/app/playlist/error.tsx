'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Link from "next/link";

export default function PlaylistError({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2 className={'mb-3'}>Something went wrong, did you input a valid link?</h2>
            <Link href='/' className={`rounded-md bg-sky-500 px-5 py-2.5 text-sm leading-5 font-semibold text-white hover:bg-sky-700`}>
                Go back
            </Link>
        </div>
    )
}