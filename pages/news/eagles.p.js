import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eagles</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eagles"/>
        <meta name="description" content="Trending News about Eagles" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eagles</h1>
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/eagles/vfj1fasiogkihndb5wex" alt="Eagles"/>
            <h3>Recent News</h3>
            <a href='https://www.philadelphiaeagles.com/news/morning-roundup-packers-eagles-night-wont-soon-forget-draftkings'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morning Roundup: A night Eagles fans won&#39;t soon forget</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmaqBglz9G8NeIqgSidBqf4slNDQMwMZgHYZiQk3AYqVNFMApvovc0eyj_0A5eGrlSIbrAyUdi" alt="Morning Roundup: A night Eagles fans won&#39;t soon forget" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The phrase &quot;rewriting the record books&quot; became a tired phrase during the Eagles&#39; 40-33 victory over the Green Bay Packers.</p></div>
            </div>
        </a><a href='https://www.philadelphiaeagles.com/news/spadaro-red-zone-success-a-key-to-eagles-10-1-start'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spadaro: Red zone success a key to Eagles&#39; 10-1 start</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT8QnLhWnSxWFDX8ZZ-whH_IAEy1_dnreVKAlNMVva5pC_6TCV1umoiT0NLJHsNZKXRyebxKLMk" alt="Spadaro: Red zone success a key to Eagles&#39; 10-1 start" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Read about that and get the latest on the injury front, plus a first look at the Tennessee Titans.</p></div>
            </div>
        </a><a href='https://theeagleswire.usatoday.com/lists/philadelphia-eagles-packers-national-reaction-post-game-jalen-jurts/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>National reactions: Eagles move to 10-1 after running all over the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcREDwGpa_XaY7IzEenMysuP_I3a8iu1gSHjslOOSbKcDra0fd9CXmWzNFSck6sFpa76_bkDUpSs" alt="National reactions: Eagles move to 10-1 after running all over the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of the hosts on NFL Network&#39;s Good Morning Football, Schrager is high on the Eagles&#39; offensive line and “Stoutland University.”.</p></div>
            </div>
        </a><a href='https://www.inquirer.com/eagles/eagles-jordan-davis-injured-reserve-tennessee-titans-week-13-20221128.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eagles&#39; Jordan Davis, who is eligible to return from IR, is &#39;feeling ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQXV_EioT_cR3KRN0sQelmp8tBpZ3kBfeVWDp2cdn9ibA34Qp1aKypxGTUgWNOw1VSZwA1LBGS" alt="Eagles&#39; Jordan Davis, who is eligible to return from IR, is &#39;feeling ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The rookie defensive tackle, who has missed the last four games with a high ankle sprain, could return as soon as Sunday against the Tennessee Titans.</p></div>
            </div>
        </a><a href='https://www.sbnation.com/nfl/2022/11/28/23482288/the-eagles-offense-just-knows-how-to-win'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Eagles offense just knows how to win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQSf8qT8IqStwmt38Sz3cGfeOVoGKJf6U-CWNbVXYFPV6So_mAV2jXSWrDsgEtY2CKeK7rSvbn" alt="The Eagles offense just knows how to win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Packers came into the game 11th in the NFL in Pass Defense DVOA, but by both DVOA and EPA/play they&#39;ve been one of the worst teams in the NFL against the&nbsp;...</p></div>
            </div>
        </a><a href='https://packerswire.usatoday.com/2022/11/28/packers-miss-16-tackles-on-defense-during-loss-to-jalen-hurts-eagles/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Packers miss 16 tackles on defense during loss to Jalen Hurts, Eagles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTaigyCwxSUXFjP-PU4p_XkIiA21rPtlkTwY0h6QuXKlIiQy6JamvFqF3mquH4SCmQ_zuUjB1xS" alt="Packers miss 16 tackles on defense during loss to Jalen Hurts, Eagles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Packers matched a season-high with 16 missed tackles on Sunday night against the Eagles.</p></div>
            </div>
        </a><a href='https://deadspin.com/the-eagles-look-good-but-here-s-who-they-should-be-war-1849827711'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Eagles look good, but here&#39;s who they should be wary of in the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQX5PPVcRMKSyyw3Ctcs2IycfGTpYjsWf6fQy-3c1sYKFwlqZeTI2x1_82ah_u2V7yENzojHzwE" alt="The Eagles look good, but here&#39;s who they should be wary of in the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Philadelphia Eagles have dominated the NFC over the first three months of the season en route to a league-best 10-1 start. Besides the game against&nbsp;...</p></div>
            </div>
        </a><a href='https://www.inquirer.com/eagles/eagles-super-bowl-hurts-sirianni-nfl-packers-20221128.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eagles win vs. Packers shows the offense is Super Bowl-caliber and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQxiRpFzN0N2hF6byacp7jB7uRj9hqCXwEmLEvGzb3GCk-ZMt93dep-4sP4bsyIZ03gi8F5sgg1" alt="Eagles win vs. Packers shows the offense is Super Bowl-caliber and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Eagles defense didn&#39;t have its best day and the special teams are suspect, but Jalen Hurts and the offense have made the Super Bowl very much in reach&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mainlinemedianews.com/2022/11/27/hurts-breaks-club-record-as-eagles-beat-packers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hurts breaks club record as Eagles beat Packers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBNQKX0BoOuNOLc5-MQVFX6XGX0FTPC6Z_hM29iyhcjc364dGYn4eyvEzMZmS9TZ2NALp0c4hb" alt="Hurts breaks club record as Eagles beat Packers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PHILADELPHIA — The Eagles faltered after grabbing an early two-touchdown lead but bounced back behind Jalen Hurts, who set the single-game club rushing&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}