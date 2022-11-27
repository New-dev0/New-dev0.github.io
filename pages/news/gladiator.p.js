import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gladiator</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gladiator"/>
        <meta name="description" content="Trending News about Gladiator" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gladiator</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/731240/v2c98dd/og_image.jpg" alt="Gladiator"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2866873'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lauern beim Kolosseum - Touristen erpresst: „Gladiatoren“ in Rom ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJ0q_8B3j7-G04BseyXbA4fsc8ncgCGTR3opBTYGxspJ6RaBxFYiPQsgo3tfC9qo_8N0lN6YuC" alt="Lauern beim Kolosseum - Touristen erpresst: „Gladiatoren“ in Rom ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Als Gladiatoren verkleidete Männer, die sich gegen Entgelt mit Touristen fotografieren lassen, sorgen in Rom immer wieder für Ärger. Die Polizei hat ...</p></div>
            </div>
        </a>
        </Template></>;
}