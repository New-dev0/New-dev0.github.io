import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nagula chavithi 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nagula chavithi 2022"/>
        <meta name="description" content="Trending News about Nagula chavithi 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nagula chavithi 2022</h1>
            <Image width={800} height={500} src="" alt="Nagula chavithi 2022"/>
            <h3>Recent News</h3>
            <a href='https://zeenews.india.com/telugu/spiritual/nagula-chaviti-on-29th-october-2022-puja-vidhanam-and-significance-80837'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nagula Chaviti 2022: ఈ ఏడాది నాగుల చవితి ఎప్పుడు, పూజా విధానం ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQcDLSVBAEk67I_YJczR_JI3yS201PKYnNYxZtPv_ZP_9BziO1bWzid7MLmIEOQutbtbrAZcU7Aew" alt="Nagula Chaviti 2022: ఈ ఏడాది నాగుల చవితి ఎప్పుడు, పూజా విధానం ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nagula Chaviti 2022: హిందూ సంప్రదాయం ప్రకారం, కార్తీక శుద్ధ చతుర్థినే నాగుల చవితి అంటారు.</p></div>
            </div>
        </a>
        </Template></>;
}