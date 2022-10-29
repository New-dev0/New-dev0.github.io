import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Flames</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Flames"/>
        <meta name="description" content="Trending News about Flames" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Flames</h1>
            <Image width={800} height={500} src="" alt="Flames"/>
            <h3>Recent News</h3>
            <a href='https://judolphins.com/news/2022/10/27/womens-soccer-dolphins-fall-to-flames-in-postseason-action.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dolphins Fall to Flames in Postseason Action</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8ax7oOXqqF_kvx-AYYlExpQEOFEusp3WnkXInyAJ8aaMJ92p3H3iNVYfg6ohvgqMsE4BrZQ4w" alt="Dolphins Fall to Flames in Postseason Action" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lynchburg, Va. – The eighth-seeded Jacksonville women&#39;s soccer program fell to the one-seeded Liberty Flames, 3-0, Thursday evening in the opening round of&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}