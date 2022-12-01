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
            <Image width={800} height={500} src="https://www.boston.com/wp-content/uploads/2022/11/MKYVRQ2BNXGT4VXXBSGIORY6FE-63873a76ae8a6.jpg" alt="Bruins"/>
            <h3>Recent News</h3>
            <a href='https://www.boston.com/sports/boston-bruins/2022/11/30/bruins-lightning-takeaways-score-recap-result/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What we learned following the Bruins&#39; 5th straight win over Tampa Bay</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQMrvA47U8O7p4WASCbzF6CttMNjmndKuP6tlDYd7v9WcPvCi6hp-VilHz_hVF0tfmxj8MhMcUN" alt="What we learned following the Bruins&#39; 5th straight win over Tampa Bay" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two months in, and at the quarter-mark of the 2022-23 season, the Boston Bruins are showing no signs of slowing down.</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/sports/nhl/2022/11/30/bruins-broadcaster-jack-edwards-pat-maroon-weight-lightning/10803822002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boston Bruins announcer Jack Edwards makes fun of Lightning ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPJN8OlP8G_spG-rqtsug5VwAjFPuGSilzNOCayRGzpB9nkaFYEOLnMLYuvZdKGD7FBqZoLKr4" alt="Boston Bruins announcer Jack Edwards makes fun of Lightning ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Boston Bruins play-by-play announcer Jack Edwards made fun of the weight of Tampa Bay Lightning forward Pat Maroon during Tuesday&#39;s NESN broadcast.</p></div>
            </div>
        </a><a href='https://nesn.com/2022/11/four-takeaways-from-bruins-3-1-win-over-lightning/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Four Takeaways From Bruins&#39; 3-1 Win Over Lightning</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSwsMwd9qiZXWHhuOlA7Ir2OUaJw1cfh3Y9NjxVP3bEZ-ud95FeJjzkMj6sGRkCeZCLq5sLFt9" alt="Four Takeaways From Bruins&#39; 3-1 Win Over Lightning" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Boston Bruins are a wagon this season and continued to prove as much with a 3-1 win over the Tampa Bay Lightning on Tuesday night.</p></div>
            </div>
        </a><a href='https://www.masslive.com/bruins/2022/11/how-tampas-pat-maroon-countered-bruins-announcer-jake-edwards-fat-joke.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Tampa&#39;s Pat Maroon countered Bruins&#39; announcer Jack ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTU4FDew6dLMIPEUvxCOLTM9dHfVHbAbtYN_yjds8pg7I_l0UTKF0G7O0wLAnWVFHn2x9hZ3uGG" alt="How Tampa&#39;s Pat Maroon countered Bruins&#39; announcer Jack ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bruins announcer Jack Edwards made fun of Tampa Bay forward Pat Maroon&#39;s weight during Tuesday&#39;s broadcast.</p></div>
            </div>
        </a><a href='https://www.newscentermaine.com/article/sports/nhl/bruins/boston-bruins-extend-nhl-record-season-opening-home-win-streak-bruins-lightning-score/97-377527c1-4971-4bf5-b3d7-f3b7f7076450'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boston Bruins extend NHL-record season-opening home win streak</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGuA0DT1m3iFqyTTv7SAcO9KZcjV-dCojo7QkvBbgz0uoIYP15LanysXbzowq4JPHrvRNSeUre" alt="Boston Bruins extend NHL-record season-opening home win streak" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Taylor Hall scored twice and the Boston Bruins extended their NHL-record streak of home victories to open a season to 13 games with a 3-1 victory over Tampa&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/boston/news/taylor-hall-bruins-third-line-best-for-team-nhl/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taylor Hall loving life on Bruins third line: &quot;It&#39;s whatever&#39;s best for the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS9grqIiuiwxU3bC01tjxyjraACD0mFOiT39eqVuR4CCiGaEp2v8kBa1pQ87Dky8zhCGzZoYZxY" alt="Taylor Hall loving life on Bruins third line: &quot;It&#39;s whatever&#39;s best for the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BOSTON -- On just about any other team, Taylor Hall would probably find himself skating on the top line. In a few other instances, he would be part of a&nbsp;...</p></div>
            </div>
        </a><a href='https://bostonhockeynow.com/2022/11/30/haggs-hall-performance-underscores-boston-bruins-overwhelming-depth/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Haggs: Hall Performance Underscores Bruins Overwhelming Depth</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSY75p_X2mrhs9V2Gk7VMEmHcVulFu_NcBezr2XM-Dxxcx4_nj34_89j-CB8bwxi9Wk_2spNWbo" alt="Haggs: Hall Performance Underscores Bruins Overwhelming Depth" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Taylor Hall&#39;s two-goal performance against the Tampa Bay Lightning underscores the Boston Bruins overwhelming roster depth this year.</p></div>
            </div>
        </a><a href='https://www.wruf.com/headlines/2022/11/30/bruins-have-had-the-lightnings-number-to-start-season/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruins have had the Lightning&#39;s number to start season - ESPN 98.1 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT7KRQea_MThX2AbQIvuJoxACDwplWsll-nFmkKp_UT-ws74gJY1OmExuKzNTKDHUXnnFMzQ-y-" alt="Bruins have had the Lightning&#39;s number to start season - ESPN 98.1 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Tampa Bay Lightning lost to the Boston Bruins for the second time in four games on Tuesday night by a score of 3-1.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nhl/news/lightnings-pat-maroon-donates-to-mental-health-charity-after-bruins-broadcaster-comments-about-his-weight/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lightning&#39;s Pat Maroon donates to mental health charity after Bruins ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRo-sj0QRzGKnOzHlJkET0dH7AwsBu2ejNB7XiT6viG1u-NfawGfLE8Z8yOC4Z22mNX32yyEJqb" alt="Lightning&#39;s Pat Maroon donates to mental health charity after Bruins ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maroon donated $2000 to the nonprofit Tampa Bay Thrives after play-by-play announcer Jack Edwards joked about his weight.</p></div>
            </div>
        </a><a href='https://thehockeywriters.com/bruins-edwards-maroon-weight-comments/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruins Play-by-Play Guy Jack Edwards Steps Over the Line...Again</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS8v2viZorKoQnceeNL3rxXxluYMGdZ_f9hx4GpuWdDG-NjGlCw_v1eI_cfWX133kBZnWcr3A7v" alt="Bruins Play-by-Play Guy Jack Edwards Steps Over the Line...Again" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Boston Bruins TV play-by-play announcer Jack Edwards made some shaming comments about Pat Maroon of Tampa Bay and it&#39;s not his first time.</p></div>
            </div>
        </a>
        </Template></>;
}