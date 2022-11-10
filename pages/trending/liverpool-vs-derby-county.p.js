import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Liverpool vs Derby County</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Liverpool vs Derby County"/>
        <meta name="description" content="Trending News about Liverpool vs Derby County" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Liverpool vs Derby County</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt17a5aaadb2e746d7/621bd1ca82e8fd75dc7997f0/Chelsea_Liverpool_Carabao_Cup(1).jpg" alt="Liverpool vs Derby County"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-in/news/liverpool-vs-derby-county-lineups-and-live-updates/blt48f8f15f3fed3c97'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool vs Derby County: Lineups and LIVE updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQramXXdQiTutG8AAJGbtSjbwZBXr2q2wk4yqzGrp8f0By4sPjf5iYwWERUr0TJYBxnAapvcw4O" alt="Liverpool vs Derby County: Lineups and LIVE updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While it&#39;s thought that Jurgen Klopp prefers to focus on the Premier League and Champions League, the German boss and his squad would be highly motivated to&nbsp;...</p></div>
            </div>
        </a><a href='http://www.espn.in/football/report?gameId=652263'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool vs. Derby County - Football Match Report - November 10 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRMUJLUcvBUAAQaKTNdpXpl3h7XFMCwH3zSe_PltBZRifSfrZVmKFA0lP5LDoU6kMgfgVv2ICXQ" alt="Liverpool vs. Derby County - Football Match Report - November 10 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Harvey Elliot scored the decisive penalty as Liverpool beat Derby County 3-2 in a shootout in the Carabao Cup third round at Anfield on Wednesday.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/football/news/liverpool-vs-derby-live-stream-tv-channel-lineups-highlights-odds-score/z6kxpkkvsczpulnrqackazep'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool vs. Derby County result, highlights and analysis as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5tHguwpObdhcbHV9ndP8q1YFckCjIgUQhEqhdjiJUcGH27OeOfBD6W8o4_MzLJljbqU96mm67" alt="Liverpool vs. Derby County result, highlights and analysis as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ANFIELD, LIVERPOOL — Caoimhin Kelleher reprised his role as shootout hero as Liverpool began the defence of their EFL Cup title by beating Derby County on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liverpoolfc.com/news/confirmed-liverpool-line-v-derby-county'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Confirmed Liverpool line-up v Derby County</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRPfPabtVLLb9jQ5Ci5TKl6p1xIQAc8kUjpiEabK9QlC7xnjLk4DLEPrKK1W0uXl9dG6Su2YsM7" alt="Confirmed Liverpool line-up v Derby County" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Layton Stewart makes his senior debut for Liverpool in tonight&#39;s Carabao Cup third-round tie with Derby County at Anfield. The 20-year-old striker begins in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}