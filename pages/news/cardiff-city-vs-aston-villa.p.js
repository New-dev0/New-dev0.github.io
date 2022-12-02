import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cardiff City vs Aston Villa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cardiff City vs Aston Villa"/>
        <meta name="description" content="Trending News about Cardiff City vs Aston Villa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cardiff City vs Aston Villa</h1>
            <Image width={800} height={500} src="https://i2-prod.walesonline.co.uk/incoming/article25644756.ece/ALTERNATES/s1200/0_DSC_5685_1-1jpgs.jpg" alt="Cardiff City vs Aston Villa"/>
            <h3>Recent News</h3>
            <a href='https://www.walesonline.co.uk/sport/football/football-news/cardiff-aston-villa-peter-whittingham-25641638'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Young stars shine against Premier League side in fitting ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRZhQ22G4NAJDdiT9If2Rwq2DQ4pxYg4Yh_ABbP8u6XKrE1MK0J72L3jiiENWWKPZ_CB72dF-2C" alt="Young stars shine against Premier League side in fitting ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two of Peter Whittingham&#39;s former sides met in this memorial match to honour one of the best players ever to don a Bluebirds shirt.</p></div>
            </div>
        </a><a href='https://www.vavel.com/en-us/soccer/2022/11/30/1130905-cardiff-city-vs-aston-villa-live-stream-score-updates-and-how-to-watch-friendly-match.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Goals and Highlights: Cardiff City 3-1 Aston Villa in friendly match ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSD3TRE6_Mel74RhkTzdSu2SOu4cHAkz1ay4Arv71mmQp7cQVjDczkJA-E05_9r9QzE-nlWPQKq8A" alt="Goals and Highlights: Cardiff City 3-1 Aston Villa in friendly match ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cardiff City beat Aston Villa 3-1 in a 2022 friendly match, goals were scored by Ollie Tanner at minute 40&#39; and Kion Etete at minutes 55&#39; and 73&#39; for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cardiffcityfc.co.uk/news/peter-whittingham-memorial-match-cardiff-city-vs-aston-villa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Peter Whittingham Memorial Match | Cardiff City vs. Aston Villa | Cardiff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQSJrKKq8YMDFP5Z6_hqfuu0Q2l_djnuyeEFFZfxY6XTeD-gOrS33-dK3UyeNQC676tLPYnX79o" alt="Peter Whittingham Memorial Match | Cardiff City vs. Aston Villa | Cardiff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>City host Villa on Wednesday as we honour one of our greatest ever players...</p></div>
            </div>
        </a><a href='https://www.birminghammail.co.uk/sport/football/match-reports/aston-villa-cardiff-live-score-25633040'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cardiff City vs Aston Villa live updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQClvpB4Sdv_YmdeWNBXJwWz_OvPjujvizeN1OghwOxwJ3YXS2Tzgb-BqkgDwj1YALwxHZBiRZe" alt="Cardiff City vs Aston Villa live updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;re live in south Wales as Aston Villa take on Championship side Cardiff City as the two clubs pay their respects to Peter Whittingham and his family.</p></div>
            </div>
        </a><a href='https://www.avfc.co.uk/news/2022/november/30/cardiff-city-v-aston-villa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Villa beaten in Peter Whittingham Memorial Match</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhRHDqHXYqQKyVjXyroV9liurNvM609b-2UJ__nZIWWvn21uTh3zEr4lZIECYTANym8fY-ca6k" alt="Villa beaten in Peter Whittingham Memorial Match" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The encounter celebrated and paid tribute to the former Villa and Cardiff midfielder, who sadly passed away in March 2020 at the age of just 35. The fixture at&nbsp;...</p></div>
            </div>
        </a><a href='https://news.pindula.co.zw/2022/11/30/nakamba-tipped-to-be-in-aston-villas-first-xi-against-cardiff-city/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nakamba Tipped To Be In Aston Villa&#39;s First XI Against Cardiff City</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQynAk4ffGe9LRSdj35NUb1ZGAa7iJCQQSgorfkh1tajAohlDePkAoD2p1T59KUy-RH7r9I1NoV" alt="Nakamba Tipped To Be In Aston Villa&#39;s First XI Against Cardiff City" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Warriors midfielder, Marvelous Nakamba has been tipped to start for Aston Villa tonight when the blue and claret army play Cardiff City in a friendly match.</p></div>
            </div>
        </a><a href='https://www.soccer24.co.zw/2022/12/01/nakamba-makes-first-appearance-of-the-season-for-villa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nakamba makes first appearance of the season for Villa - Soccer24</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6wFlkZgyBzgBSRneVDgXg50eFBTILRrV_uv-wLMYseQnVaT9jUqnDUafdQDRODbICBJ3L73ok" alt="Nakamba makes first appearance of the season for Villa - Soccer24" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Warriors star Marvelous Nakamba made his first Aston Villa appearance of the season when the claret and blue lost 1-3 to Cardiff City in a friendly match&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}