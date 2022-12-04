import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Udo Jürgens</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Udo Jürgens"/>
        <meta name="description" content="Trending News about Udo Jürgens" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Udo Jürgens</h1>
            <Image width={800} height={500} src="https://www.ndr.de/fernsehen/screenshot1452234_v-contentxl.jpg" alt="Udo Jürgens"/>
            <h3>Recent News</h3>
            <a href='https://www.ndr.de/fernsehen/sendungen/das/DAS-mit-Saengerin-und-Schauspielerin-Jenny-Juergens,dasx30590.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DAS! mit Sängerin und Schauspielerin Jenny Jürgens</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS2PxP6qqms5mDaDdPvoHBGoyB4aTKrsI3p60HpGWcqHTp_MJNimroEx5PZHD7BoKLnEhZ1ll1Y" alt="DAS! mit Sängerin und Schauspielerin Jenny Jürgens" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Erinnerung an ihren Vater, darum geht es ihr. Nun veröffentlicht sie ein neues Album mit Liedern von Udo Jürgens.</p></div>
            </div>
        </a>
        </Template></>;
}