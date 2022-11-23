import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bruins</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bruins"/>
        <meta name="description" content="Trending News about Bruins" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bruins</h1>
            <Image width={800} height={500} src="https://www.nbcsports.com/sites/rsnunited/files/styles/metatags_opengraph/public/article/hero/Bergeron-Patrice-Getty-1244978396.jpg" alt="Bruins"/>
            <h3>Recent News</h3>
            <a href='https://www.nbcsports.com/boston/bruins/patrice-bergeron-best-captain-sports-says-bruins-coach-jim-montgomery'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrice Bergeron is &#39;best captain in sports&#39;, says Bruins coach Jim ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9X23uNCXjemj-QeGVsKnRuZ8D_zNzILwB4s6KZVcuNDCsjy5YE9ZZkOaLgnJvYk1DheI1fX8N" alt="Patrice Bergeron is &#39;best captain in sports&#39;, says Bruins coach Jim ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jim Montgomery praised the Bruins&#39; &quot;army of leaders&quot; in helping the team navigate the typical ups and downs of a grueling 82-game NHL regular season.</p></div>
            </div>
        </a><a href='https://www.espn.com/nhl/story/_/id/35079292/patrice-bergeron-gets-1000th-point-assist-bruins-win'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrice Bergeron gets 1000th point with assist in Bruins&#39; win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTwjQraqtHz433oYgeetYfoHKjhAaKwuM-UTQUgZh_VyGnvqdP1AgW4b2qqtLLB8vxbhSTBAdE2" alt="Patrice Bergeron gets 1000th point with assist in Bruins&#39; win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patrice Bergeron got his 1000th career point with a second-period assist, becoming the 94th player in NHL history to reach the milestone.</p></div>
            </div>
        </a><a href='https://floridahockeynow.com/boston-bruins-rolling-into-sunrise-to-face-florida-panthers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FHN Today: Bruins Rolling into Sunrise to Face Florida Panthers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR6vW77h7iEmJpvprmdDPYKDPSzVDARBb5gDsBc7r0EzijtZDFf4Jycy54H-Dqfbs1Rwn8vALN4" alt="FHN Today: Bruins Rolling into Sunrise to Face Florida Panthers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The boston bruins are running away with the nhl atlantic division, playing the florida panthers on wednesday night, nhl links.</p></div>
            </div>
        </a><a href='https://www.tampabay.com/sports/lightning/2022/11/21/if-this-was-measuring-stick-lightning-fell-well-short-bruins/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>If this was a measuring stick, Lightning fell short of Bruins</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQv84r-aiFPSZq91jIrKKOMUFlvoC37n7ymBsdpQC3GvxBaEi7Mg8vZeC2RoRuIKf0OTimT95Um" alt="If this was a measuring stick, Lightning fell short of Bruins" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tampa Bay&#39;s four-game winning streak ends in a 5-3 loss to red-hot Boston at Amalie Arena on Monday night.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/bruins/bruce-cassidy-joins-bruins-congratulating-patrice-bergeron-1000-points'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruce Cassidy joins Bruins in congratulating Patrice Bergeron on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9X23uNCXjemj-QeGVsKnRuZ8D_zNzILwB4s6KZVcuNDCsjy5YE9ZZkOaLgnJvYk1DheI1fX8N" alt="Bruce Cassidy joins Bruins in congratulating Patrice Bergeron on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patrice Bergeron continues to feel the love, as several current and former Bruins gave him shout-outs for reaching 1000 points in a special video message.</p></div>
            </div>
        </a><a href='https://www.boston.com/sports/boston-bruins/2022/11/22/bruins-lightning-takeaways-recap-score-patrice-bergeron/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrice Bergeron&#39;s milestone, and other takeaways from Bruins ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSrxuMw_bqbAxT3Y0GcX2vaeaIZx-hr-8goqltLIP-GRj9y3nU0YyihLwus1EOvVbb5LT1-AYJH" alt="Patrice Bergeron&#39;s milestone, and other takeaways from Bruins ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Boston Bruins hardly had their &#39;A&#39; game in their opening moments against the Tampa Bay Lightning. They relinquished the game&#39;s first nine shots and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nhl.com/lightning/news/mishkins-extra-shift-boston-bruins-5-tampa-bay-lightning-3/c-337888294'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mishkin&#39;s Extra Shift: Bruins 5, Lightning 3</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBNuBkI5mbELNx3N_dhb0EpD68fQg7ZXzZCiNKhPtSIomb6klMex3DmbXYKVHjJNzybcoWMWwj" alt="Mishkin&#39;s Extra Shift: Bruins 5, Lightning 3" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Radio broadcaster Dave Mishkin recaps Tampa Bay&#39;s loss to Boston on Monday.</p></div>
            </div>
        </a><a href='https://www.sportsgrid.com/real-sports/nhl/nhl-best-bets-bruins-vs-lightning-game-picks/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NHL Best Bets: Bruins vs. Lightning Game Picks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFUPzezWxiWT_cfN8-R_zybYbNdQZsMXVsF7ut8uGF8Od4Ic6kLMa_XKF0gonZWywyDuu1FHOJ" alt="NHL Best Bets: Bruins vs. Lightning Game Picks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two of the Atlantic division&#39;s top teams are set to face off tonight, with the Boston Bruins paying a visit to the Tampa Bay Lightning.</p></div>
            </div>
        </a><a href='https://nesn.com/2022/11/bruins-nhl-stars-ex-coaches-congratulate-patrice-bergeron-on-milestone/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruins, NHL Stars, Ex-Coaches Congratulate Patrice Bergeron On ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwkYy-qoil4y2tr2SOSBCqVGQL_SC1CeTdgaUBGIN988UKDhRc_51jCZ99SlIXdJ6hYNg8gMFO" alt="Bruins, NHL Stars, Ex-Coaches Congratulate Patrice Bergeron On ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patrice Bergeron became the eighth active player to record 1000 career points, and the Bruins captain received many congrats around the NHL.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/boston/news/patrice-bergeron-1000-career-points-bruins-history-nhl-bourque-bucyk-esposito/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrice Bergeron becomes fourth Bruins player to reach 1000 career ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0cTTq9Kfcj2XpqBRE68LIbzUlxVPgd6YK5YSFiPNlZtZKBAgMntcLtubsvFpt8t6d1URdBaB5" alt="Patrice Bergeron becomes fourth Bruins player to reach 1000 career ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patrice Bergeron is a special player. He notched a special career milestone on Monday night, joining an exclusive group in Boston Bruins history.</p></div>
            </div>
        </a>
        </Template></>;
}