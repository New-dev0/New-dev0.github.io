import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Venezuela</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Venezuela"/>
        <meta name="description" content="Trending News about Venezuela" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Venezuela</h1>
            <Image width={800} height={500} src="https://cdn.folhabv.com.br/images/noti-1668546202.webp" alt="Venezuela"/>
            <h3>Recent News</h3>
            <a href='https://folhabv.com.br/noticia/POLITICA/Brasil/Escassez-energetica-leva-ocidente-a-se-reaproximar-da-Venezuela/92448'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Escassez energética leva ocidente a se reaproximar da Venezuela</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQYCi_kBh6TnqK85GLIrQtyQgntytWSMsdWlAImtyI8QFmUtxrwHSQXM0Vb9vUddnYqbt2e62Mg" alt="Escassez energética leva ocidente a se reaproximar da Venezuela" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Macron apoiou Guaidó como presidente interino, mas o respaldo vem enfraquecendo, principalmente em razão da crise energética como resultado da guerra na Ucrânia&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}