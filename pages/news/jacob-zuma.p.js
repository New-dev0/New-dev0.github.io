import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jacob Zuma</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jacob Zuma"/>
        <meta name="description" content="Trending News about Jacob Zuma" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jacob Zuma</h1>
            <Image width={800} height={500} src="https://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_437,w_700/rgixrjxjio8sxivcili2" alt="Jacob Zuma"/>
            <h3>Recent News</h3>
            <a href='https://ewn.co.za/2022/11/21/kzn-anc-jacob-zuma-will-remain-a-free-man'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>KZN ANC: Jacob Zuma will remain a free man</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTZP1fhZjEp1nkM859uNzF8Qy4hsoBbeWv-JKLyiBs-_D2iptsIMuPFY6inqhoL6tMVn8S7wwOn" alt="KZN ANC: Jacob Zuma will remain a free man" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The African National Congress (ANC) in KwaZulu-Natal said that regardless of the Supreme Court of Appeal (SCA) ruling against former President Jacob Zuma&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news24.com/news24/southafrica/news/live-zuma-must-return-to-jail-rules-sca-20221121'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DEVELOPING | Fraser did not have power to overrule Medical ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNFf8EhjDU0sr7Ha0WncgeIW9SPYu41gi1vW6OKP2pwf2fsoChz22a_t7BHIfNBgy228FO2Aj4" alt="DEVELOPING | Fraser did not have power to overrule Medical ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Supreme Court of Appeal (SCA) has unanimously confirmed that the medical parole granted to former president Jacob Zuma by then prison boss Arthur Fraser&nbsp;...</p></div>
            </div>
        </a><a href='https://www.businesslive.co.za/bd/national/2022-11-21-jacob-zuma-unlikely-to-see-prison-cell-soon/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jacob Zuma unlikely to see prison cell soon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTmsoolzWxtK62kRDxtKfH2TtCrTWug8mRC6WQf05HSMqKFuZIFjiZ4UXpA6axjvMwSFJNknujA" alt="Jacob Zuma unlikely to see prison cell soon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jacob Zuma&#39;s release on medical parole last year was unlawful and the former president must return to Estcourt Correctional Centre, the Supreme Court of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timeslive.co.za/news/south-africa/2022-11-21-jacob-zuma-must-return-to-prison-sca/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jacob Zuma must return to prison: SCA</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSE_lN_21Y35D2vFgVMuxDGxbxA4KqLYSgG2Zc5iMuMQhoeYVrrqshDbVNSS5U-ICe75l9CEz8v" alt="Jacob Zuma must return to prison: SCA" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Supreme Court of Appeal has dismissed former president Jacob Zuma&#39;s appeal about his medical parole and says he must return to prison in Estcourt,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/africa/south-african-court-orders-zuma-back-jail-after-ruling-medical-parole-was-2022-11-21/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>S.African court orders Zuma back to jail after ruling medical parole ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ0wYukwL0fcEaWkL5jSVH-FMfqZy0JUBmj50zwJSJr4Ssj4fF9Yqex96QbwK7w0ECtJCn2P2XB" alt="S.African court orders Zuma back to jail after ruling medical parole ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Africa&#39;s Supreme Court of Appeal ruled on Monday that the decision to release ex-president Jacob Zuma on early medical parole was &quot;unlawful&quot; and he&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}