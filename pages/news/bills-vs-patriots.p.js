import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bills vs Patriots</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bills vs Patriots"/>
        <meta name="description" content="Trending News about Bills vs Patriots" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bills vs Patriots</h1>
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/bills/fhuybphov62jgkyia9dz" alt="Bills vs Patriots"/>
            <h3>Recent News</h3>
            <a href='https://www.buffalobills.com/news/top-3-things-we-learned-from-bills-vs-patriots-thursday-night-football'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Top 3 things we learned from Bills vs. Patriots | Thursday Night ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT940WcIRnqporVbMmBBvaqmZpfOS4AdRgbx5zbHaTs_7NrZ8eXfgLr8zA7fiLz5MB913NkFuxZ" alt="Top 3 things we learned from Bills vs. Patriots | Thursday Night ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Offense wore down the Patriots, red zone offense gets back on track and the defense locks up the Patriots offense.</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/recap/_/gameId/401437873'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bills vs. Patriots - Game Recap - December 1, 2022 - ESPN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTPeath03HCsO4RzxMViCPkQ8BwTjMnJpLI-_ttuFEwdB61DdTQ4DdcDrqLeYloo6OlNjDohYcN" alt="Bills vs. Patriots - Game Recap - December 1, 2022 - ESPN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a recap of the Buffalo Bills vs. New England Patriots football game.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nfl/news/thursday-night-football-odds-spread-line-patriots-vs-bills-predictions-nfl-picks-from-expert-on-16-7-roll/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thursday Night Football odds, spread, line: Patriots vs. Bills ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT10A2ldRTk2Kx0QaGJOP7ou01FtFHvZgCHhJRdlOxrZBycmkqkM4on_mnzMxBZJOsD14yM3Kfg" alt="Thursday Night Football odds, spread, line: Patriots vs. Bills ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Week 13 of the 2022 NFL schedule kicks off when the New England Patriots host the AFC rival Buffalo Bills on Thursday Night Football =at Gillette Stadium.</p></div>
            </div>
        </a><a href='https://www.nfl.com/news/2022-nfl-season-week-13-what-we-learned-from-bills-win-over-patriots-on-thursday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 NFL season, Week 13: What We Learned from Bills&#39; win over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZC21yKJTk96RCIUNyvMEvfi2JHmyWC1Oamr6bNqhta_DvlqP4qzQ5w6pd5oOgZ5aDSQayxUx7" alt="2022 NFL season, Week 13: What We Learned from Bills&#39; win over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quarterback Josh Allen and the Bills won in lopsided fashion over the Patriots on &quot;Thursday Night Football&quot; for their third straight win in the rivalry.</p></div>
            </div>
        </a><a href='https://www.patriots.com/news/expert-predictions-week-13-picks-for-patriots-vs-bills'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Expert Predictions: Week 13 picks for Patriots vs. Bills</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRpfOEis6yM7bPHA-Ad-Zob9kvsvKhmqqBA0PPnlqzIIle77hbpjGgmx04VU82pznsuOEsMJETq" alt="Expert Predictions: Week 13 picks for Patriots vs. Bills" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Experts share their picks for the Patriots Week 13 matchup against the Buffalo Bills. Mike Reiss, ESPN: Pick: Bills 27, Patiots 23.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/nfl/news/bills-patriots-live-score-updates-highlights/zkxcpctdxqaddats4xq1crpj'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bills vs. Patriots final score, results: Josh Allen, Buffalo cruise past ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQUG-cgx2Ty4WFvJXrVO73PZqoTHzxIkkjS-bq-B0rahKBhGNfG9x_aw1XywcWyqEMq6YZOsQu6" alt="Bills vs. Patriots final score, results: Josh Allen, Buffalo cruise past ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Sporting News tracked the key moments from Bills vs. Patriots on &quot;Thursday Night Football.&quot;</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/patriots/patriots-vs-bills-takeaways-pats-offense-crashes-back-down-earth'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots vs. Bills takeaways: Pats offense crashes back down to earth</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQx0CEOBtVkzKtUHywc9FHGsU4MdCwtMigY5DWlVXQW_A8AmpUjOjR4lBc56tmKdEXmxMuCB0ES" alt="Patriots vs. Bills takeaways: Pats offense crashes back down to earth" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The game was even more lopsided than the final score suggests. Buffalo dominated the time of possession 38:08 to New England&#39;s 21:52. Quarterback Josh Allen and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nfl.com/news/patriots-qb-mac-jones-on-sideline-blowup-in-loss-to-bills-just-kind-of-let-my-em'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots QB Mac Jones on sideline blowup in loss to Bills: &#39;Just kind ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTUIrrENFXpW-qSnidodHGP-HLllu3mJby2RdiSjJsKegWpjOFnxWdeNLIcrTrbhxKJfFHAgOXK" alt="Patriots QB Mac Jones on sideline blowup in loss to Bills: &#39;Just kind ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thursday night&#39;s Amazon Prime Video broadcast showed QB Mac Jones yelling on the sidelines during the Patriots&#39; 24-10 loss to the Bills.</p></div>
            </div>
        </a><a href='https://www.patriots.com/news/after-further-review-why-did-the-patriots-offensive-game-plan-fall-short-vs-bill'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>After Further Review: Why Did the Patriots Offensive Game Plan Fall ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTUC5otifVcHasK5Mz0qt6R4Hhvwajy43cBzDSSbls3IwSCImLqmNi2g5tyDGPxbe9UF6hxIvnp" alt="After Further Review: Why Did the Patriots Offensive Game Plan Fall ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Frustrations boiled over for the Patriots offense in a 24-10 loss to the Bills.</p></div>
            </div>
        </a><a href='https://www.foxnews.com/sports/patriots-use-surprising-player-score-first-touchdown-vs-bills'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots use surprising player to score first touchdown vs. Bills</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSKFrp7TKhQwYobNRWBvfs4VcI1sbTuNMklTrrYHH91dj14BNRfEsniDEuPvmlrKZgAqAFBRXci" alt="Patriots use surprising player to score first touchdown vs. Bills" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The New England Patriots figured the Buffalo Bills defense wasn&#39;t thinking about cornerback Marcus Jones in its game planning this week, and it paid off for&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}