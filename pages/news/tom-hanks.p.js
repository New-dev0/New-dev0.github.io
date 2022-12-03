import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tom Hanks</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tom Hanks"/>
        <meta name="description" content="Trending News about Tom Hanks" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tom Hanks</h1>
            <Image width={800} height={500} src="https://images.ladepeche.fr/api/v1/images/view/6389e1fa5cadd03af3237758/large/image.jpg?v=1" alt="Tom Hanks"/>
            <h3>Recent News</h3>
            <a href='https://www.ladepeche.fr/2022/12/02/tom-hanks-lance-son-cafe-pour-soutenir-les-veterans-americains-10842232.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tom Hanks lance son café pour soutenir les vétérans américains</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSQ9b2iSddGzhjcGl5ixhFkZYHJNDxzA-I0VzS3VtoIGHz65gpQQuMP14pSZImFRjBaqpiPcSF" alt="Tom Hanks lance son café pour soutenir les vétérans américains" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(ETX Daily Up) - La dimension sociale du café ne cesse d&#39;être abreuvée par de nouveaux projets. Le dernier en date consiste à venir en aide aux anciens&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}