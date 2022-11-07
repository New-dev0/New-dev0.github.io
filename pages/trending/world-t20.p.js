import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World T20</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World T20"/>
        <meta name="description" content="Trending News about World T20" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World T20</h1>
            <Image width={800} height={500} src="https://resources.pulse.icc-cricket.com/ICC/photo/2022/11/06/aef4425d-5e10-41a9-aae7-2cf432d877ea/GettyImages-1439451617.jpg" alt="World T20"/>
            <h3>Recent News</h3>
            <a href='https://www.t20worldcup.com/news/2894432'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Semi-final fixtures confirmed for T20 World Cup 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS-3803P_Pnd2jBPvjjYzZPc0SmGuuCrDEN2Rebt0cSLyYeV9RytN9pS-hP08adAJ3hnvHJg6Uc" alt="Semi-final fixtures confirmed for T20 World Cup 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With the culmination of the Super 12 phase on a frantic Sunday that witnessed a dramatic upset, the ICC Men&#39;s T20 World Cup 2022 has its two semi-final&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/nov/06/cricket-t20-world-cup-india-pakistan-south-africa-netherlands'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India and Pakistan into T20 World Cup semis as Netherlands stun ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRWpwB59csAhg3FqwHtRzX9Z9r7OEEZcVNO0XaLJrazYCGRzq3X6383cJFYJJlXy_N7Pv-gSpjl" alt="India and Pakistan into T20 World Cup semis as Netherlands stun ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India and Pakistan have advanced to the T20 World Cup semi-finals after South Africa crashed out in a shock 13-run defeat to the Netherlands.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/ind-vs-zim-live-india-vs-zimbabwe-live-cricket-score-t20-world-cup-2022-8252050/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Zimbabwe, T20 World Cup 2022: SKY, pacers power IND to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSSgsPSNNOcR-19G06N5YlmJFZqIkSWUL8j_gfD0QFBa3tX3CZh7_mtPbJfgiEOE3lcfncpHcnR" alt="India vs Zimbabwe, T20 World Cup 2022: SKY, pacers power IND to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>T20 World Cup 2022, India vs Zimbabwe Live Scorecard: India have qualified for the semifinals after the Netherlands stunned South Africa by 13 runs.</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sport/cricket/icc-t20-world-cup-2022-zimbabwe-vs-india-melbourne-november-6-2022/article66103514.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC T20 World Cup 2022 | Surya&#39;s brilliance shines through as India ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQP1CWSLzkgp49Q98HecenvFar3235p6qQnrDx0xbCzq0hM1KasA-KPazo3yKSPobUG2BeoR3Do" alt="ICC T20 World Cup 2022 | Surya&#39;s brilliance shines through as India ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bowlers strike after batters set imposing target; Men in Blue top group and will take on England in the semifinals at Adelaide.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/pak-vs-ban-live-pakistan-vs-bangladesh-live-cricket-score-t20-world-cup-2022-8252036/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan vs Bangladesh Live Score, T20 World Cup 2022: Pakistan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpWYdw8XJMI7mQdjR4P-wOVpM5TUMFxTa3zH3d-81CP-nLLs5OE-tuHJuhNyqqKfAQnrA61ZYt" alt="Pakistan vs Bangladesh Live Score, T20 World Cup 2022: Pakistan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>T20 World Cup 2022, Pakistan vs Bangladesh Live Scorecard: Pakistan and Bangladesh will hope that either India or South Africa lose their respective&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sport/cricket/t20-world-cup-2022-indias-semi-final-birth-confirmed-after-netherlands-stun-south-africa-by-13-runs/article66102836.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup 2022 | Netherlands springs surprise of the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSCxNravHFq7oDXPkLH-AKoZVcGAe5_rM9J1fst7ilQ2tpeyyfe16_Pmmzt1v1zFZW6CwajzqEz" alt="T20 World Cup 2022 | Netherlands springs surprise of the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Netherlands pulled off a shock 13-run win to send South Africa crashing out of the World Cup; result ensured India a semi-finals berth from Group 2.</p></div>
            </div>
        </a><a href='https://www.t20worldcup.com/news/2894718'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Group 2 final standings: Last-day drama sees South Africa crash out ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdtWcCUBDHUVvL5uVbgSBlJz3iepXSDqbtIcyIULwKxN6Yc6AyPfgWLypcvv3K_lhtFCrAhnqS" alt="Group 2 final standings: Last-day drama sees South Africa crash out ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The last round of matches in Group 2 delivered drama in spades as the Netherlands did Pakistan a huge favour to change the face of the qualification&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/cricket/cricket-news/t20-world-cup-2022-complete-schedule-of-semi-final-matches-between-india-england-and-pakistan-new-zealand'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 WC: सेमीफाइनल की चार टीमें तय, पहला मैच न्यूजीलैंड-पाकिस्तान के ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTIdLtTluv9zwcaUE7wSxYPC9vtBaFvRoZb63p9Ok1Cw_6iC1D7lzFGe9l78Nrpp0JWh-t7m04w" alt="T20 WC: सेमीफाइनल की चार टीमें तय, पहला मैच न्यूजीलैंड-पाकिस्तान के ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टी20 विश्व कप 2022 में पहला सेमीफाइनल पाकिस्तान और न्यूजीलैंड के बीच खेला जाएगा।</p></div>
            </div>
        </a><a href='https://www.icc-cricket.com/media-releases/2894448'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC Men&#39;s T20 World Cup Semi-Final line up confirmed as Pakistan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPQKd-c0Tpk2w9LxQlrhUmCF_tNeJq7P7uClA4318XOiZc1wGd-ytYEobAWbzPn5HjAq5PRMl2" alt="ICC Men&#39;s T20 World Cup Semi-Final line up confirmed as Pakistan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Official ICC Cricket website - live matches, scores, news, highlights, commentary, rankings, videos and fixtures from the International Cricket Council.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/sports/icc-t20-world-cup-tournament-of-upsets/articleshow/95342745.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC T20 World Cup: Tournament of upsets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSIBkhoCBoMEXDUpoqdbFXm3nxpVlIIvX_gJCl9LX6g1ImLFQLORZ6D8y0b4MIyjGLUTYoMe29k" alt="ICC T20 World Cup: Tournament of upsets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cricketers often tell you that they do not take any opposition for granted, and while this is what they insist in public, they do expect to beat certain&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}