import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>49ers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,49ers"/>
        <meta name="description" content="Trending News about 49ers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>49ers</h1>
            <Image width={800} height={500} src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1127%2Fr1098083_1296x729_16%2D9.jpg" alt="49ers"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/nfl/story/_/id/35125753/49ers-rb-elijah-mitchell-exits-vs-saints-knee-injury'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>49ers RB Elijah Mitchell exits vs. Saints with knee injury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRnMvvTcH3Jd6k5zHqTQnAg1TVNeTtJB2ieS2W4Gu5MJmau9XW2ZXH2Fmt-DvUML2K3XSguiml2" alt="49ers RB Elijah Mitchell exits vs. Saints with knee injury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>49ers RB Elijah Mitchell, who missed time this season because of a sprained MCL, exited Sunday&#39;s game in the third quarter because of a left knee ailment.</p></div>
            </div>
        </a><a href='https://www.nfl.com/news/49ers-wr-deebo-samuel-hamstring-active-vs-saints'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>49ers WR Deebo Samuel (hamstring) active vs. Saints</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRdBWig7tJZ34NxY_k5WHZ7vlaX0L-ufCAJhIsjIqsvD3aIUny0AZMsfai0_CD-6tWNiYYMCr3N" alt="49ers WR Deebo Samuel (hamstring) active vs. Saints" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>San Francisco 49ers wide receiver Deebo Samuel is active for Sunday&#39;s Week 12 game against the New Orleans Saints.</p></div>
            </div>
        </a><a href='https://www.sfchronicle.com/sports/49ers/article/49ers-Saints-live-updates-17612391.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>49ers-Saints: 49ers win 13-0 in defensive grind</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVZXb3W7WRUd6EvP-Mo1JFlXNDgiUs9g6huKCvyFusp5IOe3vEd7icdrj2qiDy8CZG18LkgfQ4" alt="49ers-Saints: 49ers win 13-0 in defensive grind" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After shutting out the Saints 13-0 in Levi&#39;s Stadium, the San Francisco 49ers have four straight wins to raise their record to 7-4.</p></div>
            </div>
        </a><a href='https://www.ninersnation.com/2022/11/27/23480920/49ers-saints-game-recap'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>49ers avoid a potential letdown performance in shutout victory over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQzz2xXFazbheDHVRGRTmmB4_V8TEDjfdSN3eGiafi-FAT6YPlZNfx7dRaJydGL-FMIw18gDcqq" alt="49ers avoid a potential letdown performance in shutout victory over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fred Warner took advantage of a well-timed blitz from safety Talanoa Hufanga for his patented peanut punch to force a fumble against Alvin Kamara on the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.49ers.com/news/deebo-samuel-active-arik-armstead-out-49ers-week-12-inactives'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deebo Samuel Active, Arik Armstead OUT; 49ers Week 12 Inactives</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTXOjQNsnVRFVNwFbeNBpfut7DVxx71-BvxvzHuMizOfwvjVZHRMH6M40PxbpLBEALwGAodZ9db" alt="Deebo Samuel Active, Arik Armstead OUT; 49ers Week 12 Inactives" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wide receiver Deebo Samuel is active for the 49ers matchup versus the New Orleans Saints; defensive lineman Arik Armstead will not play in Week 12.</p></div>
            </div>
        </a><a href='https://ninerswire.usatoday.com/2022/11/27/nick-bosa-sack-keeps-49ers-shutout-streak-alive/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nick Bosa sack keeps 49ers&#39; shutout streak alive</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqHT34XIHapFota6bKgc_5VQuXELs3-aYQbssvMp8Fq6N-RR8kxvD2HJyM8OnvMWgz95d_LhUR" alt="Nick Bosa sack keeps 49ers&#39; shutout streak alive" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 49ers came up with another stop in a goal-to-go situation vs. the Saints to keep their 2nd-half shutout streak alive.</p></div>
            </div>
        </a><a href='https://ninerswire.usatoday.com/2022/11/27/49ers-rb-elijah-mitchell-questionable-to-return-vs-saints/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>49ers RB Elijah Mitchell ruled OUT vs. Saints</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQRzewcgiVSSqvJH9PhQLjNL4NRYKVOTQimoVKMI-mdqpDi2cUSDIlsmTB1-F2r9s2_mOYcpcDi" alt="49ers RB Elijah Mitchell ruled OUT vs. Saints" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 49ers may have to play the rest of their Week 12 game against the Saints without running back Elijah Mitchell. Mitchell has a knee injury and is&nbsp;...</p></div>
            </div>
        </a><a href='https://www.49erswebzone.com/articles/163785-raheem-mostert-wilson-dolphins-talent-49ers-actually-sling/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Raheem Mostert, Jeff Wilson say Dolphins have more talent than ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQNxlht4rY128NmR22j-GL79rQOpiZa9q2Z5hk6Fp0NS26DZIVeMaesLoTiX1Sa8Ld5RQ0ygtVY" alt="Raheem Mostert, Jeff Wilson say Dolphins have more talent than ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With a big-time matchup between the San Francisco 49ers and Miami Dolphins quickly approaching, two former Niners have voiced their opinions about their new&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foxnews.com/sports/49ers-jauan-jennings-showcases-incredible-concentration-great-touchdown-catch-vs-saints'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>49ers&#39; Jauan Jennings showcases incredible concentration on great ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTvU8k8BncomXHDHNwEAfU0suHi7MAT4e2TXityw3MCA43rrxjIjgyNv2xzi_lOcpRNLCEbR4Q-" alt="49ers&#39; Jauan Jennings showcases incredible concentration on great ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>San Francisco 49ers wide receiver Jauan Jennings made an incredible catch against the New Orleans Saints on a pass from Jimmy Garoppolo.</p></div>
            </div>
        </a><a href='https://www.49erswebzone.com/articles/163792-watch-49ers-jauan-jennings-hauls-tipped-pass-saints/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: 49ers WR Jauan Jennings hauls in tipped pass for TD vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5eZvd7dCxsHv91FCzcS_-cofWdOJKCibCGJAARH40qxS_k6ANnT0vG2FnRt8IEQu86qAw3Ftf" alt="Watch: 49ers WR Jauan Jennings hauls in tipped pass for TD vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kudos to San Francisco 49ers wide receiver Jauan Jennings for staying with the football and hauling in a tipped pass against the New Orleans Saints.</p></div>
            </div>
        </a>
        </Template></>;
}