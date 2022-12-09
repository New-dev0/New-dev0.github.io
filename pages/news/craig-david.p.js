import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Craig David</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Craig David"/>
        <meta name="description" content="Trending News about Craig David" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Craig David</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/7610/47b0b96979024a9496605538e7774ad7.jpg" alt="Craig David"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/channel/music/news/south-africa-vibes-with-me-craig-david-brings-ts5-show-to-cape-town-20221208'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;South Africa vibes with me&#39;: Craig David brings TS5 show to Cape ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTn3OfdlZ6p3tPpkAMwAye1JJ2MRPteVwHbtzpeIFDrHYwBns4fbEqsIrlFhJX4IlfHays_flsC" alt="&#39;South Africa vibes with me&#39;: Craig David brings TS5 show to Cape ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>British R&amp;B artist Craig David is back in South Africa after two decades and is set to perform a one-night-only show at the GrandWest Arena.</p></div>
            </div>
        </a><a href='https://ewn.co.za/2022/12/08/your-voice-is-beautiful-craig-david-sings-katlego-maboe-s-praises'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Your voice is beautiful&#39;: Craig David sings Katlego Maboe&#39;s praises</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEtwSd-pO6p4KPmZZeXuJvrgtLQE0A5yc_0WWAeWEU462xi5dAqfToomA7UT55UVJVJSIXYcXZ" alt="&#39;Your voice is beautiful&#39;: Craig David sings Katlego Maboe&#39;s praises" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maboe shared a video clip on social media of him and David singing a duet.</p></div>
            </div>
        </a>
        </Template></>;
}