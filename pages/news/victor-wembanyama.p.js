import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Victor Wembanyama</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Victor Wembanyama"/>
        <meta name="description" content="Trending News about Victor Wembanyama" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Victor Wembanyama</h1>
            <Image width={800} height={500} src="https://www.parlons-basket.com/wp-content/uploads/2022/11/EDF-Victor-Wembanyama-Vincent-Collet.jpg" alt="Victor Wembanyama"/>
            <h3>Recent News</h3>
            <a href='https://www.parlons-basket.com/2022/12/03/france-furax-vincent-collet-secoue-victor-wembanyama-comme-jamais/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France - Contrarié, Vincent Collet secoue Victor Wembanyama ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR3vM_wUlGyCFKW9IXRsMUQr4huF6s3xvnTVESEokazB1hTNsnKWUIBPuBJyZeaqoQRftT19maw" alt="France - Contrarié, Vincent Collet secoue Victor Wembanyama ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Et Victor Wembanyama, jamais ouvertement critiqué par son coach jusque là, en a notamment pris pour son grade. Publicité. Les semaines passent, et avec elles&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}