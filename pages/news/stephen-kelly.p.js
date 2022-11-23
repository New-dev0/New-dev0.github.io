import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Stephen Kelly</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Stephen Kelly"/>
        <meta name="description" content="Trending News about Stephen Kelly" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Stephen Kelly</h1>
            <Image width={800} height={500} src="https://i2-prod.irishmirror.ie/incoming/article28559710.ece/ALTERNATES/s1200/0_CapturePNG.png" alt="Stephen Kelly"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/sport/soccer/who-stephen-kellys-wife-what-28559694'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Stephen Kelly&#39;s wife and what is his net worth?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRBS76yxgVts37GTPbJnhA9ePEt0Ik2Hfi-lr8GQxU_VaKGlEoSmnGFXInr5-Pj8KeN6WkTdWxg" alt="Who is Stephen Kelly&#39;s wife and what is his net worth?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kelly was born in Dublin and played schoolboy football with Belvedere. Who did he play with professionally? Kelly signed for Tottenham in 2000 and had loan&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}