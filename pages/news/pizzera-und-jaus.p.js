import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pizzera und Jaus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pizzera und Jaus"/>
        <meta name="description" content="Trending News about Pizzera und Jaus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pizzera und Jaus</h1>
            <Image width={800} height={500} src="https://image.events.at/images/facebook/7354677/hq_pizzerajaus_lehpic-04.jpg" alt="Pizzera und Jaus"/>
            <h3>Recent News</h3>
            <a href='https://events.at/konzerte/pizzera-jaus-interview-comedian-rhapsody/402218832'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pizzera &amp; Jaus im Interview: &quot;Comedian Rhapsody&quot;, Sexyness und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQOcBY_p842jcygFE1ojyWfxA0MZt65i2dXNUsoX5eu-MPrY0WCb88X7hT2EKT8RDqx5wTDm_U1" alt="Pizzera &amp; Jaus im Interview: &quot;Comedian Rhapsody&quot;, Sexyness und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pizzera &amp; Jaus: Neues Album &quot;Comedian Rhapsody&quot; ist nun veröffentlicht. Wir baten Paul Pizzera und Otto Jaus zum Interview.</p></div>
            </div>
        </a>
        </Template></>;
}