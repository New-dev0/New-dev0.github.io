import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Manuel Neuer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Manuel Neuer"/>
        <meta name="description" content="Trending News about Manuel Neuer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Manuel Neuer</h1>
            <Image width={800} height={500} src="https://images.oe24.at/GettyImages-1443912836_Neuer.jpg/1600x900Crop/537.140.756" alt="Manuel Neuer"/>
            <h3>Recent News</h3>
            <a href='https://www.oe24.at/sport/fussball/weltmeisterschaft/wird-manuel-neuer-zum-pleiten-kapitaen/537142048'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wird Manuel Neuer zum Pleiten-Kapitän?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQOAUxjD4INYykmmYEAwzrQjk5UmSosymfvA0FZxzzp-ZaN1Oki8SHzVWIpBDweRT3Zu9L_Efhf" alt="Wird Manuel Neuer zum Pleiten-Kapitän?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manuel Neuer wird als einer der besten Torhüter in die Fußball-Geschichte eingehen. Doch als Kapitän der deutschen Nationalmannschaft kann er keine Erfolge&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}