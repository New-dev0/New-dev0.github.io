import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bernardo Silva</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bernardo Silva"/>
        <meta name="description" content="Trending News about Bernardo Silva" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bernardo Silva</h1>
            <Image width={800} height={500} src="https://www.mancity.com/meta/media/5eio1l43/bern-wc.jpg" alt="Bernardo Silva"/>
            <h3>Recent News</h3>
            <a href='https://pt.mancity.com/citytv/mens/bernardo-silva-manchester-city-showreel-63804894'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bernardo Silva: Showreel</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS5u1xDnOYBtOI4NYSx-c8gEo93MNIRehkZYMq651bTUpJJk4M4YhpZtCZb-R2X7sv5WxdalbMS" alt="Bernardo Silva: Showreel" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal estreia esta quinta-feira na Copa do Mundo e conta com o internacional português Bernardo Silva.</p></div>
            </div>
        </a>
        </Template></>;
}