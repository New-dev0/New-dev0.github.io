import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tennessee Titans</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tennessee Titans"/>
        <meta name="description" content="Trending News about Tennessee Titans" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tennessee Titans</h1>
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/titans/hewksrp2fc7kvk9plh8v" alt="Tennessee Titans"/>
            <h3>Recent News</h3>
            <a href='https://www.tennesseetitans.com/news/titans-lose-20-16-to-bengals-at-nissan-stadium'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Titans Let One Slip Away in 20-16 Loss to Bengals</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ03VPOoanhu67yo3xSJ1sObePX6ICMLKjSV3WDxiOB-QLSGGB_bm5blCwcEvgEV9PTaEuATnDT" alt="Titans Let One Slip Away in 20-16 Loss to Bengals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 1000th all-time game in franchise history was a forgettable one for the Tennessee Titans. The Bengals came into Nissan Stadium on Sunday and walked away&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tennessean.com/story/sports/nfl/titans/2022/11/28/tennessee-titans-record-afc-playoff-standings-contenders/69668019007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Unpacking the Tennessee Titans&#39; struggles against AFC playoff ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRq4i_YmVsgXpP5MZ5P-u9ZFdVGMGA22LeYDSALh9_fW2UX1RcpU6eDrkMbzDcxME3dAasLLC1C" alt="Unpacking the Tennessee Titans&#39; struggles against AFC playoff ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Those two losses came against the Bengals (7-4) and Kansas City Chiefs, the two teams that played in the AFC Championship game last season. The other two losses&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tennesseetitans.com/news/six-things-that-stood-out-for-the-titans-in-sunday-s-loss-to-the-bengals-x3946'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Six Things That Stood Out for the Titans in Sunday&#39;s Loss to the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSL5egSDMcnMg0YtJF2IGejfW90EF9o-qs08UC4awNZeb0ZpN45Ycuh-wNGnVh5HKCHKGejJw1a" alt="Six Things That Stood Out for the Titans in Sunday&#39;s Loss to the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Titans lost 20-16 to the Bengals on Sunday at Nissan Stadium. Senior Writer and Editor Jim Wyatt takes a look at six things that stood out in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/titans/news/tennessee-titans-philadelphia-eagles-nfl-aj-brown-heel-turn'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Titans Fans Now Look at A.J. Brown Differently</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPSOpF0klx3hIG49YuIg_t2oM9KUQbN6A6KSx0vjGjSudq96QLsqrx4HFPwn3suVsehMfCs5P2" alt="Why Titans Fans Now Look at A.J. Brown Differently" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Pro Bowl wide receiver has happily played a villain for those who once cheered him when he was traded to the Philadelphia Eagles.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/bengals/allbengals-insiders-plus/six-takeaways-from-cincinnati-bengals-20-16-win-over-tennessee-titans'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Six Takeaways From Cincinnati Bengals&#39; 20-16 Win Over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRrfom_MVMzm8KiVBq8N5haiJGyaaro5gHLAYSaQ3I-pB0iIwaGGKwzECWVa7BKBQkAV5AZ91fH" alt="Six Takeaways From Cincinnati Bengals&#39; 20-16 Win Over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here are our takeaways from Sunday&#39;s win. The Bengals Shut Down The Run. Tennessee Titans running back Derrick Henry (22) runs the ball during the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tennessean.com/story/sports/nfl/titans/2022/11/27/tennessee-titans-loss-cincinnati-bengals-joe-burrow-playoff-revenge/69667989007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No playoff revenge for Tennessee Titans, who lose 20-16 vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRq4i_YmVsgXpP5MZ5P-u9ZFdVGMGA22LeYDSALh9_fW2UX1RcpU6eDrkMbzDcxME3dAasLLC1C" alt="No playoff revenge for Tennessee Titans, who lose 20-16 vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Tennessee Titans didn&#39;t get revenge for their playoff loss against the Cincinnati Bengals in a 20-16 loss on Sunday.</p></div>
            </div>
        </a><a href='https://www.cincyjungle.com/2022/11/28/23482161/nfl-week-12-bengals-titans-snap-counts-samaje-perine-dj-reader'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals vs. Titans: Snap count takeaways from NFL Week 12</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTN_cnEWfJa3BKDCJjUPOHOlNnr8rZpyTx8Sw4avqqJbMBKq_AkVPxdqKEPQIoO71VEICoasMIv" alt="Bengals vs. Titans: Snap count takeaways from NFL Week 12" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Game control is how the Titans win. The Bengals, despite keeping the score close throughout the afternoon, never let them take command. Cincinnati out-snapped&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cincinnati.com/story/sports/nfl/bengals/2022/11/27/nfl-week-12-scores-cincinnati-bengals-vs-tennessee-titans/69680138007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cincinnati Bengals beat Tennessee Titans, 20-16</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSUl3qWBAS3DwxH-jZxbX7OfQ315o-gFrg2QgDer73Q0pLnjr8wUCvzDQNXCNNHIiwGs4nMf8wv" alt="Cincinnati Bengals beat Tennessee Titans, 20-16" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bengals return to Nissan Stadium for the first time since their 19-16 victory in the AFC divisional round last season. Cincinnati will be without star wide&nbsp;...</p></div>
            </div>
        </a><a href='https://www.musiccitymiracles.com/2022/11/28/23482508/get-treylon-burks-chig-okonkwo-on-the-field-more-titans'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GET TREYLON BURKS AND CHIG OKONKWO ON THE FIELD ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTnL8D0yVW_IhWtsFdtVwzs-7WjRMvOOZlb0JLOfSsbwgQJbgPcq1KSQca4CZEFMMnsjhecxoKi" alt="GET TREYLON BURKS AND CHIG OKONKWO ON THE FIELD ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There are a million* reasons that Todd Downing shouldn&#39;t be the offensive coordinator of the Tennessee Titans anymore. He has to be the worst play caller in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.citybeat.com/arts/cincinnati-bengals-close-out-an-undefeated-november-by-toppling-tennessee-titans-14298072'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cincinnati Bengals Close Out an Undefeated November by Toppling ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRHLkr9qdvcmkA28lrvZYQJOt5LAsSY0lc3k2dMHpnOtz9j8soAcv6sHCgRWQ_pDjbGNWYmt1z" alt="Cincinnati Bengals Close Out an Undefeated November by Toppling ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cincinnati Bengals running back Samaje Perine runs a play against the Tennessee Titans at Nashville&#39;s Nissan Stadium on Nov. 27, 2022.</p></div>
            </div>
        </a>
        </Template></>;
}