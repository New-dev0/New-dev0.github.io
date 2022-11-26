import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Liverpool goalkeeper</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Liverpool goalkeeper"/>
        <meta name="description" content="Trending News about Liverpool goalkeeper" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Liverpool goalkeeper</h1>
            <Image width={800} height={500} src="https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/acquiadam/2022-11/alonso-birthday-quiz-25112022-v2.jpg?itok=u2LS1HEA" alt="Liverpool goalkeeper"/>
            <h3>Recent News</h3>
            <a href='https://www.liverpoolfc.com/news/can-you-get-1010-our-xabi-alonso-birthday-quiz'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Can you get 10/10 in our Xabi Alonso birthday quiz?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQDDQlNVP1fJbd8MS1BCC1RCQyNN9IcvcTtjuEtBu-atkOUfzuMESCgnXRiyCRgYQspV19S9PfCrg" alt="Can you get 10/10 in our Xabi Alonso birthday quiz?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liverpool legend Xabi Alonso celebrates his birthday today – and to mark the occasion, we&#39;ve got a new quiz for you to tackle. We have compiled 10 questions&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liverpoolfc.com/news/record-breaking-anfield-win-finishes-second-best-pl-games-poll'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Record-breaking Anfield win finishes second in best PL games poll</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWHBFPKzQOIx_JEaLrUjr3ZNRxjlBUB_W5t-4-ttYT06DNRabAvrG2vc6AQJ40gLz_LXEQOkke" alt="Record-breaking Anfield win finishes second in best PL games poll" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A record-breaking victory at Anfield has been voted into second place in our countdown of Liverpool&#39;s top five Premier League games.</p></div>
            </div>
        </a>
        </Template></>;
}