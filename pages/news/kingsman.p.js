import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kingsman</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kingsman"/>
        <meta name="description" content="Trending News about Kingsman" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kingsman</h1>
            <Image width={800} height={500} src="https://de.web.img3.acsta.net/img/fa/ca/facadb07cc041736ae134b2f0b1a2943.jpg" alt="Kingsman"/>
            <h3>Recent News</h3>
            <a href='https://www.filmstarts.de/nachrichten/1000003128.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TV-Warnung für heute: Dieses saubrutale Action-Feuerwerk ist eine ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTKJy-fEe9T-DXTBSe_4H7cHdx1ulAwfa1TL9JoYL4QZlgLi4QUFj_wD0g6ByceV0FFB1NKcZKv" alt="TV-Warnung für heute: Dieses saubrutale Action-Feuerwerk ist eine ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Blutige Schießereien, spektakuläre Kampf-Choreographien und jede Menge wahnwitzige Ideen – genau das bietet Matthew Vaughns „Kingsman: The Secret Service“&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}