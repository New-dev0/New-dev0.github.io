import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>PSG</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,PSG"/>
        <meta name="description" content="Trending News about PSG" /></Head><Template>
            <h1 style={{fontSize: "30"}}>PSG</h1>
            <Image width={800} height={500} src="https://assets.telegraphindia.com/telegraph/2022/Nov/1667512560_1666048371_telemmglpict000311280256_trans_nvbqzqnjv4bquqlaxevitqzvgs-unrw1uun3pioiz0rwsaw6niwssz4.gif" alt="PSG"/>
            <h3>Recent News</h3>
            <a href='https://www.telegraphindia.com/sports/football/benficas-six-stun-psg-into-second-spot/cid/1896072'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benfica&#39;s six stun PSG into second spot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSjIwjAI1YtatKNhhsyelzmlzLtsQ_pgnNfED_L_myxISboVPRVXuKtpbUqSU1herZ8NYgFNNgG" alt="Benfica&#39;s six stun PSG into second spot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mbappe, who turned down a move to Real Madrid last summer, could face the Spanish champions if Monday&#39;s draw at Nyon picks them so.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/mbappe-laments-lack-of-warning-psg-stars-losing-top-spot-champions-league-group/blt460c435a8f37f853'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;We did not know&#39; - Mbappe laments lack of warning for PSG stars ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5kI8Ovm_hUX3ERsCyp9XpjkfKF7u1RsFfzTU8haMn6HZCxSSHmxS8zjxXzzt7bGTw_zYOZXS9" alt="&#39;We did not know&#39; - Mbappe laments lack of warning for PSG stars ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>has expressed his frustration over Paris Saint-Germain&#39;s failure to land top spot in their Champions League group.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/champions-league/juventus-vs-psg-live-score-champions-league-ucl-updates-messi-neymar-mbappe-juve-vs-paris-saint-germain/article66088344.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Juventus 1-2 PSG Highlights: Mendes ensures Champions League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS3mFw9R0tUmr1iRvCRZM38sEA9urkl__KxuyC8nd9L_wh67nR2MKQFGmNjtSHMz4TUY23xLHk7" alt="Juventus 1-2 PSG Highlights: Mendes ensures Champions League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A touch off his first touch by Nuno Mendes was enough to secure three points for Paris Saint-Germain as the French side completed a double over Juventus in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/2022/11/3/champions-league-roundup-benfica-top-group-as-juventus-crash-out'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League roundup: Benfica top group ahead of PSG</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSU7ILkzRi6mD_Y8kWj1hKZnw4OrW5hLBEzqTEsKiDtIKI1DzcXVY71mTHPAQbP5U5qEicYuHlM" alt="Champions League roundup: Benfica top group ahead of PSG" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Benfica put six goals past Maccabi Haifa to claim the top spot in Group H ahead of PSG, as Real Madrid thrash Celtic.</p></div>
            </div>
        </a><a href='https://www.ligue1.com/Articles/OTHER-COMPETITIONS/2022/11/02/psg-focused-on-topping-group-h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG focused on topping Group H</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTW_mgmuZSfu3SLHllulwID2qTIX3YpFxeKmjXLVdq9-OkuksL_LsMvcqxKbrksLzxJIMRlpWh7" alt="PSG focused on topping Group H" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PSG will claim seeded status for the round of 16 should they emerge victorious from their trip to Turin and top Group H - but no-one is expecting an easy&nbsp;...</p></div>
            </div>
        </a><a href='https://theathletic.com/live-blogs/champions-league-scores-juventus-psg-chelsea-man-city/XhPZYjYF1f6s/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How PSG beat Juventus 2-1 but lost out to Benfica at top of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT92Whv6jXSMhAMrybT1iKcaaOripeMFX-nMdJV_Y3l_9wifkiAkP3TcVJDZSx_B46hQ_Ecs0jZ" alt="How PSG beat Juventus 2-1 but lost out to Benfica at top of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paris Saint-Germain beat Juventus 2-1 in their final Champions League group-stage fixture but were remarkably overtaken by Benfica as Group H winners.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/football/lionel-messis-psg-vs-juventus-live-streaming-when-and-where-to-watch-uefa-champions-league-live-coverage-on-live-tv-online-2530239.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messis PSG vs Juventus Live Streaming: When and Where to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSrd9Tl2SHB3nYGb0eEG1Y5OXil2HGPXKtmvhbsgnFFqIUVqhz7U08S6psgb83H7AX4ZrGY9JmT" alt="Lionel Messis PSG vs Juventus Live Streaming: When and Where to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi&#39;s Paris Saint-Germain will travel away from home to take on Italian giants Juventus for their UEFA Champions League fixture.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/lists/champions-league-winners-losers-benfica-psg-simeone-european-exit/blt5e0cf390ccf864dd'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The moment that changed PSG&#39;s season? Champions League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSmfqXJ22gkm-NfrtSDQ6YCZjjJeNqCLP-ykWXsg_2IkEcAA-vxecWnwj1tZG4jj57addX80193" alt="The moment that changed PSG&#39;s season? Champions League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A 92nd-minute strike from Benfica&#39;s Joao Mario means Lionel Messi, Neymar and Kylian Mbappe of the mighty Paris Saint-Germain will be among the second seeds&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/sports/football/story/champions-league-benfica-psg-vs-juventus-real-madrid-2292717-2022-11-03'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League: Real Madrid thrash Celtic 5-1, Benfica pip PSG ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2m86HiGBDQ4aU2dGz39hFECot_39J-20jfuM1W9wcg0_BVpWizKT5q_Bq10YFBUgjgxFlc4tg" alt="Champions League: Real Madrid thrash Celtic 5-1, Benfica pip PSG ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Champions League: Late drama in the competition meant that Benfica topped Group H after defeating Maccabi Haifa 6-1. This meant that PSG, despite winning&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/football/article-11386043/Kylian-Mbappe-says-PSG-players-unaware-Benfica-doing-finished-second.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kylian Mbappe says the PSG players were unaware of how Benfica ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShdT8CcyYjH5rxZBlaV-O_nQYZv_sibKsYsMevhkf6SkjQCLCJQqKIT6OUMYW5VDYaIxgRXk_v" alt="Kylian Mbappe says the PSG players were unaware of how Benfica ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kylian Mbappe admits PSG&#39;s players DIDN&#39;T KNOW what was happening elsewhere after Benfica pipped them to top spot in their Champions League group on AWAY GOALS&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}