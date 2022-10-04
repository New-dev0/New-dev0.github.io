import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Shan Masood</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Shan Masood"/>
        <meta name="description" content="Trending News about Shan Masood" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Shan Masood</h1>
            <Image width={800} height={500} src="https://www.globalvillagespace.com/wp-content/uploads/2022/10/3447111-1950781757.jpg" alt="Shan Masood"/>
            <h3>Recent News</h3>
            <a href='https://www.globalvillagespace.com/fans-trash-shan-masood-on-sisters-death-anniversary-tweet/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fans trash Shan Masood on sister&#39;s death anniversary tweet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTMbZdFxhdaGb_Vnz4BkqqxTC5hnBFkqQrX5JvZYHFWw4irgqLvelIE7cOZFOM94Y1w6tSdpxB0" alt="Fans trash Shan Masood on sister&#39;s death anniversary tweet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cricket fans posted distasteful comments under the tweet of Shan Masood remembering his sister on her first death anniversary.</p></div>
            </div>
        </a>
        </Template></>;
}