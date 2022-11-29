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
            <Image width={800} height={500} src="https://cdn.vox-cdn.com/thumbor/s4Yb9vOU3GmW7lNwLHgp4MzGxwA=/0x787:4800x3300/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24233139/1445088347.jpg" alt="49ers"/>
            <h3>Recent News</h3>
            <a href='https://www.ninersnation.com/2022/11/28/23481610/49ers-position-grades-saints-week-12'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>49ers news: Position-by-position grades from the 49ers tough win ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMIydYJZnPeDaH_NkX1oR_O9epl6nIOfVB3bH_yxAdl7dhVfIB_m3F-wZSp0DdBFQ1-fplnA-q" alt="49ers news: Position-by-position grades from the 49ers tough win ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 49ers offense struggled against a reinforced Saints defensive front, but the Niners defense stepped up.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/bayarea/49ers/saints-flabbergasted-refs-erase-chris-olave-catch-alontae-taylor-int-vs-49ers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saints flabbergasted refs erase Chris Olave catch, Alontae Taylor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmUjibsjO0UxgsIs8uN8lamEplrueZqhLpVt0px3Y3-weVa8KpXdUijK_S_FIO_F2GsZSlcw90" alt="Saints flabbergasted refs erase Chris Olave catch, Alontae Taylor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Saints were not happy with the officiating after their 13-0 loss to the 49ers at Levi&#39;s Stadium.</p></div>
            </div>
        </a><a href='https://www.49erswebzone.com/articles/163861-49ers-defense-becoming-elite-again-observations-about-saints-49ers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 49ers&#39; Defense is Becoming Elite Again: 5 Observations about ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQo50Y2PLR2GfLfvGMIE2KhgJ0eU4whjywYNEVCT5SThP2QZaXUS6oJF89Ny2BLzxEECryOHK81" alt="The 49ers&#39; Defense is Becoming Elite Again: 5 Observations about ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This 2022 iteration of the 49ers is endlessly fascinating to watch. One of the best teams in football one week, getting humiliated the next.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/bayarea/49ers/deebo-samuel-tweets-raheem-mostert-message-after-49ers-critique-hits'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deebo Samuel tweets Raheem Mostert message after 49ers critique ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmUjibsjO0UxgsIs8uN8lamEplrueZqhLpVt0px3Y3-weVa8KpXdUijK_S_FIO_F2GsZSlcw90" alt="Deebo Samuel tweets Raheem Mostert message after 49ers critique ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deebo Samuel tweeted about former 49ers teammate Raheem Mostert in light of recent comments about the 49ers.</p></div>
            </div>
        </a><a href='https://ninerswire.usatoday.com/2022/11/28/49ers-add-cb-janoris-jenkins-to-practice-squad/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>49ers add CB Janoris Jenkins to practice squad</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQUVY-AbBsnsH1n_V9wmPwjHKQhzhD883e3cYtKm_eaBYqyUsW16clkf7j_fssREmVXRWoIiQmj" alt="49ers add CB Janoris Jenkins to practice squad" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 49ers on Monday announced the addition of veteran cornerback Janoris Jenkins to their practice squad. Jenkins, a 2012 second-round pick of the Rams,&nbsp;...</p></div>
            </div>
        </a><a href='https://ninerswire.usatoday.com/lists/49ers-shutout-saints-score-results-stats/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What we learned from the 49ers&#39; shutout win over the Saints</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpNqItqq58v76vYotvmT532McUeRR5D8HKU0hVB28HvPbeH_UYh9s0JIDtfCGKcJpLyxthxZgf" alt="What we learned from the 49ers&#39; shutout win over the Saints" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The San Francisco 49ers have some breathing room atop the NFC West after they shutout the New Orleans Saints in a 13-0 victory in Week 12.</p></div>
            </div>
        </a><a href='https://www.49erswebzone.com/articles/163863-elijah-mitchell-weeks-sprain-other-injury-updates-shanahan/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elijah Mitchell to miss 6-8 weeks with MCL sprain, other 49ers injury ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTsLPV_U8Ev50BQ1dZHCRITXdPYZf9PaiZXOAOlSBiK-Vz7uFlDjSyuLITIaAT3LrqxCX5gi9YW" alt="Elijah Mitchell to miss 6-8 weeks with MCL sprain, other 49ers injury ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>San Francisco 49ers head coach Kyle Shanahan jumped on a conference call with reporters on Monday, a day after the team&#39;s 13-0 win over the New Orleans&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/bayarea/49ers/49ers-report-card-grading-offense-defense-shutout-win-over-saints'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>49ers report card: Grading offense, defense in shutout win over Saints</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmUjibsjO0UxgsIs8uN8lamEplrueZqhLpVt0px3Y3-weVa8KpXdUijK_S_FIO_F2GsZSlcw90" alt="49ers report card: Grading offense, defense in shutout win over Saints" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here are the grades for the 49ers&#39; offense and defense following their shutout win over the New Orleans Saints.</p></div>
            </div>
        </a><a href='https://www.49erswebzone.com/articles/163853-deebo-samuel-raheem-mostert-add-49ers-dolphins-hype/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deebo Samuel, Raheem Mostert add to 49ers-Dolphins hype</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSSr262apEGdX_vB-HRtr7ywmVGotN-qL1ip6mPcY8W3tIfDOsnBPZD84hXyHHyOE6l0MywxUX" alt="Deebo Samuel, Raheem Mostert add to 49ers-Dolphins hype" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There&#39;s already a lot of hype surrounding the Week 13 matchup between the San Francisco 49ers and the Miami Dolphins. It&#39;s the first contest between&nbsp;...</p></div>
            </div>
        </a><a href='https://www.49erswebzone.com/articles/163860-49ers-sign-janoris-jenkins-practice-squad/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>49ers sign CB Janoris Jenkins to their practice squad</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwAojyTEdpmarN_MRHvaESmsPxqrOQ7bLV93FHbKePcNNgP40jmHc-49Ks42rHJfOZ6ur1caTP" alt="49ers sign CB Janoris Jenkins to their practice squad" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The San Francisco 49ers announced they signed cornerback Janoris Jenkins to their practice squad. The 49ers Communications staff provided the following&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}