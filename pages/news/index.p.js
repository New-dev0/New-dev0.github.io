import { Template } from "../_template";
import news from "../../public/news.json";
import Head from "next/head";
import {useRouter} from "next/router";

export default function Page() {
    const router = useRouter();
//    console.log(news);
    return <>
    <Head>
        <title>
            News
        </title>
    </Head>
    <Template show_content={false}>
        {Object.entries(news).map(hash => {
            return <div>
                <a href={router.pathname+ `/${hash[0]}`}>
                    {hash[0]}
                    </a>
            </div>
        })}
    </Template>
    </>
}