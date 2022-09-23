import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RedirectResponse() {
    const router = useRouter();
    useEffect(() => {
        router.push("/");
    }, []);
    return <>
    </>
}