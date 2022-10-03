import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Credit Suisse</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Credit Suisse"/>
        <meta name="description" content="Trending News about Credit Suisse" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Credit Suisse</h1>
            <Image width={800} height={500} src="https://assets.livewiremarkets.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNmlPQXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a73c3b27a51eb8df636af543ba748c5dc2e34c9b/Charts%20and%20Caffeine%20Generic%201.png" alt="Credit Suisse"/>
            <h3>Recent News</h3>
            <a href='https://www.livewiremarkets.com/wires/rumours-swirl-around-credit-suisse-and-morgan-stanley-s-top-materials-picks'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rumours swirl around Credit Suisse, and Morgan Stanley&#39;s top ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTMkcHoDSSpWNylX6zgA2l-fDfPExjYmBDAWa4kJ6ZigUIzrBRtec_C1YSNlp9KtmoNgOmyCPO0" alt="Rumours swirl around Credit Suisse, and Morgan Stanley&#39;s top ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Welcome to Charts and Caffeine - Livewire&#39;s pre-market open news and analysis wrap. We&#39;ll get you across the overnight session and share our best insights&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}