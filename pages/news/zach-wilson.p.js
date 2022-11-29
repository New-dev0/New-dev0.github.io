import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zach Wilson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zach Wilson"/>
        <meta name="description" content="Trending News about Zach Wilson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zach Wilson</h1>
            <Image width={800} height={500} src="https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/mbklhnbopsa9qlh6adnv" alt="Zach Wilson"/>
            <h3>Recent News</h3>
            <a href='https://www.nfl.com/news/jets-haven-t-given-up-hope-of-zach-wilson-return-to-lineup-following-benching'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jets haven&#39;t given up hope of Zach Wilson return to lineup following ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR40QNA_o59ZHhAU8ILqAopEI7h5ed7qPXLsh-6SJXe6o0hK7NausAJ6WhCxUINBqPUmdYFrSdh" alt="Jets haven&#39;t given up hope of Zach Wilson return to lineup following ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After a week in which the Jets benched QB Zach Wilson, last year&#39;s No. 2 overall pick, NFL Network Insiders Ian Rapoport and Mike Garafolo report that the&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/mike-white-made-easy-things-look-easy-for-the-jets-and-it-might-cost-zach-wilson-the-locker-room-043448434.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mike White made &#39;easy things look easy&#39; for the Jets, and it might ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTctT94ACecaOa7_v809xEwztj2kNeVrRhden9U_RCdbKNRSR6vpxdf9Fk--NpC2wrlJVDfeZvR" alt="Mike White made &#39;easy things look easy&#39; for the Jets, and it might ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One week ago, Jets players were saying the offense is &quot;sorry&quot; and liking tweets critical of Wilson. The mood has flipped thanks to their new starting QB,&nbsp;...</p></div>
            </div>
        </a><a href='https://nesn.com/2022/11/robert-saleh-decision-to-bench-zach-wilson-looks-like-right-move/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Robert Saleh Decision To Bench Zach Wilson Looked Like Right Move</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRwL7ctUHHzjm3Hc9eCJopbAwBurLxLrwN3s0mywt35nt-hjKBdTNDWoYNh6GsRfjr6dGqxpymDog" alt="Robert Saleh Decision To Bench Zach Wilson Looked Like Right Move" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Jets steamrolled the Justin Fields-less Bears on Sunday, and in doing so Robert Saleh looked smart for his decision to start Mike White.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nfl/news/jets-benched-zach-wilson-for-week-12-expected-to-stick-with-mike-white-if-team-remains-in-playoff-contention/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jets benched Zach Wilson for Week 12, expected to stick with Mike ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR-3rr2xITAqSY7KbjXTmIVXCQKnC5HWiILUAKPXobjMtHjzh_0Bddee6WrhcVM_OzBw5mjpnWO" alt="Jets benched Zach Wilson for Week 12, expected to stick with Mike ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Robert Saleh on the decision to bench the former No. 2 overall pick: &#39;The young man needs a reset&#39;</p></div>
            </div>
        </a><a href='https://nesn.com/2022/11/did-robert-saleh-take-dig-at-zach-wilson-after-mike-white-jets-win/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Did Robert Saleh Take Dig At Zach Wilson After Mike White, Jets Win?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4TtmBYh6E3KCHitwj1hwAYsUf423PR4zqXSDBNliZIR_X_144UIzsQrcPz_As2lcpbQFovsqP" alt="Did Robert Saleh Take Dig At Zach Wilson After Mike White, Jets Win?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New York Jets quarterback Zach Wilson has had a rough few weeks, and his head coach didn?t make things easier on him. The Jets bounced back from a pair of&nbsp;...</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10056914-zach-wilson-clowned-by-fans-as-mike-white-jets-beat-bears-with-justin-fields-out'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zach Wilson Clowned by Fans as Mike White, Jets Beat Bears with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQY3b4RUvxfUTVVAvXLwR2PPELnkERkyAW707Msel8WEypNDnJ7G2uNWL8xMd9vmntfDo_uhW8" alt="Zach Wilson Clowned by Fans as Mike White, Jets Beat Bears with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It might be a few weeks before New York Jets fans see Zach Wilson back on the field. Starting Sunday in Wilson&#39;s place, Mike White led the Jets to a XX.</p></div>
            </div>
        </a><a href='https://fansided.com/2022/11/27/zach-wilson-trolled-mike-white-leads-jets-win-best-memes-tweets/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zach Wilson trolled after Mike White leads Jets to win: Best memes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcShfKRWqswA_SwDTpxmfbX4XAZFzkcCLOJLiZU9-w2TwQyh0Q_1OtlhpvTgDljTGQOfnTDz28ud" alt="Zach Wilson trolled after Mike White leads Jets to win: Best memes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zach Wilson was benched this week, and he got to watch Mike White lead the New York Jets to an easy victory over the Chicago Bears in Week 12.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/nfl/news/jets-mike-white-zach-wilson-new-york-offense/nmazdb1c4phoiu9oiotasicg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jets QB Mike White shows Zach Wilson &#39;the real New York Jets ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTbjsuvfLcymXhakFL8MBM7A-i1nkdlFLdEnuiGNA16HB2X07vgsNklyckhsairwfSHS_Rcp_E1" alt="Jets QB Mike White shows Zach Wilson &#39;the real New York Jets ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>So, head coach Robert Saleh made a change. Exit Wilson, Enter Mike White, hero of the Jets&#39; 2021 win over the Bengals that sparked his legend — and calls for&nbsp;...</p></div>
            </div>
        </a><a href='https://clutchpoints.com/jets-overreactions-mike-white-is-better-option-at-qb-than-zach-wilson-after-week-12-win-vs-bears'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jets overreaction: Mike White is better QB option than Zach Wilson</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFucWcRva8epinDPb19iARqPe2C6v-lSw03l9AyjKfxiLAE7MeMs9299lncauDgeUOHgKZ9W01" alt="Jets overreaction: Mike White is better QB option than Zach Wilson" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The New York Jets bounced back in a big way in Week 12 vs. Bears with Mike White at the quarterback helm instead of Zach Wilson.</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/nfl/article-11476087/Jets-Mike-White-passes-three-TDs-start-Zach-Wilson-benched.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jets&#39; Mike White passes for three TDs in his first start since Zach ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQyqr0uhNRu-Ma4kAahxmdIkIJIIvhsd3P72lOXorgxLBXTWKdl5rYZj1wyOS-hSbmqjmZZ976" alt="Jets&#39; Mike White passes for three TDs in his first start since Zach ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mike White was more than just all right for the New York Jets, and he may have permanently supplanted the benched Zach Wilson on the team&#39;s depth chart by&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}