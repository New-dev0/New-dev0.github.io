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
            <a href='https://www.santaclaraca.gov/Home/Components/News/News/44112/95?backlist=%2Four-city%2Fdepartments-g-z%2Fpolice-department'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>News | City of Santa Clara</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwNBo2Bk9peGblVnJasNsT_LmtYeLo0YNQeWexo03-EHMu9tADxjbnS92zod2UfcN383FEo51F" alt="News | City of Santa Clara" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kavalli was at a recent San Francisco 49ers football game, introduced himself to a handful of police officers and let them know he wants to work in law&nbsp;...</p></div>
            </div>
        </a><a href='https://www.paloaltoonline.com/news/2022/11/30/youth-community-service-receives-225000-from-santa-clara-county'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Youth Community Service receives $225000 from Santa Clara County</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDbLQHU2XHfKxf09lfSJrRiNbXKdQLwiL_d13FAoXIUaCZVupD877MO577ckC2lgrQiYG__SDU" alt="Youth Community Service receives $225000 from Santa Clara County" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Funds will support youth mental health services by expanding substance and suicide prevention programs ... Student peer leaders in Youth Connect work together on&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}