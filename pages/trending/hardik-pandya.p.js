import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hardik Pandya</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hardik Pandya"/>
        <meta name="description" content="Trending News about Hardik Pandya" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hardik Pandya</h1>
            <Image width={800} height={500} src="https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif" alt="Hardik Pandya"/>
            <h3>Recent News</h3>
            <a href='https://www.123telugu.com/mnews/hardik-pandya-parties-with-ram-charan.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hardik Pandya parties with Ram Charan | 123telugu.com</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYlpZbYmfgQJA3RdLPytPBhTPD_jE51yZGOssYrEHzvE0X_JXdx0zpVfhZT9d4wxv_8V2LADcE" alt="Hardik Pandya parties with Ram Charan | 123telugu.com" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The news is that Ram Charan invited allrounder Hardik Pandya and a few other cricketers of the Indian cricket team yesterday after the match between India and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}