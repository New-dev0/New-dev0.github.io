import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fed meeting</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fed meeting"/>
        <meta name="description" content="Trending News about Fed meeting" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fed meeting</h1>
            <Image width={800} height={500} src="https://s.wsj.net/img/meta/wsj-social-share.png" alt="Fed meeting"/>
            <h3>Recent News</h3>
            <a href='https://www.wsj.com/livecoverage/federal-reserve-meeting-interest-rate-hike-november-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fed Meeting Today Live: Fed Hikes Interest Rates 0.75 Percentage ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRcc380KdnlqTLZz_uEhfaFavEjcjcdRBnsUXlo434ad76clvH04AhsB5hzRfvQ3K1zfSpvU9Iv" alt="Fed Meeting Today Live: Fed Hikes Interest Rates 0.75 Percentage ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Major U.S. stock indexes fell after the Fed lifted interest rates by 0.75 percentage point to combat inflation. The central bank signaled plans to keep&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pbs.org/newshour/economy/watch-live-federal-reserve-chair-jerome-powell-faces-questions-after-interest-rate-decision'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Federal Reserve Chair Jerome Powell faces questions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQgws-wHRTGB6UZj6RELFpc7Guazn2XHNunImEmvL6DKT1FwMUBSl8nIV9vRqwB0Cyneb2yHEZF" alt="WATCH: Federal Reserve Chair Jerome Powell faces questions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Federal Reserve pumped up its benchmark interest rate Wednesday by three-quarters of a point for a fourth straight time to fight high inflation but also&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/02/economy/federal-reserve-meeting-inflation/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Fed makes history with a fourth straight three-quarter-point rate ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRr3LHupbtfCzmYF953EzWBxQ7F2WUgP_Y2RytmIa1Ekb7MNGM9-7KzQAWI9L9-FDwSr-LKDT0o" alt="The Fed makes history with a fourth straight three-quarter-point rate ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Federal Reserve approved a fourth-straight rate hike of three-quarters of a percentage point on Wednesday as part of its aggressive battle to bring down&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/simonmoore/2022/11/02/why-the-feds-december-meeting-may-help-signal-peak-interest-rates/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why The Fed&#39;s December Meeting May Help Signal Peak Interest ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQlWxpIGqpT61HuqS6yjHnPX6mYFQdv70jSgrqp4PkyczCHlWjdIhFuWjtEfSM-hBiaopOIRk8E" alt="Why The Fed&#39;s December Meeting May Help Signal Peak Interest ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As the Fed begins to hint at a pause in interest rates, the December rate decision will provide clues for the timeline.</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/02/heres-what-changed-in-the-latest-federal-reserve-statement.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Here&#39;s the key change in the Fed&#39;s statement that&#39;s moving markets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTJ09DXRzT8Ds0E1eHDmMcp-ncBUfETVYfmhdWbS3iZRW-QemH-W1xFJy3ELwfNRWFEOTLRi-LJ" alt="Here&#39;s the key change in the Fed&#39;s statement that&#39;s moving markets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This is a comparison of Wednesday&#39;s Federal Open Market Committee statement with the one issued after the Fed&#39;s previous policymaking meeting on Sept. 21.</p></div>
            </div>
        </a><a href='https://www.barrons.com/articles/fed-meeting-policy-speech-rate-hike-decision-today-51667341692'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Fed Hikes Rates by 0.75 Point, and Hints at a Slower Pace of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGTrvN0AJ-TqIFm7_CFzj5fqXwE1kfvxMbpsUGhoCcW4oGABUyf1ZAfxSpYLJxvrEj01xBMc7A" alt="The Fed Hikes Rates by 0.75 Point, and Hints at a Slower Pace of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It is the central bank&#39;s sixth rate hike of 2022 and fourth straight 0.75 percentage-point bump.</p></div>
            </div>
        </a><a href='https://beincrypto.com/elrond-egld-price-holds-steady-ahead-of-fed-meeting-breakout-incoming/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elrond Price Holds Steady Ahead of Fed Meeting - Breakout ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQyDG6wJKI-TL-C_I1-mgIaZB05IMebqSEZ1GBHDzlEtF73DuMcxsnSsC8AR0gvy8xAZLvf8Atj" alt="Elrond Price Holds Steady Ahead of Fed Meeting - Breakout ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Elrond (EGLD) price is increasing alongside an ascending support line and is ready to make an attempt at breaking out above $62.50.</p></div>
            </div>
        </a>
        </Template></>;
}