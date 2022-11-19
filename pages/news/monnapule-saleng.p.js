import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Monnapule Saleng</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Monnapule Saleng"/>
        <meta name="description" content="Trending News about Monnapule Saleng" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Monnapule Saleng</h1>
            <Image width={800} height={500} src="http://www.thesouthafrican.com/wp-content/uploads/2022/11/Fhw2FYFWIAEfkiI-scaled.jpg" alt="Monnapule Saleng"/>
            <h3>Recent News</h3>
            <a href='https://www.thesouthafrican.com/sport/watch-saleng-to-exit-pirates-18-november-2022-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH | Monnapule Saleng wants to play overseas! [VIDEO]</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQdoNX9osip7WpuOr8R46_JNs2KwDZQtG7-BswpTWYqH_R1qtb6Q1EoGUY7mtWv3lddYmm_UrRU" alt="WATCH | Monnapule Saleng wants to play overseas! [VIDEO]" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Need your news quickly? Watch daily News in a minute videos from The South African YouTube page for all that you really need to know!</p></div>
            </div>
        </a>
        </Template></>;
}