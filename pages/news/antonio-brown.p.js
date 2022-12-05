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
        </a><a href='https://www.cbssports.com/nfl/news/antonio-brown-wanted-by-florida-police-after-arrest-warrant-issued-following-domestic-incident/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antonio Brown wanted by Florida police after arrest warrant issued ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTSCPmFZCSMl2hcMGG1vVOb0djMSlD6FT-MVUOnGPJ1m_hI_66wyfZleZ4HxX_027ifDwnmIpeL" alt="Antonio Brown wanted by Florida police after arrest warrant issued ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The former NFL star was involved in a dispute with the mother of his children on Monday, according to Tampa police.</p></div>
            </div>
        </a><a href='https://deadspin.com/kanye-west-and-antonio-brown-s-antics-should-be-the-end-1849847042'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanye West and Antonio Brown&#39;s antics should be the end of Donda ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSiRTsiTfP19ig6dY1S0VljLpXnz-ZOYT5XGInpCOgPIzlYsN6HNZHhLPC-7-vudXH9sArrsL-x" alt="Kanye West and Antonio Brown&#39;s antics should be the end of Donda ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If you stand with clowns don&#39;t get mad when you wind up in a circus. To borrow an old lyric from Kanye West, “it all fell down” on Thursday when the founder&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/01/us/antonio-brown-tampa-arrest-warrant/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tampa Police issue arrest warrant for former Buccaneers receiver ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQahjvWpDanqIGji6VHeMM8opWdLG8OTTrtCq0lj_dz3RWNSlHEoQcNvCaFxuxbIDqDm1oMvr58" alt="Tampa Police issue arrest warrant for former Buccaneers receiver ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Tampa Police Department has issued an arrest warrant for former NFL player Antonio Brown after a &quot;domestic battery incident with a woman,&quot; police said&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/nfl/news/antonio-brown-arrest-warrant-misdemeanor-battery-charge/hmff8sv1i2sbcm0cxdkwamal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antonio Brown arrest warrant: What to know about misdemeanor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR94b1DoQ2NBedpfJVPnkNvhaAtB3hh_GVGSxD5GxXhwrKUF5_P0wbq06m4hT4ky6Du7p2LQPZM" alt="Antonio Brown arrest warrant: What to know about misdemeanor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A warrant for the arrest of former NFL wide receiver Antonio Brown has been issued based on charges of battery domestic violence.</p></div>
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
        </a>
        </Template></>;
}