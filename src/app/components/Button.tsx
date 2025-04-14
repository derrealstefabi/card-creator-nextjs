import React from "react";


export function Button({children, onClick, submit}: {
    children: React.ReactNode,
    onClick?: () => void,
    submit?: boolean,
}) {
    return <button
        onClick={onClick}
        type={submit ? "submit" : "button"}
        className={`rounded-md bg-sky-500 px-5 py-2.5 text-sm leading-5 font-semibold text-white hover:bg-sky-700`}>
        {children}
    </button>
}
