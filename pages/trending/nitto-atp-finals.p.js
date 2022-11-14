import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nitto ATP Finals</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nitto ATP Finals"/>
        <meta name="description" content="Trending News about Nitto ATP Finals" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nitto ATP Finals</h1>
            <Image width={800} height={500} src="https://www.atptour.com/-/media/images/news/2022/11/13/19/06/ram-salisbury-nitto-atp-finals-2022-sunday.jpg" alt="Nitto ATP Finals"/>
            <h3>Recent News</h3>
            <a href='https://www.atptour.com/en/news/ram-salisbury-granollers-zeballos-nitto-atp-finals-2022-sunday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ram &amp; Salisbury Survive Opening Nitto ATP Finals Rollercoaster ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTi2GvlgGjBEJ7bD_-o2yOxFtRhj8VMtyhJliPvNItcvj07AoRIdzSZeER9AQFD3fqExGIRLSEq" alt="Ram &amp; Salisbury Survive Opening Nitto ATP Finals Rollercoaster ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Will this be the year Rajeev Ram and Joe Salisbury emerge victorious at the Nitto ATP Finals? The American-British duo made a good start on Sunday evening&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}