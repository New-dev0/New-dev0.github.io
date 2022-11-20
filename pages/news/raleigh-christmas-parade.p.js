import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Raleigh Christmas Parade</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Raleigh Christmas Parade"/>
        <meta name="description" content="Trending News about Raleigh Christmas Parade" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Raleigh Christmas Parade</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221119134334-02-raleigh-parade-accident-1119.jpg?c=16x9&q=w_800,c_fill" alt="Raleigh Christmas Parade"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/19/us/raleigh-christmas-parade-accident/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>1 person was killed after being hit by a truck during a Christmas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQjzbsuTfqDdL7ZB45Z8T0yTddF_uO7yXx-JekkSn8aZC6hCFHrC636BqCqlsdoIdO5zsAUOanG" alt="1 person was killed after being hit by a truck during a Christmas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A young girl who was hit by a truck during a parade in Raleigh, North Carolina, on Saturday has died, according to Raleigh Mayor Mary-Ann Baldwin.</p></div>
            </div>
        </a><a href='https://www.foxnews.com/us/raleigh-christmas-parade-halted-accident-leaves-girl-hospitalized'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Raleigh Christmas parade halted, girl dies after being hit by vehicle</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_PIAuEfvs7ETNXFIH9VtuFUb1VQ_VrkUdk3_ebJfR_wjrOKhdkBbJwBfamfNTf_TfzWa7155L" alt="Raleigh Christmas parade halted, girl dies after being hit by vehicle" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Christmas parade in Raleigh, North Carolina, was interrupted by a tragic accident when an out-of-control vehicle struck a young girl. She later died.</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/11/19/out-of-control-truck-hits-young-dancer-during-raleigh-christmas-parade/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Out-of-Control Truck Kills Young Dancer During Raleigh Christmas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSO_53V-smjqiCYjQHqkvTAexsrHUAMyZ18fTXBQGWWIeBrulb3ALjLwoBuIpyHHvy60LV6mX2f" alt="Out-of-Control Truck Kills Young Dancer During Raleigh Christmas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A pickup truck lost control during the Raleigh Christmas parade and struck one young girl ... ultimately needing to be stopped by a group of bystanders who&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcnews.com/news/us-news/girl-dies-hit-truck-raleigh-christmas-parade-rcna58037'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Girl dies after she&#39;s hit by truck in Raleigh Christmas parade</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTHy2JNp83tAOTZylw5SguzMmSAOPjV8mmZLXs4vliCVX21BOvC7eA5yH0NYS88e27kLpzp13i9IA" alt="Girl dies after she&#39;s hit by truck in Raleigh Christmas parade" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A girl was killed after she was hit by a truck pulling a float during a Christmas parade in Raleigh, North Carolina, authorities said Saturday.</p></div>
            </div>
        </a><a href='https://abcnews.go.com/US/child-dies-hit-control-truck-raleigh-christmas-parade/story?id=93628402'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Child dies after being hit by out-of-control truck during Raleigh ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTidmA7tBxU-KCrLSiO7iYZdCqs4K7iLM57gRKd6nT-nGn-_3qmIqsiSIbggBhgDlcot-qwuIyx" alt="Child dies after being hit by out-of-control truck during Raleigh ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A child died after she was struck by an out-of-control truck towing a float during a Christmas parade in Raleigh, North Carolina, on Saturday, police said.</p></div>
            </div>
        </a><a href='https://abc11.com/raleigh-christmas-parade-person-hit-injuries-what-happened-to-the/12471816/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Girl dies after being hit by out-of-control truck at Raleigh Christmas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRzSgTtSJhJEID2Nt5leQ9D2HQVWH6dXfs-eXnjAtj9Xbovfwv64huVk9Abq-rLKH4KkxvH63H0" alt="Girl dies after being hit by out-of-control truck at Raleigh Christmas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RALEIGH, N.C. (WTVD) -- Raleigh police confirm the girl accidentally hit by a truck towing a float during the Raleigh Christmas Parade has died.</p></div>
            </div>
        </a>
        </Template></>;
}