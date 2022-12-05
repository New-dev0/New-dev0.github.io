import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Uğur Aslan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Uğur Aslan"/>
        <meta name="description" content="Trending News about Uğur Aslan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Uğur Aslan</h1>
            <Image width={800} height={500} src="https://i.hbrcdn.com/haber/2022/12/04/ugur-aslan-esi-sema-ergenekon-kimdir-sema-15472838_9765_amp.jpg" alt="Uğur Aslan"/>
            <h3>Recent News</h3>
            <a href='https://www.haberler.com/haberler/ugur-aslan-esi-sema-ergenekon-kimdir-sema-15472838-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uğur Aslan eşi Sema Ergenekon kimdir? Sema Ergenekon hastalığı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQKEN_VXvVOULtq8poyDa10t3QaCUOATpThgrP6tRjZfaT5WwD3uOdCPm6fmTeADWb5vQOfiKR4" alt="Uğur Aslan eşi Sema Ergenekon kimdir? Sema Ergenekon hastalığı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Altın Kelebek ödüllerinde en iyi senarist ödülünü kazanan Sema Ergekon hastalığı neydi, kanser mi merak ediliyor. Uğur Aslan eşi Sema Ergenekon kimdir,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}