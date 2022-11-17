import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Johannes Kopf</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Johannes Kopf"/>
        <meta name="description" content="Trending News about Johannes Kopf" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Johannes Kopf</h1>
            <Image width={800} height={500} src="https://heute-at-prod-images.imgix.net/2022/11/15/9e902132-d5c0-48f3-a757-e733fb70853d.jpeg?rect=11%2C0%2C920%2C460&w=1280&auto=format" alt="Johannes Kopf"/>
            <h3>Recent News</h3>
            <a href='https://www.heute.at/s/ams-chef-platzt-kragen-3er-bmw-reicht-nicht-mehr-100238772'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AMS-Chef platzt Kragen: &quot;3er-BMW reicht nicht mehr&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS8lm1lRVXyKDCB-dumqrdL0IdVAuxS2iGeBpbvOkQMbkKS4eacs6oEqLio6wbOWjEaOD9rk1iA" alt="AMS-Chef platzt Kragen: &quot;3er-BMW reicht nicht mehr&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AMS-Chef Johannes Kopf kritisiert, dass Unternehmen derzeit nur schwer Mitarbeiter finden: &quot;Als Arbeitgeber müssen Sie heute um Arbeitskräfte tanzen!&quot;</p></div>
            </div>
        </a>
        </Template></>;
}