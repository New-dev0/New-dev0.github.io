import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mexico</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mexico"/>
        <meta name="description" content="Trending News about Mexico" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mexico</h1>
            <Image width={800} height={500} src="https://media04.meinbezirk.at/article/2022/11/24/5/31846885_XXL.jpg" alt="Mexico"/>
            <h3>Recent News</h3>
            <a href='https://www.meinbezirk.at/moedling/c-sport/platz-5-fuer-michi-weiss-in-mexico_a5731459'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Triathlon: Platz 5 für Michi Weiss in Mexico - Mödling</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQaTpOKutac3jGw0Fynseu_ZZygWJ6Gdf54qtT7t6t7VoshLaNvyfEAaSGdgPLmm2Z5TiEOZ6q0" alt="Triathlon: Platz 5 für Michi Weiss in Mexico - Mödling" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BEZIRK MÖDLING. Der Gumpoldskirchner Michi Weiss erreichte beim Ironman Mexiko auf Cozumel den 5. Platz in einer Zeit von 7:56:55.</p></div>
            </div>
        </a>
        </Template></>;
}