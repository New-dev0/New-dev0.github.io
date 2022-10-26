import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>UEFA Champions League</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,UEFA Champions League"/>
        <meta name="description" content="Trending News about UEFA Champions League" /></Head><Template>
            <h1 style={{fontSize: "30"}}>UEFA Champions League</h1>
            <Image width={800} height={500} src="https://editorial.uefa.com/resources/027a-166f162d7559-5b1a373fee3b-1000/fbl-eur-c1-liverpool-training.jpeg" alt="UEFA Champions League"/>
            <h3>Recent News</h3>
            <a href='https://www.uefa.com/uefachampionsleague/news/027a-166c836be4bf-5c69134ae7f1-1000--champions-league-matchday-5-wednesday-team-news-and-predicted-l/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League: Matchday 5 Wednesday team news and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRHC1SejWE_K7RBuZWSqyPVfmsenEKOTQcWxRZ_oPgIkKmV5TkN8JqrMc0O9ZLaqncjVT20Dfkh" alt="Champions League: Matchday 5 Wednesday team news and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Who&#39;s likely to start, who might be left out and who is unavailable? UEFA.com predicts all the line-ups for the second set of games on UEFA Champions League&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/soccer/news/uefa-champions-league-predictions-picking-the-16-teams-to-advance-atletico-barca-and-juventus-in-trouble/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Champions League predictions, picking the 16 teams to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPngTvROTHvPtTht_xO9Ko7dv0FKcCDTzVwxjoQSaqrDGd1CggnifNZaevyYoBFXKEXNcmtxvL" alt="UEFA Champions League predictions, picking the 16 teams to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With two matches to go in the group stage, it&#39;s time to pick who&#39;s going to go through.</p></div>
            </div>
        </a><a href='https://www.sportsgrid.com/betting/uefa-champions-league-week-5-best-bets/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Champions League Week 5 Best Bets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT8vtVDdazwQ7h9X71IszAsdmdN_HlCNdLaENF7m3SxqgtqKmvHVlBlMP-rKRcR-AWVB_FhNuoa" alt="UEFA Champions League Week 5 Best Bets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Despite the parity among the groups, there is always value to be found, and this year&#39;s Champions League has been surprisingly predictable.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/ca/soccer/news/champions-league-permutations-scenarios-teams-qualify-knockout/u2nw70uc9glacjwrvzdqa83o'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League permutations and scenarios for qualification ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRymQjnjjp2KTIWwg3poF4GID56j6T0NfYBMDDYiCtg24Dc_JwT5tXFZUcK9L_m-IbXxuKmrfdZ" alt="Champions League permutations and scenarios for qualification ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Of the 16 knockout stage places up for grabs, only six have been secured, with Chelsea joining the likes of giants Real Madrid, Bayern Munich, Manchester City,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/soccer/liverpool/news/liverpool-can-qualify-for-uefa-champions-league-knockout-stages-on-wednesday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool Can Qualify For UEFA Champions League Knockout ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1EnxgU-5ZbOQt6NwZ7T17bYH6qr44oplihOjVPhyb2UsrgiruJWJ9H73CMqLk06cmAYJT9dVA" alt="Liverpool Can Qualify For UEFA Champions League Knockout ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jurgen Klopp&#39;s side travel to Amsterdam to play against Ajax at the Johan Cruyff Arena, with qualification on their mind.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/champions-league-permutations-what-barcelona-liverpool-chelsea-every-team-needs-to-reach-last-16/blt0e0b834fce6fa9b6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League permutations: What Barcelona, Liverpool ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRuaVAwqbWjzs8pnulYzX80U5hLhKwzifCq7Yogsum4LjJFpYqTOihTPxTJz2MeA6BtT8rlo7EF" alt="Champions League permutations: What Barcelona, Liverpool ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>GOAL tells you how the European powerhouses including Barcelona, Chelsea &amp; Liverpool can qualify for the Champions League knockout stage.</p></div>
            </div>
        </a>
        </Template></>;
}