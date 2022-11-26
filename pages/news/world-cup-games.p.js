import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup games</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup games"/>
        <meta name="description" content="Trending News about World Cup games" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup games</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/11/25/ap22329734094337_wide-6c2ea22e0f407212e92845c90058b908b4ebcf99-s1400-c100.jpg" alt="World Cup games"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/11/25/1139220807/usmnt-england-world-cup-tie-qatar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The U.S. ties England in a scoreless World Cup game</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTexvk3sHPqvXWfpCv48A1OeblU4ANdu3GAdHeoLerJOh-iuzhil8LG9nwmZ0fVjeiGKvad-fd5" alt="The U.S. ties England in a scoreless World Cup game" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The U.S. men&#39;s team must beat Iran on Tuesday to reach the knockout stage. England leads the pack in the latest group standings.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/fifa-world-cup/news/england-vs-usa-live-score-updates-fifa-world-cup-qatar-2022-commentary-eng-vs-usmnt-lineups-highlights/article66184595.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ENG 0-0 USA Highlights, FIFA World Cup: USA stays in hunt for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSD5KumbPLed1i8UOrHi0hRGfFgMTeBi9VTwO5rjyjxUtE-xxMD5SZMC0u8u3eKDIu5zyHSwWu3" alt="ENG 0-0 USA Highlights, FIFA World Cup: USA stays in hunt for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Catch the highlights, score, updates, commentary from the England vs USA Group B FIFA World Cup game at the Al Bayt Stadium.</p></div>
            </div>
        </a><a href='https://www.cnet.com/tech/services-and-software/watch-usa-vs-england-world-cup-2022-match-from-anywhere/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch USA vs. England World Cup 2022 Match From Anywhere</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSnx6GhczL3vcUNL-exMs3mcFKIaOkevFHSUBJyAWu9GuAgZGaTfPnAl_C_FFbJ441hPSbtiVgU" alt="Watch USA vs. England World Cup 2022 Match From Anywhere" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On Black Friday, the two favorites in Group B face off in one of the most anticipated early matches of the tournament.</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/fifa-world-cup/story/4814115/2022-world-cup-mexico-aim-to-oust-messi-and-argentina-usa-can-build-off-england-draw-saturdays-best-bets'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 World Cup: Mexico vs. Messi, Argentina, USA vs. England</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTL--XNzZ6RgSbNdT_G06fdNDwY0QHwQCExkR4CesMEYNuD_GxXJbsJFcD1roTPcb8FdHP9LbTa" alt="2022 World Cup: Mexico vs. Messi, Argentina, USA vs. England" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Cup&#39;s matches on Friday saw Qatar eliminated, while England and USA entertained. Here&#39;s the latest and what&#39;s ahead at the World Cup.</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/fifa-world-cup-2022-broadcast-tv-and-ott-live-streaming-when-and-where-to-watch-netherlands-vs-ecuador-537450'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 Broadcast TV and OTT-Live Streaming: When ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT3-40KCSJK2yPBvrtJy1_8z22s08Wa0AxsIWxfhh1WRixkagCbL78Rh0MBt6YiVFq8lCvYg0gG" alt="FIFA World Cup 2022 Broadcast TV and OTT-Live Streaming: When ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After a thumping 2-0 win over Senegal in their opening match of the FIFA World Cup 2022, the Netherlands are back in action on Friday facing Ecuador at the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sport/football/fifa-world-cup-2022-england-suffer-reality-check-in-0-0-draw-with-us/article66185602.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 | England suffer reality check in 0-0 draw with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQEAtoi0LycSD2k39ZtP3sc_ezDpsmW5uuuBacuk2Tv8m42xCncch1OAdsZVaWXz4n41JkLr9nB" alt="FIFA World Cup 2022 | England suffer reality check in 0-0 draw with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While the draw, England top Group B on four points and remain in the box seat to reach the last 16. The United States have two points.</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/sports/2022/11/26/mexico-vs-uruguay-last-chance-for-messis-men'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Mexico vs Argentina match preview</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRItp3gPCoqdSjtapZy6S7dLKiC6LXFC9nuJ4kfjJj3Wp0Rre6oPi5q2oUpw27WNqRJci08bx1M" alt="World Cup 2022: Mexico vs Argentina match preview" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina are under huge pressure to get a win after the shock defeat to Saudi Arabia in their Group C opener.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/essentials/2022-fifa-world-cup-how-to-stream-todays-england-vs-usa-game-2022-11-25/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 FIFA World Cup: How to stream today&#39;s England vs. USA game</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZkk62SyZvLY1GZbfZYJPpjJHJupTJ4J2dl4wmveztt7WAZux9zHDIwPmezOzuk8sLiGaZP5hD" alt="2022 FIFA World Cup: How to stream today&#39;s England vs. USA game" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Watch England vs. USA 2022 FIFA World Cup game right now for free. Plus, find more FIFA streaming options.</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/fifa-world-cup-2022/what-us-coach-said-about-facing-iran-in-fifa-world-cup-3554669'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What US Coach Said About Facing Iran In FIFA World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxN-lzZHEwURIr9253pVsgMBqwZ9IlAWjRfsQOoS1s97wXHv4JqTwbphzD0Z_8dSMXDeObhhQ4" alt="What US Coach Said About Facing Iran In FIFA World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>United States coach Gregg Berhalter said politics would not come into his team&#39;s must-win World Cup clash with Iran following the Americans&#39; battling draw&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/fifa-world-cup-2022/argentina-look-to-lionel-messi-to-salvage-world-cup-bid-3554645'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina Look To Lionel Messi To Salvage World Cup Bid</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzWwLNjAylANKc821_j7JAKip3CQRakiRFuza_NadZpZobq2KykkJ5_K-GsTmv3Aqz4pdQ6PNi" alt="Argentina Look To Lionel Messi To Salvage World Cup Bid" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina will seek to save their World Cup skins in Qatar on Saturday when Lionel Messi and his teammates face Mexico in a match they cannot afford to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}