import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Blood and Water</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Blood and Water"/>
        <meta name="description" content="Trending News about Blood and Water" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Blood and Water</h1>
            <Image width={800} height={500} src="" alt="Blood and Water"/>
            <h3>Recent News</h3>
            <a href='https://www.iol.co.za/saturday-star/news/blood-and-water-has-given-me-my-big-break-as-an-actress-katishcka-kiara-22093535-c8e2-47f8-85ca-6ba12addf8ed'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Blood &amp; Water has given me my big break as an actress&#39;– Katishcka ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSyapmDcEnqF0tpd3031RJpX03_fHp-l9CEh0DBuPaZb--gFC78GTfRiuc38hiW5gU80lh7TU_X" alt="&#39;Blood &amp; Water has given me my big break as an actress&#39;– Katishcka ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Actress Katishcka Kiara plays the role of Pauline in hit Netflix show “Blood &amp; Water.” Supplied image. Published 12h ago. Written by. Sameer Naik.</p></div>
            </div>
        </a>
        </Template></>;
}