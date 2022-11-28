import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fake EFCC news</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fake EFCC news"/>
        <meta name="description" content="Trending News about Fake EFCC news" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fake EFCC news</h1>
            <Image width={800} height={500} src="" alt="Fake EFCC news"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/11/police-arrest-five-fake-efcc-operatives-in-delta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Police arrest five fake EFCC operatives in Delta</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSt1Q9yQ-Pi_xhae8sFP0wuX-cJi0gEBwPzCi8mRUACWKdnFJCsWcm1eUZggodurJnvsgtj74gN" alt="Police arrest five fake EFCC operatives in Delta" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By Festus Ahon, ASABA. OPERATIVES of the Delta State Police Command, have arrested five fake officials of the Economic and Financial Crime Commission,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thisdaylive.com/index.php/2022/11/26/five-fake-efcc-operatives-arrested-in-delta-over-n21m-fraud/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Five Fake EFCC Operatives Arrested in Delta over N21m Fraud</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2gtWow97MaSfmIMdf_EftTiIF6jQKUv3R0tIgwl4b3G8qu0erGFjkflXwnSJ31pP6q8c2yfm7" alt="Five Fake EFCC Operatives Arrested in Delta over N21m Fraud" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Omon-Julius Onabu in Asaba. Five persons who have allegedly been impersonating operatives of the Economic and Financial Crimes Commission (EFCC) in parts of&nbsp;...</p></div>
            </div>
        </a><a href='https://punchng.com/police-arrest-fake-efcc-operatives-in-delta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Police arrest fake EFCC operatives in Delta</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRr5MTCE7aaAQHGwKzVspF5FlA4LnxhHiji33zSkXJl_dRJHBvnrADfMHNY6WblJZmDUMLs-poL" alt="Police arrest fake EFCC operatives in Delta" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Officials of the Delta State Police Command have arrested some fake Economic and Financial Crimes Commission operatives in the state over alleged break-ins,&nbsp;...</p></div>
            </div>
        </a><a href='https://dailypost.ng/2022/11/25/delta-police-arrest-five-fake-efcc-operatives/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delta Police arrest five fake EFCC operatives</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRLhsnO6nBBINi4gFmlJ3CTAs_-i_UyfFcyBHBcU-Hj6No7iTNv88GNC5oQnaEy1kBwAJyQ1iNeEQ" alt="Delta Police arrest five fake EFCC operatives" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The police in Delta State have arrested five men allegedly impersonating EFCC operatives to defraud members of the public. According to the Police Public.</p></div>
            </div>
        </a><a href='https://www.premiumtimesng.com/news/top-news/567408-police-arrest-fake-efcc-operatives-who-allegedly-kidnap-extort-residents.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Police arrest fake EFCC operatives who allegedly kidnap, extort ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTnH50gBXTw6ttFoYv4WJrxodFUlxmToSNFRHuZ6X7F7XH3Y0sk-8YE6Cg0v1bP4a7jT7WKdNCO" alt="Police arrest fake EFCC operatives who allegedly kidnap, extort ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At least, five other victims similarly reported to the police that the suspects equally robbed them of about N15 million, while pretending to be EFCC operatives&nbsp;...</p></div>
            </div>
        </a><a href='https://guardian.ng/news/police-arrest-five-fake-efcc-operatives-in-delta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Police arrest five &#39;fake&#39; EFCC operatives in Delta</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSuCkxg0JcyQ6TLITHHwgd11EEao-qkWYWWrJxr8509bbTJoDHfbd9zPii8DEKWYjPi256e5VXv" alt="Police arrest five &#39;fake&#39; EFCC operatives in Delta" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Delta Police Command said it has arrested five &#39;fake&#39; Economic and Financial Crimes Commission (EFCC) officials for allegedly breaking into their&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}