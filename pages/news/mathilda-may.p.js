import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mathilda May</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mathilda May"/>
        <meta name="description" content="Trending News about Mathilda May" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mathilda May</h1>
            <Image width={800} height={500} src="https://i.f1g.fr/media/eidos/1200x630_crop/2022/11/21/XVM5db9eb4a-69a5-11ed-8120-caf1cbf1b857.jpg" alt="Mathilda May"/>
            <h3>Recent News</h3>
            <a href='https://www.lefigaro.fr/theatre/theatre-mathilda-may-ou-la-mise-en-scene-sans-mot-dire-20221121'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Théâtre: Mathilda May ou la mise en scène sans mot dire</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSIkcr16YUd9R_4PLhqDv528UN6LZZ3bBGZW9xFn-1HflmC3NuPcLrOUg4s2b0nyoqN697krNs3" alt="Théâtre: Mathilda May ou la mise en scène sans mot dire" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PORTRAIT - Ancienne danseuse, la comédienne et auteur met en scène, au Studio Marigny, à Paris, Make Up, un nouveau spectacle burlesque, efficace.</p></div>
            </div>
        </a>
        </Template></>;
}