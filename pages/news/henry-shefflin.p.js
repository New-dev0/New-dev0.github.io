import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Henry Shefflin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Henry Shefflin"/>
        <meta name="description" content="Trending News about Henry Shefflin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Henry Shefflin</h1>
            <Image width={800} height={500} src="https://punditarena.com/wp-content/uploads/2022/11/inpho_02141811-2-scaled.jpg" alt="Henry Shefflin"/>
            <h3>Recent News</h3>
            <a href='https://punditarena.com/gaa/eoin-harte/henry-shefflin-average-first-year-galway/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Henry Shefflin reflects on &#39;average&#39; first year in charge of Galway</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS8HhDeEx27OctX8kCozijvNgHa5smJ9GgHLWHlpINzy_dWLXHFluHAjQQIttPPJ2khRgclc0O4" alt="Henry Shefflin reflects on &#39;average&#39; first year in charge of Galway" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The only teams that beat Galway in this year&#39;s championship were All-Ireland finalists Limerick and Kilkenny, although Shefflin is taking little comfort in that&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}