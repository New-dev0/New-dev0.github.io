import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Santa Clara</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Santa Clara"/>
        <meta name="description" content="Trending News about Santa Clara" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Santa Clara</h1>
            <Image width={800} height={500} src="" alt="Santa Clara"/>
            <h3>Recent News</h3>
            <a href='https://www.santaclaraca.gov/Home/Components/News/News/44060/95'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>News | City of Santa Clara</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRbDumgVa5okYpjUZLezBLH8WFY-aw5TiTsIP1fAD5my050XODuM9Ma-1C2GpUXRxq_R0bYXMOW" alt="News | City of Santa Clara" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dorothy Cook (far left) joins a critical part of our law enforcement team as a Records Specialist. The Police Records Unit is responsible for processing crime&nbsp;...</p></div>
            </div>
        </a><a href='https://www.santaclaraca.gov/Home/Components/News/News/44066/95?backlist=%2Four-city%2Fdepartments-g-z%2Fpolice-department'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>News | City of Santa Clara</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTptmHlLGkrnSK4OXruQzZQaqjgZDrnP3nDNLS3vn6dwUrBU5_qkn3IIfpspfnS_EPenL9lLxa2" alt="News | City of Santa Clara" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rehman Aziz is a missing 82-year old resident of our city. He is 5&#39; 7”, medium build, and was last seen in the area of Flora Vista Avenue and Granada Avenue&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}