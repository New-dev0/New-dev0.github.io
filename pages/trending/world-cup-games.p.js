import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup games</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup games"/>
        <meta name="description" content="Trending News about World Cup games" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup games</h1>
            <Image width={800} height={500} src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c21b8860938320099cbe103c9d1ebe57.jpg" alt="World Cup games"/>
            <h3>Recent News</h3>
            <a href='https://kotaku.com/fifa-world-cup-2022-qatar-web-3-0-metaverse-crypto-nft-1849759896'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA Announces Entire Range Of Nightmarish Blockchain World ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1odsMjuj2Kw7LSggDLpGcAmmc2rAVj_hAQ6RmhTZZcy-Iw8IW9wcAeL_RMKnfdZNqo04MBI_Y" alt="FIFA Announces Entire Range Of Nightmarish Blockchain World ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>What losing EA&#39;s blockbuster series does to a motherfucker.</p></div>
            </div>
        </a>
        </Template></>;
}