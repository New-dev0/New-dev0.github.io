import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Titans</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Titans"/>
        <meta name="description" content="Trending News about Titans" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Titans</h1>
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/titans/hewksrp2fc7kvk9plh8v" alt="Titans"/>
            <h3>Recent News</h3>
            <a href='https://www.tennesseetitans.com/news/titans-lose-20-16-to-bengals-at-nissan-stadium'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Titans Missing Their Edge in 20-16 Loss to Bengals</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ03VPOoanhu67yo3xSJ1sObePX6ICMLKjSV3WDxiOB-QLSGGB_bm5blCwcEvgEV9PTaEuATnDT" alt="Titans Missing Their Edge in 20-16 Loss to Bengals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 1000th all-time game in franchise history was a forgettable one for the Tennessee Titans. The Bengals came into Nissan Stadium on Sunday and walked away&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tennesseetitans.com/news/six-things-that-stood-out-for-the-titans-in-sunday-s-loss-to-the-bengals-x3946'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Six Things That Stood Out for the Titans in Sunday&#39;s Loss to the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSL5egSDMcnMg0YtJF2IGejfW90EF9o-qs08UC4awNZeb0ZpN45Ycuh-wNGnVh5HKCHKGejJw1a" alt="Six Things That Stood Out for the Titans in Sunday&#39;s Loss to the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Titans lost 20-16 to the Bengals on Sunday at Nissan Stadium. Senior Writer and Editor Jim Wyatt takes a look at six things that stood out in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bengals.com/news/tee-higgins-returns-to-tennessee-as-media-roundtable-breaks-down-titans-game'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Media Roundtable: Bengals Hope To Repeat The High Note Against ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR2DPDuAyE3VfTUfV_GFpvrlQtEX5R13qd0p2Ayr4T-gKsSDSTY9CYvAdcNetPtuQGY8716f1jh" alt="Media Roundtable: Bengals Hope To Repeat The High Note Against ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When they que it up in the Music City Sunday against the AFC South-leading Titans (1 p.m.-Cincinnati&#39;s Local 12) , the Bengals are hoping to play it again&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tennessean.com/story/sports/nfl/titans/2022/11/27/tennessee-titans-defenseless-posture-field-goal-vs-cincinnati-bengals/69667997007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Explaining why Tennessee Titans were penalized on decisive field ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRq4i_YmVsgXpP5MZ5P-u9ZFdVGMGA22LeYDSALh9_fW2UX1RcpU6eDrkMbzDcxME3dAasLLC1C" alt="Explaining why Tennessee Titans were penalized on decisive field ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two Tennessee Titans players were ruled to have hit the Bengals&#39; &#39;defenseless&#39; long snapper, per the NFL rule book. Here&#39;s what happened.</p></div>
            </div>
        </a><a href='https://titanswire.usatoday.com/lists/tennessee-titans-cincinnati-bengals-week-12-post-game-quotes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What Titans said about Week 12 loss to Bengals</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRXj9lDWsdTBXuFsUYhq2Cr0lDhE_vOBi2XTUWGLNTmG0wrQm8yKboQeABNJ8udGz0tNGwSjesW" alt="What Titans said about Week 12 loss to Bengals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tennessee Titans head coach Mike Vrabel and players react to their disappointing Week 12 loss to the Cincinnati Bengals.</p></div>
            </div>
        </a><a href='https://www.tennessean.com/story/sports/nfl/titans/2022/11/28/cincinnati-bengals-were-tougher-than-tennessee-titans/69657454007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>This time, Cincinnati Bengals were tougher than Tennessee Titans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRq4i_YmVsgXpP5MZ5P-u9ZFdVGMGA22LeYDSALh9_fW2UX1RcpU6eDrkMbzDcxME3dAasLLC1C" alt="This time, Cincinnati Bengals were tougher than Tennessee Titans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Once again, the Cincinnati Bengals delivered the Tennessee Titans a defeat that&#39;ll resonate. This time, it&#39;s because the Titans were pushed around.</p></div>
            </div>
        </a><a href='https://bengalswire.usatoday.com/2022/11/27/bengals-titans-week-12-instant-analysis-recap/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Instant analysis after Bengals march into Tennessee and beat Titans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRsJM1IBWYI3f6FqiUK3mRaabyzlXzPphDFLpSe7FALjhm-cMM-aToy3e4aJ9xdQxznGp2cJTWi" alt="Instant analysis after Bengals march into Tennessee and beat Titans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Cincinnati Bengals went into Tennessee in Week 12 and won, 20-16. Buy Bengals Tickets. That&#39;s a simple way of explaining a game that was rather&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cincyjungle.com/2022/11/27/23480468/bengals-titans-final-score-recap-box-score-cincinnati-tennessee'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals outmuscle Titans: Final score, recap, box score and more ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8Jgc86fQbfe5cA1F9yZ5tk4UKE03d86XlogSobaPOKDl9dsdTYb1UxLur8ztAt2UigLBfGFnZ" alt="Bengals outmuscle Titans: Final score, recap, box score and more ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nick Westbrook-Ikhine&#39;s 25-yard seam route helped setup Caleb Shudak&#39;s first-career field goal from 33 yards out to make it a 3-0 game. Hayden Hurst got his own&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/titans/gameday/tennessee-titans-cincinnati-bengals-nfl-joe-burrow-scrambles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Has the Defense&#39;s Achilles Heel Been Exposed?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTmDO4-SIHtvaupiaLIQzhJwUMWOlX53JJ_46i6FKmQtydEGtuapHvC3YNrHfdm0dpc59Mk4lbp" alt="Has the Defense&#39;s Achilles Heel Been Exposed?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joe Burrow of the Cincinnati Bengals became the latest opposing quarterback to get the best of Tennessee&#39;s defense – in part – with his feet.</p></div>
            </div>
        </a><a href='https://www.bengals.com/news/zac-taylor-post-game-quotes-bengals-titans-week-12-2022-season'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Everything Zac Taylor Had To Say After Beating the Titans, 20-16</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJ4eMVu64GAfC6yLvM0kQE1tkqNqTqR_m_QZyWWqVX42neUodZJITFbvuqVVVl7ObVskKlBCUy" alt="Everything Zac Taylor Had To Say After Beating the Titans, 20-16" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zac, Tennessee had the ball, first down at 2:25 late, late in the game. (Eli) Apple comes up, (Cam) Sample makes a great play. You hold them to a field goal.</p></div>
            </div>
        </a>
        </Template></>;
}