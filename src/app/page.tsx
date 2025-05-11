"use client";

import Form from "next/form";
import {Button} from "@/app/components/Button";
import {Input} from "@/app/components/Input";
import {useRouter} from "next/navigation";


export default function Home() {
    const router = useRouter();

    function searchPlaylists(formData: FormData): void {
        const query = formData.get("query") as string;
        if (!query) return;
        router.push(`search?q=${query}`);
    }

    return (
        <Form action={searchPlaylists} className={'flex flex-col justify-center items-center w-lg'}>
            <div className={'mb-8 w-full'}>
                <Input vertical hideLabel label={"Search for a playlist"} placeholder={"Search for a playlist"}
                       name={"query"}></Input>
            </div>
            <div className={'flex flex-col w-3/5'}>
                <Button submit={true}>Search</Button>
            </div>

        </Form>
    );
}
