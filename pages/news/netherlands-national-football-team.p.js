import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Netherlands national football team</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Netherlands national football team"/>
        <meta name="description" content="Trending News about Netherlands national football team" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Netherlands national football team</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb1af0a01314c4e54/637b78ace67141216c8a943c/goal---web-two-way-split--d618d981-5a4a-44eb-b868-0cbd078cd438.jpeg" alt="Netherlands national football team"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en/news/why-netherlands-wear-orange-dutch-oranje-tradition-explained/blt4876b1216a779cb5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why do the Netherlands wear orange? Dutch &#39;Oranje&#39; tradition ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRNTxK0gd3wIMKrLfGf9bjgQ6TmP_hkNMtInxfa1lsLSGa4RBc6tDG_8daE51SA1s9wPiUUWz1p" alt="Why do the Netherlands wear orange? Dutch &#39;Oranje&#39; tradition ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Everything you need to know about why the Netherlands football team wear orange and the meaning behind it.</p></div>
            </div>
        </a>
        </Template></>;
}