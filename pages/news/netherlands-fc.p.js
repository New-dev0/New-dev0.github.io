import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Netherlands FC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Netherlands FC"/>
        <meta name="description" content="Trending News about Netherlands FC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Netherlands FC</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt389613d2f6b5e80b/637102e57ae7a90ff88d987f/GettyImages-1429443427.jpg" alt="Netherlands FC"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-za/news/ricardo-pepi-usmnt-netherlands-world-cup/bltf15d54a659d9ff46'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Ricardo Pepi dons Netherlands shirt after USMNT&#39;s World ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSe7i6LDxntXrvitYonsB4TBZGitjv6EeN9-8Z5EeT7J4QOHW2ELiHMghpqHmvzTa4_tRYGbttJ" alt="WATCH: Ricardo Pepi dons Netherlands shirt after USMNT&#39;s World ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>USMNT international Ricardo Pepi has been spotted wearing a Netherlands shirt after his nation were knocked out of the World Cup.</p></div>
            </div>
        </a>
        </Template></>;
}