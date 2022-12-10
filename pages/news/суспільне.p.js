import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Суспільне</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Суспільне"/>
        <meta name="description" content="Trending News about Суспільне" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Суспільне</h1>
            <Image width={800} height={500} src="" alt="Суспільне"/>
            <h3>Recent News</h3>
            <a href='https://suspilne.media/335336-kolisne-prifrontove-selo-ak-zive-partizanske-so-na-mikolaivsini/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Колишнє прифронтове село. Як живе Партизанське, що на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRkyalOOoJYADePS1IEVho1SNQf7Uv13NJ49Uuk-poJQLpr4ZNwauI44MJ2b__EOxVgOSKKYPX8" alt="Колишнє прифронтове село. Як живе Партизанське, що на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Село Партизанське, що на Миколаївщині, майже зруйноване. Населений пункт був прифронтовим. До початку повномасштабної вторгнення в ньому&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}