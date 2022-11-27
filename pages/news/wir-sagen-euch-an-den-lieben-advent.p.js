import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wir sagen euch an den lieben Advent</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wir sagen euch an den lieben Advent"/>
        <meta name="description" content="Trending News about Wir sagen euch an den lieben Advent" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wir sagen euch an den lieben Advent</h1>
            <Image width={800} height={500} src="https://media04.meinbezirk.at/article/2022/11/07/0/31613680_XXL.jpg" alt="Wir sagen euch an den lieben Advent"/>
            <h3>Recent News</h3>
            <a href='https://www.meinbezirk.at/c-freizeit/die-schoensten-lieder-rund-um-advent-und-weihnachten_a5694307'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stille Nacht und Co.: Die schönsten Lieder rund um Advent und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTTegaovaWSdy1oxRftkIznxDLSaE0fojXv1Ish0HDy4xkyg48FyZgU8IFIF1nY8_NqHCL_rLo_" alt="Stille Nacht und Co.: Die schönsten Lieder rund um Advent und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Freut euch, ihr Christen! Freuet euch sehr! Schon ist nahe der Herr. 2. Adventssonntag Wir sagen euch an den lieben Advent Sehet, die zweite Kerze brennt. So&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}