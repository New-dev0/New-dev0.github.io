import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Croatia National Football Team</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Croatia National Football Team"/>
        <meta name="description" content="Trending News about Croatia National Football Team" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Croatia National Football Team</h1>
            <Image width={800} height={500} src="https://s7d2.scene7.com/is/image/TWCNews/view_rece_11222022" alt="Croatia National Football Team"/>
            <h3>Recent News</h3>
            <a href='https://spectrumnews1.com/oh/dayton/news/2022/11/22/croatia-cleveland-soccer'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Croatian club soccer player feels proud watching Croatia play in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQnOgG9Jo8vLOZgFQuwi950xSHIE9R4u7QPOli8texKdTnaIulpPomSqNpC8BwrbNam1k9G6GZL" alt="Croatian club soccer player feels proud watching Croatia play in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lovorko Duvnjak said he plans to rise early on Nov. 23 to watch Croatia take on Morocco in the 2022 FIFA World Cup; He&#39;s a member of the Croatia Cleveland&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/22/sports/soccer/croatia-world-cup.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meet the First Ladies of Croatian Soccer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJttus4P9bGs3Xq4_m6qp5HQR1JI2x6xareOBgKAL-_ZCel2Z2OcOQF9zuNH6TPKGHiG1pvo_e" alt="Meet the First Ladies of Croatian Soccer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iva Olivari and Ivancica Sudac have served Croatia&#39;s federation since before it joined FIFA. They have had, in different ways, the job of a lifetime.</p></div>
            </div>
        </a><a href='https://www.total-croatia-news.com/news/65969-croatian-women'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New York Times Writes About Dedicated Croatian Women in Football</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSscUKRuJ6jJFuesmasIdtQq4I8IOdx20vMzmCUXiUnp0WdSeaelxmsCaFTVbLNbPu0KbTAqaU1" alt="New York Times Writes About Dedicated Croatian Women in Football" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iva Olivari and Ivancica Sudac served in the Croatian Football Association even before joining FIFA. For them, it&#39;s a bigger-than-life job. Olivari, according&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}