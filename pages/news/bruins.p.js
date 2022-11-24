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
            <Image width={800} height={500} src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1122%2Fr1094706_1024x576_16%2D9.jpg" alt="Bruins"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/nhl/story/_/id/35079292/patrice-bergeron-gets-1000th-point-assist-bruins-win'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrice Bergeron gets 1000th point with assist in Bruins&#39; win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRCZcLZhdE53U1Vk_NMcuLoQwnglKRXIrPzmuPtlH89UGltHVsV6vvPEYcUUoAN2bOI0tlflDVC" alt="Patrice Bergeron gets 1000th point with assist in Bruins&#39; win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patrice Bergeron got his 1000th career point with a second-period assist, becoming the 94th player in NHL history to reach the milestone.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/bruins/patrice-bergeron-best-captain-sports-says-bruins-coach-jim-montgomery'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrice Bergeron is &#39;best captain in sports&#39;, says Bruins coach Jim ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS86zeDpJzLRHcq8T3jQzLBuIPOQPXFss6w5wmCCxKf19uT-0vR3O08ciQj8hAbpll1j4Tt3yFx" alt="Patrice Bergeron is &#39;best captain in sports&#39;, says Bruins coach Jim ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jim Montgomery praised the Bruins&#39; &quot;army of leaders&quot; in helping the team navigate the typical ups and downs of a grueling 82-game NHL regular season.</p></div>
            </div>
        </a><a href='https://www.tampabay.com/sports/lightning/2022/11/21/if-this-was-measuring-stick-lightning-fell-well-short-bruins/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>If this was a measuring stick, Lightning fell short of Bruins</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQv84r-aiFPSZq91jIrKKOMUFlvoC37n7ymBsdpQC3GvxBaEi7Mg8vZeC2RoRuIKf0OTimT95Um" alt="If this was a measuring stick, Lightning fell short of Bruins" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tampa Bay&#39;s four-game winning streak ends in a 5-3 loss to red-hot Boston at Amalie Arena on Monday night.</p></div>
            </div>
        </a><a href='https://www.sportsgrid.com/real-sports/nhl/nhl-best-bets-bruins-vs-lightning-game-picks/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NHL Best Bets: Bruins vs. Lightning Game Picks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFUPzezWxiWT_cfN8-R_zybYbNdQZsMXVsF7ut8uGF8Od4Ic6kLMa_XKF0gonZWywyDuu1FHOJ" alt="NHL Best Bets: Bruins vs. Lightning Game Picks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two of the Atlantic division&#39;s top teams are set to face off tonight, with the Boston Bruins paying a visit to the Tampa Bay Lightning.</p></div>
            </div>
        </a><a href='https://floridahockeynow.com/boston-bruins-rolling-into-sunrise-to-face-florida-panthers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FHN Today: Bruins Rolling into Sunrise to Face Florida Panthers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR6vW77h7iEmJpvprmdDPYKDPSzVDARBb5gDsBc7r0EzijtZDFf4Jycy54H-Dqfbs1Rwn8vALN4" alt="FHN Today: Bruins Rolling into Sunrise to Face Florida Panthers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The boston bruins are running away with the nhl atlantic division, playing the florida panthers on wednesday night, nhl links.</p></div>
            </div>
        </a><a href='https://www.nhl.com/lightning/news/mishkins-extra-shift-boston-bruins-5-tampa-bay-lightning-3/c-337888294'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mishkin&#39;s Extra Shift: Bruins 5, Lightning 3</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBNuBkI5mbELNx3N_dhb0EpD68fQg7ZXzZCiNKhPtSIomb6klMex3DmbXYKVHjJNzybcoWMWwj" alt="Mishkin&#39;s Extra Shift: Bruins 5, Lightning 3" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Radio broadcaster Dave Mishkin recaps Tampa Bay&#39;s loss to Boston on Monday.</p></div>
            </div>
        </a><a href='https://www.boston.com/sports/boston-bruins/2022/11/22/bruins-lightning-takeaways-recap-score-patrice-bergeron/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrice Bergeron&#39;s milestone, and other takeaways from Bruins ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSrxuMw_bqbAxT3Y0GcX2vaeaIZx-hr-8goqltLIP-GRj9y3nU0YyihLwus1EOvVbb5LT1-AYJH" alt="Patrice Bergeron&#39;s milestone, and other takeaways from Bruins ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Boston Bruins hardly had their &#39;A&#39; game in their opening moments against the Tampa Bay Lightning. They relinquished the game&#39;s first nine shots and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/bruins/patrice-bergeron-becomes-fourth-bruins-player-hit-scoring-milestone'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrice Bergeron becomes fourth Bruins player to hit this scoring ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9X23uNCXjemj-QeGVsKnRuZ8D_zNzILwB4s6KZVcuNDCsjy5YE9ZZkOaLgnJvYk1DheI1fX8N" alt="Patrice Bergeron becomes fourth Bruins player to hit this scoring ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bruins captain Patrice Bergeron has added another impressive accomplishment to his Hall of Fame-caliber resume by scoring the 1000th point of his NHL&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/why-bruins-defenseman-hampus-lindholm-154437728.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Bruins defenseman Hampus Lindholm is legit Norris Trophy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQcYh7ES1R-yiXZ7eXL0_KMZyhF4VJWQDIWZPOeYez6kRb9QnUTOkhQ-KKfm86SoaSNWNzN8WJn" alt="Why Bruins defenseman Hampus Lindholm is legit Norris Trophy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There are many reasons for the record-setting start by the Bruins, and Hampus Lindholm is a major one. His early-season two-way play has vaulted him into&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/boston/news/nick-foligno-old-time-hockey-day-bruins-lightning/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nick Foligno has an old-time hockey kind of day for Bruins</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvk3cfXn3QBtoeo_ljDb-9o7zGkiPr-9ob1P2Nb4aRWtaUHvZbYz1avkjyw2omHSBGDVtZKvsd" alt="Nick Foligno has an old-time hockey kind of day for Bruins" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nick Foligno took a puck to the face at morning skate. He is a hockey player, though, so of course he suited up to play against the Lightning on Monday&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}