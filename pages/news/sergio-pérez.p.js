import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sergio pérez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sergio pérez"/>
        <meta name="description" content="Trending News about Sergio pérez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sergio pérez</h1>
            <Image width={800} height={500} src="https://www.motorsport-total.com/img/sm/273864_mst.jpg?rf=1668502411" alt="Sergio pérez"/>
            <h3>Recent News</h3>
            <a href='https://www.motorsport-total.com/formel-1/news/twitter-studie-welcher-f1-fahrer-die-meisten-fake-follower-hat-22111503'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter-Studie: Welcher F1-Fahrer die meisten Fake-Follower hat</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS3rFvREoa8ecTv8tJB-liEK_ZLcBhKsT7RSneCW9rO0OzQovSAEh1Au2NiYpDI-oLVfUmn5AvA" alt="Twitter-Studie: Welcher F1-Fahrer die meisten Fake-Follower hat" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter will Fake-Accounts an den Kragen - Das könnte die Follower-Zahlen einiger Formel-1-Fahrer drastisch reduzieren - Wer am stärksten betroffen wäre.</p></div>
            </div>
        </a>
        </Template></>;
}