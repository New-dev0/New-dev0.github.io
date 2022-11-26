import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chantal Goya</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chantal Goya"/>
        <meta name="description" content="Trending News about Chantal Goya" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chantal Goya</h1>
            <Image width={800} height={500} src="https://cdn-s-www.vosgesmatin.fr/images/C13912F7-7C4E-42C8-8532-DEF5177D9BF1/FB1200/photo-1669398102.jpg" alt="Chantal Goya"/>
            <h3>Recent News</h3>
            <a href='https://www.vosgesmatin.fr/culture-loisirs/2022/11/26/chantal-goya-est-ravie-de-venir-a-gerardmer-et-d-etre-la-marraine-du-marche-de-noel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vosges. « Chantal Goya est ravie de venir à Gérardmer et d&#39;être la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQOClfXx7-L1DqitLQ-WcY-FOF27n-xHFLmJTdsYWNeP31hAa-I0zKdQYIQz_b6HVN7ZCJfN8e" alt="Vosges. « Chantal Goya est ravie de venir à Gérardmer et d&#39;être la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Membres de Gérardmer Animation, Thierry Honoré et Jérôme Hirth attendent avec impatience la venue de Chantal Goya sur la grande scène du marché de Noël&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}