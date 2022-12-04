import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Guillaume Canet</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Guillaume Canet"/>
        <meta name="description" content="Trending News about Guillaume Canet" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Guillaume Canet</h1>
            <Image width={800} height={500} src="https://www.legossip.net/wp-content/uploads/2022/12/marion-cotillard-dechiree-par-guillaume-canet-cette-decision-inacceptable-pur-leur-fils.webp" alt="Guillaume Canet"/>
            <h3>Recent News</h3>
            <a href='https://www.legossip.net/marion-cotillard-dechiree-par-guillaume-canet-cette-decision-inacceptable-pur-leur-fils/507761/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marion Cotillard déchirée par Guillaume Canet, cette décision ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRthdvXLvkToRq4Y-MTHnUOJsVVNCgk0ZabgB9t3tQocbFQ0hvQELC5sSvWFHlVyMh-4rqbp5lv" alt="Marion Cotillard déchirée par Guillaume Canet, cette décision ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marion Cotillard vivrait en plein cauchemar à la suite d&#39;une décision de son homme, Guillaume Canet, pour leur fils Marcel. Ce dernier fera en effet ses.</p></div>
            </div>
        </a>
        </Template></>;
}