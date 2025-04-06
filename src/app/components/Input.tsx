import React from "react";


export function Input({name, label, placeholder, vertical = false, hideLabel = false}: {
    name: string,
    label?: string,
    placeholder?: string,
    vertical?: boolean,
    hideLabel?: boolean,
}) {
    return (
        <label className={`${vertical ? 'flex flex-col' : ''} w-full`}>
            <div className={`text-xl ${hideLabel && `invisible h-0`}`}>{label}</div>
            <input name={name} placeholder={placeholder}
                   className={`
                       ${vertical ? '' : ' ms-5 '}
                       inline-block rounded-md border
                       border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm
                       invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500
                       focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50
                       disabled:text-gray-500 disabled:shadow-none sm:text-sm dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20
                       `}
            />
        </label>
    );
}
