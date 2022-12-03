import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Monster</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Monster"/>
        <meta name="description" content="Trending News about Monster" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Monster</h1>
            <Image width={800} height={500} src="https://assets.eenadu.net/featureimages/680X310/122225989-680X310.jpg" alt="Monster"/>
            <h3>Recent News</h3>
            <a href='https://www.eenadu.net/telugu-news/movies/mohan-lal-monster-movie-review/0203/122225989'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Monster: రివ్యూ: మాన్‌స్టర్‌.. మోహన్‌లాల్‌, మంచు లక్ష్మిల సినిమా ఎలా ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdd5QxHIJBO-d7OQ0SlEI9Ml1KNz169gAUeYnE-JWy-INki2n6r6Vc-XNILS0_a4ZLrUvF5RqP" alt="Monster: రివ్యూ: మాన్‌స్టర్‌.. మోహన్‌లాల్‌, మంచు లక్ష్మిల సినిమా ఎలా ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>మోహన్‌లాల్‌, మంచు లక్ష్మి, హనీరోజ్‌ ప్రధాన పాత్రల్లో తెరకెక్కిన చిత్రం &#39;మాన్‌స్టర్‌&#39;.</p></div>
            </div>
        </a>
        </Template></>;
}