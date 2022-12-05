import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TF1</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TF1"/>
        <meta name="description" content="Trending News about TF1" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TF1</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/jeu-de-societe-1511-1650d7-0@1x.jpeg" alt="TF1"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/culture/video-tf1-dans-l-antre-d-un-createur-de-jeux-de-societe-cadeaux-noel-2240737.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO - Dans l&#39;antre d&#39;un inventeur de jeux de société</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTQhQM8NYWHINt2atDwv9igmsiiw1OzMxlPaz26ppZM-L8YL9UWr_WsK75Ikn1T2dHZDu3M43L8" alt="VIDÉO - Dans l&#39;antre d&#39;un inventeur de jeux de société" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Non seulement ils n&#39;ont pas disparu, mais ils sont devenus &quot;tendance&quot;. De nombreux jeux de société seront encore sous les sapins cette année.</p></div>
            </div>
        </a>
        </Template></>;
}