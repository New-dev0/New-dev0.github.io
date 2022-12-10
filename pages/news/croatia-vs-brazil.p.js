import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Croatia vs Brazil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Croatia vs Brazil"/>
        <meta name="description" content="Trending News about Croatia vs Brazil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Croatia vs Brazil</h1>
            <Image width={800} height={500} src="https://e0.365dm.com/22/12/768x432/skysports-brazil-croatia-world-cup_5991583.jpg?20221209175302" alt="Croatia vs Brazil"/>
            <h3>Recent News</h3>
            <a href='https://www.skysports.com/football/croatia-vs-brazil/live/463022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Croatia beat Brazil on penalties to reach WC semis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSgzGk_3ffnnMS8I5Ig43-90Q2d2U1jsRjKrJYIfx6TwCFY7t6wcX_b6aOgnp0mzP_z08wK-TSA" alt="Croatia beat Brazil on penalties to reach WC semis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA World Cup match Croatia vs Brazil 09.12.2022. Preview and stats followed by live commentary, video highlights and match report.</p></div>
            </div>
        </a><a href='https://www.bbc.com/pidgin/articles/c979m5v043po'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Croatia vs Brazil highlight: Rodrygo and Marquinhos penalty miss ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQjNwWH3zt_ZJ4adOcqTCWZl7JoZjF9o_ogGI9hh-evG34ND3wLIBfPRaGVCZNdVZiJyWMdg1abag" alt="Croatia vs Brazil highlight: Rodrygo and Marquinhos penalty miss ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>E clear say Croatia na Brazil biggest opponent for di Qatar 2022 Fifa World Cup.</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/sports/2022/12/9/recap-croatia-vs-brazil-world-cup-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Recap: Croatia vs Brazil – World Cup 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRkXM2yF4AbAnUBPTSnzM-EOzwOEbQIxPueUx2LFjpd17lFVyQdoRfc2ZtI4jbqoPzf_WTDWRy2" alt="Recap: Croatia vs Brazil – World Cup 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Croatia score late extra-time equaliser then win penalty shootout to upset the favourites Brazil.</p></div>
            </div>
        </a><a href='https://www.rte.ie/sport/world-cup-2022/2022/1209/1340963-world-cup-2022-croatia-v-brazil-updates/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Croatia beat Brazil on penalties recap</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSLeWxXovc5AAP7j9Gziv-NjaEGnrejBYAfhAPUtJLl4sdCRM11VTQWOvD4xwZJB-sn2P1c2hA9" alt="World Cup 2022: Croatia beat Brazil on penalties recap" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Cup favourites are eliminated as Croatia beat Brazil 4-2 on penalties in Qatar.</p></div>
            </div>
        </a><a href='https://www.foxsports.com/stories/soccer/world-cup-2022-top-plays-croatia-brazil-quarterfinals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Croatia vs. Brazil highlights: Croatia comes back to stun Brazil in PKs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0WfQ3wpr69czhCp_vmg-UNMBCg3AODXnKy8nkT9j6RXGDRUgZM2oSPQZBBaOp3VWUZSE1GJCZ" alt="Croatia vs. Brazil highlights: Croatia comes back to stun Brazil in PKs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Croatia stunned Brazil to open up the quarterfinals at the 2022 FIFA World Cup, winning in penalty kicks to advance.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/fifa-world-cup/news/croatia-vs-brazil-live-score-fifa-world-cup-qatar-2022-round-of-16-cro-vs-bra-lineups-streaming-soccer-wc-updates/article66240098.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Croatia vs Brazil highlights , FIFA World Cup quarterfinal updates ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQvynPuvuU_OVrjQAV_x3br3Q_wNiS3GBdpFUxpzyeX3gjlrkTgh0EqFJ0DGQXnCup2n-wi0yco" alt="Croatia vs Brazil highlights , FIFA World Cup quarterfinal updates ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Highlights of the Croatia vs Brazil World Cup 2022 quarterfinal match at the Education City Stadium.</p></div>
            </div>
        </a>
        </Template></>;
}