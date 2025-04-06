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
        <Form action={searchPlaylists}>
            <Input label={"search for a playlist"} name={"query"}></Input>
            <Button submit={true}>Search</Button>
        </Form>
    );
}
