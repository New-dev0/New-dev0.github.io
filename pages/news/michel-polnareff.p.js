import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Michel Polnareff</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Michel Polnareff"/>
        <meta name="description" content="Trending News about Michel Polnareff" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Michel Polnareff</h1>
            <Image width={800} height={500} src="https://s.yimg.com/ny/api/res/1.2/yOTrknMWnSUZ5xYOoxmwAg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-images/2020-04/1b2a0d90-74a8-11ea-bff7-81da0cb80910" alt="Michel Polnareff"/>
            <h3>Recent News</h3>
            <a href='https://fr.style.yahoo.com/michel-polnareff-lunette-de-soleil-peur-raison-210044358.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michel Polnareff : cette &quot;peur panique&quot; qui l&#39;empêche d&#39;enlever ses ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR2Q1sw_CaNv2Dzg3H__1nkNqgC19UNNbN3rFUwY83RIXgFgW4dMl9n-mqbX00dPXP2JJ59J13A" alt="Michel Polnareff : cette &quot;peur panique&quot; qui l&#39;empêche d&#39;enlever ses ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Invité sur la grande finale de la &quot;Star Academy&quot; ce samedi 26 novembre 2022, Michel Polnareff montera à coup sûr sur scène avec ses traditionnelles lunettes&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}