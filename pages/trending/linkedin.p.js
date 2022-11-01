import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>LinkedIn</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,LinkedIn"/>
        <meta name="description" content="Trending News about LinkedIn" /></Head><Template>
            <h1 style={{fontSize: "30"}}>LinkedIn</h1>
            <Image width={800} height={500} src="https://i.insider.com/63602b5b5ff33600197571bb?width=1200&format=jpeg" alt="LinkedIn"/>
            <h3>Recent News</h3>
            <a href='https://www.businessinsider.com/guides/tech/does-linkedin-have-read-receipts'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How read receipts work on LinkedIn, and how to turn them on or off</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWEnz7ObLPBcrHq857h9z3Q0SlWy9xHKikcFC3yYZ8Ed9uIhDXstR3zV_3OWeICc9s4SapIpNV" alt="How read receipts work on LinkedIn, and how to turn them on or off" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By default, LinkedIn displays read receipts and typing indicators to people you are chatting with. Here&#39;s how to turn those features on or off.</p></div>
            </div>
        </a><a href='https://www.weforum.org/agenda/2022/10/climate-change-environmental-jobs/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Environmental jobs: These are the key trends, LinkedIn says</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSxA2a460o9ahqo6f-2zMMXdEDobVpkbnMWgLAtJrGzC4vbsG52_EM4xNiU0t9tfyDkEULfpdSw" alt="Environmental jobs: These are the key trends, LinkedIn says" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Green entrepreneurship is growing faster than overall entrepreneurship, says LinkedIn&#39;s Global Green Skills Report 2022. And more jobs need green skills.</p></div>
            </div>
        </a>
        </Template></>;
}