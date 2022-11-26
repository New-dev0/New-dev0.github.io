import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aidan McAnespie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aidan McAnespie"/>
        <meta name="description" content="Trending News about Aidan McAnespie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aidan McAnespie</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001ce243-1600.jpg" alt="Aidan McAnespie"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/news/courts/2022/1125/1338213-aidan-mcanespie/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-soldier guilty of manslaughter of Aidan McAnespie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRwwGXTAahApm2o6OSATcMRGBHJvOZvpHHz2iGJXarOUpl8-7IB-WLk6ha3F7O07f414pIKzbyC" alt="Ex-soldier guilty of manslaughter of Aidan McAnespie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A former British soldier has been found guilty of the manslaughter of a man who was shot dead as he walked through a checkpoint on the Tyrone-Monaghan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/ireland/former-soldier-holden-guilty-over-1988-troubles-killing-at-army-checkpoint-1397129.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former British soldier guilty of manslaughter of Aidan McAnespie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTtQS1yl543jmWq9uQehJAN0VRws72plLHq9ZlmvCUqNx0WPB7p72P8A1kdoyldDiDhroecnQD3" alt="Former British soldier guilty of manslaughter of Aidan McAnespie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aidan McAnespie was killed in Co Tyrone moments after walking through a border security checkpoint in 1988.</p></div>
            </div>
        </a><a href='https://www.thejournal.ie/aidan-mcanespie-trial-judgement-5929914-Nov2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former British soldier found guilty of manslaughter of Aidan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcToJ58bqwmkhVC7Lz_xYyJe6Gf6igl7svr0WFa8_5qmlftFCCysYH67I1ZZqokmqf-GFtMWi9IP" alt="Former British soldier found guilty of manslaughter of Aidan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>McAnespie was killed in Aughnacloy, Co Tyrone, moments after walking through a border security checkpoint.</p></div>
            </div>
        </a><a href='https://news.sky.com/story/former-british-soldier-david-holden-convicted-of-manslaughter-of-catholic-aidan-mcanespie-in-1988-in-northern-ireland-12755065'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former British soldier David Holden convicted of manslaughter of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQfBvB64SQ0QpHTF2cS6aPE7EMKf4ljDzGPtPMeTgMohgAyirFbzwjpJKkdP_PfldF801dQhqNS" alt="Former British soldier David Holden convicted of manslaughter of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 53-year-old is the first veteran to be convicted of a historical offence since the 1998 Good Friday Agreement, which ended decades of conflict,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/crime-law/courts/2022/11/25/british-soldier-guilty-of-manslaughter-of-man-at-checkpoint-in-co-tyrone/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-British soldier found guilty of Aidan McAnespie manslaughter at ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTpw1cZASrH2k836qt6LzFon0xwfFd7M7ZY01uxYDPRoryivwSX6PWRDdb37hEiS6KM6Dcm_rpr" alt="Ex-British soldier found guilty of Aidan McAnespie manslaughter at ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mr McAnespie, 23, was killed in Aughnacloy, Co Tyrone, moments after walking through a border security checkpoint. He was on his way to a local GAA club when he&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}