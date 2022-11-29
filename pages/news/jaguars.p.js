import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jaguars</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jaguars"/>
        <meta name="description" content="Trending News about Jaguars" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jaguars</h1>
            <Image width={800} height={500} src="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fblackandteal.com%2Fwp-content%2Fuploads%2Fimagn-images%2F2017%2F07%2F19496449.jpeg" alt="Jaguars"/>
            <h3>Recent News</h3>
            <a href='https://blackandteal.com/2022/11/27/meme-resurfaces-jaguars-win-ravens/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Turkey meme surfaces again following Jaguars win vs. Ravens</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQoElfo5VaOUSYJzJspDU9voVmZOFxQ-SRCPNAVlMpkdjM-P1evvHz-uF7zNIhopV_S63W6pkJL" alt="Turkey meme surfaces again following Jaguars win vs. Ravens" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jacksonville mayor&#39;s Thanksgiving meme resurfaced following the Jaguars&#39; last-minute win over the Baltimore Ravens in Week 12.</p></div>
            </div>
        </a>
        </Template></>;
}