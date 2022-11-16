import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>27 robes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,27 robes"/>
        <meta name="description" content="Trending News about 27 robes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>27 robes</h1>
            <Image width={800} height={500} src="https://imgsrc.cineserie.com/2022/11/james-marsden-katherine-heigl-27-robes.jpg?ver=1" alt="27 robes"/>
            <h3>Recent News</h3>
            <a href='https://www.cineserie.com/news/cinema/27-robes-lhistoire-vraie-derriere-la-comedie-romantique-5502305/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>27 robes : l&#39;histoire vraie derrière la comédie romantique</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-5Mfq9wXPDyGRvuso3qKYCYlbQWANSRSV4tPuc6jAWhvcygryXnjkDlHbejwQC6_Ko2vusBby" alt="27 robes : l&#39;histoire vraie derrière la comédie romantique" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Réalisé par l&#39;américaine Anne Fletcher, &quot;27 robes&quot; est sorti en 2008 avec en tête d&#39;affiche Katherine Heigl. S&#39;articulant autour d&#39;une “wedding planner” se&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}