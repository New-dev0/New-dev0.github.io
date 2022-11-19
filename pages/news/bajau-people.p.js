import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bajau people</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bajau people"/>
        <meta name="description" content="Trending News about Bajau people" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bajau people</h1>
            <Image width={800} height={500} src="https://ocdn.eu/pulscms-transforms/1/wQHktkpTURBXy81NmYxMGY2MzAzOGM0ODcyYjA5NDRmZDEzNDIxMjExOC5qcGeSlQMAzGPNBuLNA9-TBc0EsM0Cdg" alt="Bajau people"/>
            <h3>Recent News</h3>
            <a href='https://www.pulse.ng/lifestyle/food-travel/the-bajau-people-spend-most-of-their-lives-underwater-heres-how-they-survive/fyd6z36'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Bajau people spend most of their lives underwater, here&#39;s how ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTCx5BvoCj2BpO7kE2B57mx5eZ5uWmlS5rItAhhvFS-dZa-ChreHI1-32fNhOGZNOXThoGZMIGc" alt="The Bajau people spend most of their lives underwater, here&#39;s how ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Imagine spending all your day swimming in the sea, how would you survive? | Pulse Nigeria.</p></div>
            </div>
        </a><a href='https://www.ghgossip.com/bajau-people-why-they-spend-their-lives-underwater/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bajau People: Why They Spend Most Of Their Lives Underwater</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQNPFwNabOckROztu7hn15_NmaAEhWIHprTvt-tQcR__dsc0MzEVKEgnal1jG3FoAc7tbxAiXmN" alt="Bajau People: Why They Spend Most Of Their Lives Underwater" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bajau tribe was discovered during the 18th century when they were living in the areas of Maritime Southeast Asia. They have been nicknamed &#39;Sea Nomads&#39; or &#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://culturacolectiva.com/history/bajau-tribe-phillippines-sea-nomads-hold-breath-longest/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bajau, the tribe that dives the deepest for the longest time</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS2AStesNo2fyvXmXqBUGFXKBo2wPEjH3k5RwoTkTsveHs1SCt4CGd8ex1msV2iIf5eb9wiiK88" alt="Bajau, the tribe that dives the deepest for the longest time" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Called Bajau, the people are known as “sea nomads” or “sea gypsies” and, like almost all traditional indigenous peoples, they have lived in their territory and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}