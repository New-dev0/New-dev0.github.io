import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>David Raum</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,David Raum"/>
        <meta name="description" content="Trending News about David Raum" /></Head><Template>
            <h1 style={{fontSize: "30"}}>David Raum</h1>
            <Image width={800} height={500} src="https://aisvip-a.akamaihd.net/masters/1954108/fussball-wm-2022-testspiel-im-oman-16-11-2022-oman-deutschland-jamal-musiala-li-und-karim-adeyemi-bei-der-platzbesi.jpg" alt="David Raum"/>
            <h3>Recent News</h3>
            <a href='https://www.vip.de/cms/dfb-stars-jamal-musiala-david-raum-co-haben-die-nationalspieler-eine-freundin-5017661.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DFB-Stars Jamal Musiala, David Raum &amp; Co.: Haben die ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS2q14Rpt_deS6E53MQNWubPwYo1EapcvmXBVGvE4P8Qg3nDSECNKQYWo-fG4euZ7l82WZSXUHm" alt="DFB-Stars Jamal Musiala, David Raum &amp; Co.: Haben die ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die WM 2022 steht in den Startlöchern, doch wie sieht es privat aus? Haben Jamal Musiala, David Raum, Youssoufa Moukoko &amp; Co. eine Freundin?</p></div>
            </div>
        </a>
        </Template></>;
}