import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ivana Knoll</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ivana Knoll"/>
        <meta name="description" content="Trending News about Ivana Knoll" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ivana Knoll</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2866591/ve43608/og_image.jpg" alt="Ivana Knoll"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2866566'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ivana Knoll - Ex-Miss, Kroatien-Fan: Respektlos gegenüber Katar?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1GeSDhQIpqiiP4WPhe49f3JDXGBCg6uT0tx0Z89mEG7LX_Gy7MZnVE940xVte5Kd4r7bVrX2dMg" alt="Ivana Knoll - Ex-Miss, Kroatien-Fan: Respektlos gegenüber Katar?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sie schlendert im Kroatien-Muster-Badeanzug über die Promenade und posiert im Stadion mit über-üppigem Dekolleté . Mitten in Katar, einem ...</p></div>
            </div>
        </a>
        </Template></>;
}