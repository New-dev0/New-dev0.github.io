import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Suryakumar Yadav</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Suryakumar Yadav"/>
        <meta name="description" content="Trending News about Suryakumar Yadav" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Suryakumar Yadav</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/09/Surya.jpg" alt="Suryakumar Yadav"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/cricket/what-made-ravi-shastri-call-suryakumar-yadavs-six-off-daniel-sams-as-the-shot-of-the-match-8172754/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What made Ravi Shastri call Suryakumar Yadav&#39;s six off Daniel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRnglhm1B7kYowNS379xdabdMZ2P0WFCNa8sMYKB2n44L_wrmpimUIxmUR8boM79E00aYofwOOy" alt="What made Ravi Shastri call Suryakumar Yadav&#39;s six off Daniel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Suryakumar Yadav charged the left-arm pacer to hit an outrageous on-the-up six over long-off, bringing back memories of Sachin Tendulkar rushing Glen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}