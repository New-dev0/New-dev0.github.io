import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World population</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World population"/>
        <meta name="description" content="Trending News about World population" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World population</h1>
            <Image width={800} height={500} src="" alt="World population"/>
            <h3>Recent News</h3>
            <a href='https://reliefweb.int/report/world/worlds-population-hits-8-billion-people-un-calls-solidarity-advancing-sustainable-development-all'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As the world&#39;s population hits 8 billion people, UN calls for solidarity ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="As the world&#39;s population hits 8 billion people, UN calls for solidarity ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>News and Press Release in English on World about Climate Change and Environment and Protection and Human Rights; published on 15 Nov 2022 by UNFPA.</p></div>
            </div>
        </a><a href='https://www.iol.co.za/news/africa/these-are-the-factors-that-are-influencing-the-worlds-population-explosion-429a0f4a-4c85-42d9-99c0-7a8deda663a6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>These are the factors that are influencing the world&#39;s population ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6psFgDDwIyfNDo8upb4Cgj_CbUtV-t2MAVtNtLEj5Wsz6eodVUFMCT6o670w43TSudp0gjxlV" alt="These are the factors that are influencing the world&#39;s population ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There are 267 births globally per minute, that is 4.5 births every second, according to the website World Counts.com. At the time this article was written,&nbsp;...</p></div>
            </div>
        </a><a href='https://unctad.org/data-visualization/now-8-billion-and-counting-where-worlds-population-has-grown-most-and-why'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Now 8 billion and counting: Where the world&#39;s population has grown ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSwIGDIupCwbHmWJqAv1aPL8Fe-oxAEYdgq6korCiv51bj32DNyT8ePBCK-9qf6n5Ia4b8_R_fX" alt="Now 8 billion and counting: Where the world&#39;s population has grown ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to UN estimates, the world population passed the 8 billion mark on 15 November. Over the past 25 years, the number of people on the planet has&nbsp;...</p></div>
            </div>
        </a><a href='https://www.engineeringnews.co.za/article/climate-justice-gets-harder-as-world-population-passes-eight-billion-2022-11-15'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Climate justice gets harder as world population passes eight-billion</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Climate justice gets harder as world population passes eight-billion" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The world population surged past 8 billion people on Tuesday, the United Nations (UN) said, warning that more hardship is in store for regions already&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/gallery/2022/11/15/photos-world-population-hits-eight-billion'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Photos: World population hits eight billion</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSWL-eH9pbiqUgQu3mlEr8kOCEyYpzKjUWUFNVq-ooO-tA6mtbmCWJHGaGBEfyl4Q-tRs-x_CZg" alt="Photos: World population hits eight billion" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Half of those are in sub-Saharan Africa: Nigeria, the Democratic Republic of the Congo, Ethiopia and Tanzania. The UN said populations in that region are&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news24.com/news24/southafrica/news/world-population-took-12-years-to-grow-from-7bn-to-8bn-and-the-next-billion-could-take-longer-20221115'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World population took &#39;12 years&#39; to grow from 7bn to 8bn - and the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6ToZzmF6tThHPhAvapxD43lVX8LFrdsw-_0r-bMxscnkCChI46O9ie2MZ9tZApIcqUyrbfbf8" alt="World population took &#39;12 years&#39; to grow from 7bn to 8bn - and the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Statistics SA and the United Nations Population Fund (UNFPA) have marked the growth of the world&#39;s population to 8 billion.</p></div>
            </div>
        </a>
        </Template></>;
}