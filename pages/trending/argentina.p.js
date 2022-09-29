import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Argentina"/>
        <meta name="description" content="Trending News about Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentina</h1>
            <Image width={800} height={500} src="https://reliefweb.int/sites/default/files/styles/large/public/previews/30/52/3052a364-6afc-4a74-a5ce-c9d8fc4410bb.png" alt="Argentina"/>
            <h3>Recent News</h3>
            <a href='https://reliefweb.int/report/argentina/argentina-wildfires-dref-final-report-dref-operation-ndeg-mdrar018'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina: Wildfires - DREF Final Report, DREF Operation n ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTQcvHuGmGMBPOGB-l0OwDtj5Y0fJ3bLbCZyLBDkMdmFZ9P7JPC00uoUXs_fkDTddsB4uNUa2Sq" alt="Argentina: Wildfires - DREF Final Report, DREF Operation n ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Situation Report in English on Argentina about Agriculture, Food and Nutrition, Wild Fire and more; published on 27 Sep 2022 by IFRC.</p></div>
            </div>
        </a>
        </Template></>;
}