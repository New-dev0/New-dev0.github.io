import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Antonio Brown</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Antonio Brown"/>
        <meta name="description" content="Trending News about Antonio Brown" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Antonio Brown</h1>
            <Image width={800} height={500} src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0126%2Fr965971_1296x729_16%2D9.jpg" alt="Antonio Brown"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/nfl/story/_/id/35156115/arrest-warrant-issued-tampa-antonio-brown'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arrest warrant issued in Tampa for Antonio Brown</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRv3FLzPdwNz-OltZTXqT_5WXpfqyJswSxOTdBX-gsEW27bhinT2WC70Rjs70E_bjAMJhAflWL7" alt="Arrest warrant issued in Tampa for Antonio Brown" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The active warrant stems from a domestic battery incident involving a woman, Tampa Police said. On Nov. 28 at approximately 1:30 p.m., Brown and the woman were&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fox13news.com/news/former-buccaneer-antonio-brown-faces-domestic-violence-accusation-in-tampa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tampa police issue arrest warrant for former Buccaneer Antonio ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSlLNiJmd_cuKOdi1wT-a_iwXPEXUUxJMe8zqQuDNouoEQsfNC7y3DIfgVoxclvsBj1pTwk-I4h" alt="Tampa police issue arrest warrant for former Buccaneer Antonio ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antonio Brown, who made a dramatic exit earlier this year from the Buccaneers mid-game, has been accused of domestic violence involving his ex-fiancée in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/2022/12/01/antonio-brown-arrest-warrant/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antonio Brown faces battery charge after alleged domestic incident</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQP7cUF1oYMk6YRgWbkGYJN2pl9AMM0EF2p4ZFAhzOUKSxPTbRRqWSzHepKmTp6u-F7lYNKpIoe" alt="Antonio Brown faces battery charge after alleged domestic incident" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tampa police tried to serve the former NFL wide receiver, who last played for the Buccaneers, with an arrest warrant Thursday.</p></div>
            </div>
        </a><a href='https://www.abcactionnews.com/sports/tampa-police-attempting-to-arrest-former-buccaneers-receiver-antonio-brown'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tampa Police attempting to arrest former Buccaneers receiver ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWKMgODa5PnQzzcTLL9Nxn4Y_OY-NqrKktAiv1auWcaGgkJRNFcUFupEGDjFs0S9vbuG7e6431" alt="Tampa Police attempting to arrest former Buccaneers receiver ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A warrant for former Tampa Bay Buccaneers wide receiver Antonio Brown has been issued, and Tampa Police are expected to execute the warrant.</p></div>
            </div>
        </a><a href='https://abcnews.go.com/Sports/police-seek-arrest-former-nfl-wide-receiver-antonio/story?id=94299179'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Police seek to arrest former NFL wide receiver Antonio Brown for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS6RkkddtwYA9eA9MZNecP5-lHQ58JfAc_LOigBC0Kwoxgu04jmAjb_4UY69LQfIdimgTr7N3nA" alt="Police seek to arrest former NFL wide receiver Antonio Brown for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An arrest warrant has been issued in Florida for former NFL star Antonio Brown in connection with a domestic violence incident earlier this week.</p></div>
            </div>
        </a><a href='https://www.latimes.com/sports/story/2022-12-01/former-nfl-star-antonio-brown-arrest-warrant-alleged-domestic-incident'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antonio Brown faces arrest warrant after alleged incident</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSRtx6HHH9blJfNm7jGzJuSMzu5UAZk4UuFooH2PF5n0GM9zr6eIJfQ0RZD6DUrIl1bH5GTTMzE" alt="Antonio Brown faces arrest warrant after alleged incident" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antonio Brown is wanted on a battery charge in Tampa stemming from an alleged domestic incident in which he is said to have thrown a shoe at a woman.</p></div>
            </div>
        </a>
        </Template></>;
}