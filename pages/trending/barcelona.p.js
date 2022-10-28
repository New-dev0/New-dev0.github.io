import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Barcelona</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Barcelona"/>
        <meta name="description" content="Trending News about Barcelona" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Barcelona</h1>
            <Image width={800} height={500} src="https://www.theweek.in/content/dam/week/news/sports/images/2022/10/28/barcelona-champions-league-afp.jpg" alt="Barcelona"/>
            <h3>Recent News</h3>
            <a href='https://www.theweek.in/news/sports/2022/10/28/barcelonas-champions-league-exit-what-went-wrong.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona&#39;s Champions League exit: What went wrong</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsKuLpaLpEYk-koN76Q_oKYVrj5u_Jr6JeO4XZASmkBXMV0TZlsxlnuf7gj7dXLHWmKBhJKTM3" alt="Barcelona&#39;s Champions League exit: What went wrong" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Even before a 3-0 loss at home against Bayern Munich, Barcelona were out of the tournament after Inter Milan defeated Viktoria Plzen 4-0 in the earlier game.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/la-liga/barcelona-out-of-champions-league-into-uefa-europa-league-without-lionel-messi/article66061861.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona faces reality after 2nd straight Champions League flop</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTtFGnIQPVFrywR8cAY9xWEFvc2yCSkAYi8VPbJeOf0vZWer-q2kZOtXYQNAlV8XucobY7FlTvA" alt="Barcelona faces reality after 2nd straight Champions League flop" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For the second year in a row, Barcelona&#39;s Champions League campaign ended in the group stage on Wednesday, and this year&#39;s flop is much harder to deal with.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/football/i-can-focus-on-chess-and-barcelona-on-the-europa-league-magnus-carlsen-trolls-barcelona-8232468/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;I can focus on chess and Barcelona on the Europa League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRh6M4pJhgQBmwP5P73HjAq20JY-Pw2nUu0t-nJfT6go9Ck31T0VAqvNjs2f6sNNotlR4fGRKxo" alt="&#39;I can focus on chess and Barcelona on the Europa League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Chess Champions Magnus Carlsen made a hilarious comment on Barcelona&#39;s exit from Champions League even before loss to Bayern. Carlsen took to Twitter&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/barcelona-volcano-would-have-erupted-without-xavi-not-to-blame-for-champions-league-exit-henry/blt9b8e78c8a8603cbb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona &#39;volcano would have erupted&#39; without Xavi &amp; he is not to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1GL_soBifdCDzZvdXxZzrgIRJn4fvBDHE-Zhk_3YMKYotNbLFX5dmSjzDRCMc08AiLivXQQiV" alt="Barcelona &#39;volcano would have erupted&#39; without Xavi &amp; he is not to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thierry Henry has said the situation at Barcelona would be much worse without Xavi at the club, despite their early Champions League exit.</p></div>
            </div>
        </a><a href='https://www.singletonargus.com.au/story/7959804/barcelona-face-reality-amid-more-woes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona face reality amid more woes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSPPKHjwWFCM2qkmc0nw6760F-tk8fpWMxcVsCnar-hjN217_lFLW52b49U-0ryO8teKva9MEDr" alt="Barcelona face reality amid more woes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fans could understand why Barcelona struggled in the months following the exit of Lionel Messi at the start of last season. Rudderless without the soccer great,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/little-dividend-yet-from-barcelona-s-real-move-101666894567808.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Little dividend yet from Barcelona&#39;s Real move</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6SMHu8fcOoR2N0IW24fiSBDehGl9EROfDkmGP99gRnjg6kZylYDmthqoIdde43HNRoIAJRXA1" alt="Little dividend yet from Barcelona&#39;s Real move" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The club spent big on players in a bid to go deep in the Champions League but will now play in Europa League | Football News.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/barcelona-back-europa-league-where-they-belong-right-now/bltb94f0b887e0b4ef3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona back where they belong right now: the Europa League</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKPsma6NEAfauJWJ242Q9YKc9I3ILMerNnLXF8LT_OB6L_u70XYJSW5ziR-ROUi6WxXmiPdOzE" alt="Barcelona back where they belong right now: the Europa League" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Xavi made his Barcelona players watch Inter&#39;s win over Viktoria Plzen on Wednesday evening, ahead of their own Champions League clash with Bayern Munich at&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/football/barcelona-espbarcelona/story/4781921/barcelona-knocked-out-of-champions-league-group-stage-for-second-consecutive-season'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona out of Champions League group for 2nd year in row</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSiDwFp1vdVrujYHbsXkJBb4TkKYeeoe4xrLajDwXzgGNutQD0TQu90sxIKZUrN2ix8HLMcsKVw" alt="Barcelona out of Champions League group for 2nd year in row" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona have been knocked out of the Champions League in the group stage for the second season running after Inter Milan beat Viktoria Plzen.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/champions-league/uefa-champions-league-barcelona-eliminated-europa-xavi-hernandez/article66059473.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona needed a beating in order to grow, Xavi Hernandez says</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFsA1CVHdVwf-P_oa2hhLuJgviPHVg2qXSDeCn0WGE6SRAUJ9dpbGs0NjXIdYtd8v8ufEwWpM2" alt="Barcelona needed a beating in order to grow, Xavi Hernandez says" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona has won only one of its five games in the group and will continue in the second-tier Europa League after ending up third in their group for a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/barcelona-lack-many-things-don-t-deserve-to-still-be-in-champions-league-pedri/blt1e09b2e267d6a827'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona &#39;lack many things&#39; and &#39;don&#39;t deserve&#39; to still be in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSy3u6pIFOSRi7OO-D-4C0V705XwdT0x6LfvMS38e9KmQ_T4wxrVK69Fia0KlWGWoDnYik-8fZ" alt="Barcelona &#39;lack many things&#39; and &#39;don&#39;t deserve&#39; to still be in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pedri admitted that Barcelona are not good enough to compete in the Champions League after they were eliminated from the competition on Wednesday.</p></div>
            </div>
        </a>
        </Template></>;
}