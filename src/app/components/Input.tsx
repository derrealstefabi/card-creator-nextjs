import React from "react";


export function Input({name, label, placeholder}: { name: string, label?: string, placeholder?: string }) {
    return (
        <label>
            {label}
            <input name={name} placeholder={placeholder}
                   className={"inline-block rounded-md border " +
                       "border-gray-300 px-3 py-2 me-5 placeholder-gray-400 shadow-sm " +
                       "invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 " +
                       "focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 " +
                       "disabled:text-gray-500 disabled:shadow-none sm:text-sm dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"}/>
        </label>
    );
}
