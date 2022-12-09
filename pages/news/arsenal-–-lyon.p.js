import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Arsenal – Lyon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Arsenal – Lyon"/>
        <meta name="description" content="Trending News about Arsenal – Lyon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Arsenal – Lyon</h1>
            <Image width={800} height={500} src="https://fr.uefa.com//img.uefa.com/imgml/icons/social/og/uefacom.jpg" alt="Arsenal – Lyon"/>
            <h3>Recent News</h3>
            <a href='https://fr.uefa.com/womenschampionsleague/news/027c-16c73b966faf-96f018fcb682-1000--arsenal-lyon-faits-et-stats/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal - Lyon, faits et stats</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSsQuUlGBm0jEp--TJ_6Ax5d9HRSkWqAQP2DkDQbNuTamc3MiJvoJjeYXTTu2xBfTwltqVxt4m" alt="Arsenal - Lyon, faits et stats" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal, qui a atteint les quarts de finale lors de chacune de ses 14 dernières campagnes européennes, domine le groupe C avec trois points d&#39;avance sur&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}