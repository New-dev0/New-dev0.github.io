import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


export default function WebPage() {
    const router = useRouter();
    const [height, setHeight] = useState();

    const {url} = router.query;
    useEffect(() => setHeight(window.screen.height));

    return <>
    <Head>
        <title>Read</title>
    </Head>
    <iframe width={"100%"} style={{minHeight: "100vh"}}  height={height} src={`https://readability-bot.vercel.app/api/readability?url=${url}`}/>
    </>
}