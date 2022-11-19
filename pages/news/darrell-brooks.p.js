import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Darrell Brooks</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Darrell Brooks"/>
        <meta name="description" content="Trending News about Darrell Brooks" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Darrell Brooks</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221116162505-02-darrell-brooks-sentencing-waukesha-1116.jpg?c=16x9&q=w_800,c_fill" alt="Darrell Brooks"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/16/us/darrell-brooks-waukesha-sentencing/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Darrell Brooks receives 6 consecutive life sentences plus more than ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJkJvFHd2cUOTg9MMnfBKCSMqb-T12I_tW_RT0-xOmMHeUJMZNdZaHGCMOlkSTfB3V9XNvIiVQ" alt="Darrell Brooks receives 6 consecutive life sentences plus more than ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Darrell Brooks receives 6 consecutive life sentences plus more than 700 additional years in prison for Waukesha Christmas parade attack &middot; darrell brooks guilty.</p></div>
            </div>
        </a><a href='https://www.tmj4.com/news/darrell-brooks-trial/darrell-brooks-returns-to-court-thursday-on-milwaukee-charges'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Darrell Brooks returns to court Thursday on Milwaukee charges</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQc88NaVwA1DSX5ULyCzIWJVKT9kENLotgCSPyvdknsSiAixm6iyf61W8E_ev_LH4C4DA-1yOnC" alt="Darrell Brooks returns to court Thursday on Milwaukee charges" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Darrell Brooks will be in the Milwaukee County Courthouse Thursday for a final pre-trial hearing on several Milwaukee charges.</p></div>
            </div>
        </a><a href='https://www.fox6now.com/news/darrell-brooks-milwaukee-county-open-cases'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Darrell Brooks&#39; Milwaukee County open cases; 3 remaining</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2gdUpkzyGrPlNQwl3FnCPAFaalepsqM6S80-0YkykAt04yP3alm_ycgp_FhyLIJiEvIvUgdc1" alt="Darrell Brooks&#39; Milwaukee County open cases; 3 remaining" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Darrell Brooks might have been sentenced for his crimes in Waukesha, but his time in the courtroom is far from over. That is because Brooks has three open&nbsp;...</p></div>
            </div>
        </a><a href='https://www.courttv.com/news/darrell-brooks-returns-to-court-on-milwaukee-charges/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Darrell Brooks returns to court on Milwaukee charges</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQx3EFZ0bhrBRDXuHoTBFNcM61MomQc7rpow3a4rK4RBMwxoCLDT6nMt4WtTjSfsTYUnN6KZ_XC" alt="Darrell Brooks returns to court on Milwaukee charges" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Milwaukee County, Darrell Brooks has three open cases, all of which have final pre-trial hearings Thursday.</p></div>
            </div>
        </a><a href='https://www.wisn.com/article/waukesha-parade-killer-back-in-court-for-milwaukee-county-cases/41997310'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Waukesha Parade killer back in court for Milwaukee County cases</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSeQBnqr33rrwqJpICxmJ6wd5MqhDS-YdF7iCS2VWAr0Mn43FL0o0FdEm6Z7WerVtldgv8Olrfl" alt="Waukesha Parade killer back in court for Milwaukee County cases" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Less than 24 hours after a Waukesha Judge sentenced Darrell Brooks to six consecutive life sentences for the parade attack last November, Brooks was back in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bet.com/article/d36wju/darrell-brooks-gets-six-life-sentences-for-wisconsin-crash'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Darrell Brooks Gets 6 Life Sentences For Fatal Wisconsin Christmas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcScOv_bWCPZoqEthWbaqFf9eqzvj3TCLXVF8n0HaHHN70Px5ZyeqZNyBOJzYetE6FTMSAAk7NbW" alt="Darrell Brooks Gets 6 Life Sentences For Fatal Wisconsin Christmas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The jury found Brooks, who defended himself in court last month, guilty on all 76 counts stemming from the attack, according to CNN. Brooks also sat through two&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}