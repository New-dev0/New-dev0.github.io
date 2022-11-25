import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bhad Bhabie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bhad Bhabie"/>
        <meta name="description" content="Trending News about Bhad Bhabie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bhad Bhabie</h1>
            <Image width={800} height={500} src="" alt="Bhad Bhabie"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000141173241/web-und-games-newsdie-seltsame-karriere-der-bhad-bhabie-terror'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Web- und Games-News: Die seltsame Karriere der Bhad Bhabie ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Web- und Games-News: Die seltsame Karriere der Bhad Bhabie ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liebe Leserin, lieber Leser,. haben sie schon einmal etwas von Bhad Babie gehört? Nein? Na dann schnallen sie sich besser mal an, wir haben heute nämlich&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}