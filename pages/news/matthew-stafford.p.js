import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Matthew Stafford</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Matthew Stafford"/>
        <meta name="description" content="Trending News about Matthew Stafford" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Matthew Stafford</h1>
            <Image width={800} height={500} src="https://wp.clutchpoints.com/wp-content/uploads/2022/12/Sean-McVay-reveals-surgical-status-of-Matthew-Stafford.jpg" alt="Matthew Stafford"/>
            <h3>Recent News</h3>
            <a href='https://clutchpoints.com/rams-news-sean-mcvay-reveals-surgical-status-of-matthew-stafford'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matthew Stafford gets surgery update from Rams&#39; Sean McVay</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRLHKbzR-dJ14zdOtqCMt9IN0fEJ-82zKIxXXEPDyAsGhwkEC_dHjzU9AQ2ew_0rWxHVaDWgOxi" alt="Matthew Stafford gets surgery update from Rams&#39; Sean McVay" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Matthew Stafford received a surgery status update from Los Angeles Rams&#39; head coach Sean McVay as the season winds.</p></div>
            </div>
        </a><a href='https://thespun.com/more/top-stories/sean-mcvay-offers-new-update-on-matthew-stafford-amid-scary-injury'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sean McVay Offers New Update On Matthew Stafford Amid Scary ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQk9LauAB1Exgi-f2TVPA6YwKMqcI56EsFqHR2SuQEIUCFYwGVEsyjgDWWxbL4P6n3qVRM68LB2" alt="Sean McVay Offers New Update On Matthew Stafford Amid Scary ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With Los Angeles Rams quarterback Matthew Stafford done for the year with an injury, fans are understandably concerned that he might not be ready to play&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/fantasy/football/news/rams-matthew-stafford-should-avoid-spinal-cord-procedure/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rams&#39; Matthew Stafford: Should avoid spinal cord procedure</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Rams&#39; Matthew Stafford: Should avoid spinal cord procedure" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rams head coach Sean McVay said Friday that Stafford won&#39;t require any sort of procedure while the quarterback recovers from a spinal cord contusion,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yardbarker.com/nfl/articles/rams_sean_mcvay_expects_matthew_stafford_to_have_healthy_offseason_amid_retirement_whispers/s1_13132_38225195'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rams&#39; Sean McVay expects Matthew Stafford to have healthy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTatr9YSLlDw3JjRRha6cATLjm5yufYLdOb1W6852vY0EwpF_90lPEX1jSd4v0wBPx15yQ3zRLB" alt="Rams&#39; Sean McVay expects Matthew Stafford to have healthy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Angeles Rams head coach Sean McVay has declared that Matthew Stafford is approaching a healthy offseason amid whispers that the quarterback could retire&nbsp;...</p></div>
            </div>
        </a><a href='https://www.barstoolsports.com/blog/3448162/matthew-stafford-aaron-donald-and-sean-mcvay-may-have-played-their-last-game-together-in-la'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matthew Stafford, Aaron Donald, And Sean McVay May Have ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRilKaeeUWV3HfTQn0dFIuXtYfjAGVvJNsbcUmrmhZvOCjgR3Q1YidxO5DxSi-9LRwD2_yyL5N" alt="Matthew Stafford, Aaron Donald, And Sean McVay May Have ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Christian Petersen. Getty Images.This picture was from less than 10 months ago. The Rams defeated the Bengals 23-20 in Super Bowl LVI and the model trading&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}