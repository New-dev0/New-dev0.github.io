import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>BİM açıklaması</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,BİM açıklaması"/>
        <meta name="description" content="Trending News about BİM açıklaması" /></Head><Template>
            <h1 style={{fontSize: "30"}}>BİM açıklaması</h1>
            <Image width={800} height={500} src="https://cdn.yeniakit.com.tr/images/news/625/bimden-zorunlu-aciklama-h1670015838-064a16.gif" alt="BİM açıklaması"/>
            <h3>Recent News</h3>
            <a href='https://www.yeniakit.com.tr/haber/bimden-zorunlu-aciklama-1712692.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BİM&#39;den &#39;zorunlu&#39; açıklama</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDFZ5AZ1a9bFBZH1qgK4yxZPt-zMpFBdgrmC0vVu4V8AKc2HpGm_hn59dqlfpj6Vk-s4lcgN8s" alt="BİM&#39;den &#39;zorunlu&#39; açıklama" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BİM, zincir marketlere ilişkin medyada ve sosyal yer alan haberler üzerine zorunlu açıklama yayınladı. 2022-12-03 00:17:00. Google News - Yeniakit Gazetesi.</p></div>
            </div>
        </a>
        </Template></>;
}