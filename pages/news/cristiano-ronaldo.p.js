import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cristiano Ronaldo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cristiano Ronaldo"/>
        <meta name="description" content="Trending News about Cristiano Ronaldo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cristiano Ronaldo</h1>
            <Image width={800} height={500} src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1121%2Fr1094204_1296x729_16%2D9.jpg" alt="Cristiano Ronaldo"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/soccer/soccer-transfers/story/4810956/newcastle-rule-out-move-for-cristiano-ronaldo-sources'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sources: Newcastle rule out move for Cristiano Ronaldo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZP3cwnOzry0WAKDv5ajwze5UZ6iF4WwuIDGOEiZ6d58IjW-eWBPjvOeM0OgTe_JxWR0GSdT2X" alt="Sources: Newcastle rule out move for Cristiano Ronaldo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sources: Manchester United have placed no restrictions on where Cristiano Ronaldo can play next, with Newcastle having ruled out the move.</p></div>
            </div>
        </a><a href='https://theathletic.com/3907254/2022/11/23/cristiano-ronaldo-is-more-famous-than-his-country-but-portugal-is-not-blind-to-his-struggles/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo is more famous than his country but Portugal &#39;is ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTxSp8q_dQqSo553gwBUplvEjlRPc09tb_H7RIn7r2CrAFPWNhgL3NVUo80yOJNfG4XnysqMzcz" alt="Cristiano Ronaldo is more famous than his country but Portugal &#39;is ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It will be like this until goodbye. It can be painful for many, especially Ronaldo himself, but that&#39;s life&quot;</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/11/23/cristiano-ronaldo-suspended-2-games-smashing-fan-phone/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo Suspended 2 Games For Smashing Fan&#39;s Phone</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSRk04PXWntbyznZn3P1f8VaxYDiru6kTCoqF2-1zjPGHtOSBI-ShCmsZwu3YvaE3wBMImyVpc6" alt="Cristiano Ronaldo Suspended 2 Games For Smashing Fan&#39;s Phone" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo&#39;s debut with his next team will be pushed back a bit -- the soccer superstar was suspended for smashing a fan&#39;s phone in April.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/22/1138671976/cristiano-ronaldo-manchester-united-contract-interview-soccer'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo is out at Manchester United after an explosive ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQIVJGUKZGCNun9OsDtQDWe9E_PXAiaG_4JhNfiX6hBSRkjmJAxOZvxSfnuV2w32TdtK_ZmBedW" alt="Cristiano Ronaldo is out at Manchester United after an explosive ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The termination of the 37-year-old forward&#39;s contract comes after an interview in which he criticized manager Erik ten Hag and the club&#39;s owners.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/22/football/cristiano-ronaldo-manchester-united-departure-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo to leave Manchester United with immediate effect</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2nKIoSmyrkCCB4CE46SG5962VMw-EseNR4jD-GLjWtnowifvc_4oyg6azJMY0YSKDfWLBs-MS" alt="Cristiano Ronaldo to leave Manchester United with immediate effect" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo is leaving Manchester United with immediate effect, the English Premier League club announced on Tuesday.</p></div>
            </div>
        </a><a href='https://www.foxnews.com/sports/cristiano-ronaldo-suspended-2-games-improper-conduct-april-match'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo suspended 2 games for &#39;improper&#39; conduct in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRda0XIqggMjkYYRgRKV6bHJn2-gSDhZg5xrkwYaUeDD51eyShvgnMsXqot0PCJSruzZXcWcJFL" alt="Cristiano Ronaldo suspended 2 games for &#39;improper&#39; conduct in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The English Football Association announced Wednesday that superstar Cristiano Ronaldo has been suspended two games and fined after slapping a fan&#39;s phone&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/23/football/cristiano-ronaldo-portugal-ghana-world-cup-preview-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo begins World Cup campaign with Portugal after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTmJlGA9JCsuN7lC6UhgukBQLq-dFVsc_AkfAXcqx9hMWJ_8IGYoATAG_BxSoUcL55pdKDOM10T" alt="Cristiano Ronaldo begins World Cup campaign with Portugal after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ronaldo trains with Portugal ahead of the team&#39;s World Cup game against Ghana. Paul Childs/Reuters. CNN —. Two days after&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/fifa-world-cup/story/4808571/cristiano-ronaldo-circus-engulfs-portugal-after-man-united-exit-but-will-it-impact-world-cup-hopes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo&#39;s Man United exit circus engulfs Portugal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGdmAEUmm01ok9b6GYT48WMgVFIjSnPlZGibM8oM7GkOy1wogyVWvJS42yhz6WhewyYUIJ_EXA" alt="Cristiano Ronaldo&#39;s Man United exit circus engulfs Portugal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AL SHAHANIYA, Qatar -- Portugal midfielder Bernardo Silva tried his best to say all the right things. Speaking at Portugal&#39;s first news conference since&nbsp;...</p></div>
            </div>
        </a><a href='https://nypost.com/2022/11/23/cristiano-ronaldo-skips-world-cup-press-event-after-manchester-united-exit/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo skips Portugal&#39;s World Cup press conference ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYFT6IAYuRKZIHqr5BtzhFl7N3PzXzfqriDaEq_V5gXQ0BpffGNgp3pnOzRcoUo4OwqOI-8TvL" alt="Cristiano Ronaldo skips Portugal&#39;s World Cup press conference ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo skipped Portugal&#39;s press conference ahead of the country&#39;s opening World Cup match against Ghana following his split from Manchester&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fox4news.com/news/portugal-cristiano-ronaldo-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo out to impress in Portugal&#39;s first game at the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSJm1L2F21acuW_1goNDKpuR5rZN19CTRA2Ix43Cgf2IvlDZPqUmOwzbOY0T-CUqFgmDqO-NlxU" alt="Cristiano Ronaldo out to impress in Portugal&#39;s first game at the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The soccer superstar is without a club after the cancellation of his contract with Manchester United as a result of his controversial interview criticizing&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}