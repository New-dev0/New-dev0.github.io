import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Clement Beaune</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Clement Beaune"/>
        <meta name="description" content="Trending News about Clement Beaune" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Clement Beaune</h1>
            <Image width={800} height={500} src="https://resize.marianne.net/r/1540,924/img/var/LQ11177883C/657034/ipiccy_image29.jpg" alt="Clement Beaune"/>
            <h3>Recent News</h3>
            <a href='https://www.marianne.net/politique/gouvernement/clement-beaune-rachel-keke-philippe-juvin-ces-deputes-qui-risquent-leur-siege-en-cas-de-dissolution'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clément Beaune, Rachel Keke, Philippe Juvin… Ces députés qui ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQY4tXRFh3fxOnd-K0iECZujiatFsqLg_xW4nRher8rbrhDDQm4LBJjpIQ1aOsFlolPBxiE4m85" alt="Clément Beaune, Rachel Keke, Philippe Juvin… Ces députés qui ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En cas de législatives anticipées, les ministres Clément Beaune et Stanislas Guerini pourraient perdre leur siège au Palais-Bourbon – et leur place au&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}