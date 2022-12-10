import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Seyi Vibez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Seyi Vibez"/>
        <meta name="description" content="Trending News about Seyi Vibez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Seyi Vibez</h1>
            <Image width={800} height={500} src="https://netstorage-legit.akamaized.net/images/1b797aff55351c93.jpg" alt="Seyi Vibez"/>
            <h3>Recent News</h3>
            <a href='https://www.legit.ng/entertainment/celebrities/1508787-style-ko-stylist-ni-seyi-vibez-kicks-asake-comparison-fela-kuti-inspiration/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Style Ko, Stylist Ni”: Seyi Vibez Kicks Asake Comparison, Says Fela ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRgKKt68dYAiLRlNeMP3v_IXi_uR_4vo2d1TjQctRLG2c-hckwWySe2eb2znxKnSLoR-L02DWx" alt="“Style Ko, Stylist Ni”: Seyi Vibez Kicks Asake Comparison, Says Fela ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seyi Vibez has set the records straight and said late Fela Kuti is his only inspiration. He said this in reaction to those likening his style to that of&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}