import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jordan veretout</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jordan veretout"/>
        <meta name="description" content="Trending News about Jordan veretout" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jordan veretout</h1>
            <Image width={800} height={500} src="" alt="Jordan veretout"/>
            <h3>Recent News</h3>
            <a href='https://www.ouest-france.fr/sport/coupe-du-monde/si-jordan-veretout-rentre-avec-la-coupe-du-monde-c-est-jour-ferie-a-belligne-da4a4ccc-70da-11ed-b658-d40122929dc2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Si Jordan Vérétout rentre avec la Coupe du monde, c&#39;est jour férié ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSD2r61gxJXH0QuX6bjyCN9gRG3ut7qs4T04XDoVORDqtXuBXRMp9GH9Z0IifHTqeQOFXvavnfs" alt="« Si Jordan Vérétout rentre avec la Coupe du monde, c&#39;est jour férié ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mazamet dans le Tarn a son « Jaja », Laurent Jalabert. Belligné, en Loire-Atlantique, a son « Jojo ». ﻿Dans le bourg de 1 800 âmes, c&#39;est ainsi qu&#39;est&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}