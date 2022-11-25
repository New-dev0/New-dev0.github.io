import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Thanksgiving</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Thanksgiving"/>
        <meta name="description" content="Trending News about Thanksgiving" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Thanksgiving</h1>
            <Image width={800} height={500} src="" alt="Thanksgiving"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/11/24/1139147068/this-thanksgiving-npr-listeners-reflect-on-the-meaning-of-family'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>This Thanksgiving, NPR listeners reflect on the meaning of family</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="This Thanksgiving, NPR listeners reflect on the meaning of family" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Who gives you strength? Who makes you feel that you belong? NPR&#39;s Rachel Martin asked listeners to reflect on family.</p></div>
            </div>
        </a>
        </Template></>;
}