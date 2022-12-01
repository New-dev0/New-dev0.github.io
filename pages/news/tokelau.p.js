import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tokelau</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tokelau"/>
        <meta name="description" content="Trending News about Tokelau" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tokelau</h1>
            <Image width={800} height={500} src="" alt="Tokelau"/>
            <h3>Recent News</h3>
            <a href='https://www.einnews.com/pr_news/603944538/spto-hosts-sustainable-tourism-policy-workshop-training-for-tokelau'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SPTO hosts Sustainable Tourism Policy Workshop training for Tokelau</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="SPTO hosts Sustainable Tourism Policy Workshop training for Tokelau" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Pacific Tourism Organisation (SPTO) hosted a consultation workshop with the Tokelau Department of Economic Development, Natural Resources and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}