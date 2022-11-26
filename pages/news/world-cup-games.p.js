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
        </a><a href='https://www.espn.com/soccer/fifa-world-cup/story/4814115/2022-world-cup-mexico-aim-to-oust-messi-and-argentina-usa-can-build-off-england-draw-saturdays-best-bets'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 World Cup: Mexico vs. Messi, Argentina, USA vs. England</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTL--XNzZ6RgSbNdT_G06fdNDwY0QHwQCExkR4CesMEYNuD_GxXJbsJFcD1roTPcb8FdHP9LbTa" alt="2022 World Cup: Mexico vs. Messi, Argentina, USA vs. England" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Cup&#39;s matches on Friday saw Qatar eliminated, while England and USA entertained. Here&#39;s the latest and what&#39;s ahead at the World Cup.</p></div>
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
        </a><a href='https://economictimes.indiatimes.com/news/international/us/us-sacks-london-diplomat-as-a-joke-ahead-of-crucial-world-cup-match-with-england/articleshow/95774825.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US &#39;sacks&#39; London diplomat as a joke ahead of crucial World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTU8ZOchOHnbkfUrsyyU51YBa4ceXhUi4WT6bcs0LKSvQNpPrtRz45Mn7aBCbUQnsG6HxxRF4uy" alt="US &#39;sacks&#39; London diplomat as a joke ahead of crucial World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Before tonight&#39;s game versus England, the US embassy in London joked about firing a London ambassador for supporting the Three Lions.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/neymar-ruled-out-of-brazil-s-remaining-fifa-world-cup-group-stage-matches-with-ankle-injury-101669387963457.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neymar ruled out of Brazil&#39;s remaining FIFA World Cup group stage ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQMjpIoNPMVHvvHzVtoLCF9o6G6Yi415Swb-6nEgu1yTiVuTjbw3V_C0rB6wplV9NgK5ST3BAuH" alt="Neymar ruled out of Brazil&#39;s remaining FIFA World Cup group stage ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A day after their stunning 2-0 win against Serbia in their FIFA World Cup 2022 opener, their star player Neymar has been ruled put of the remaining of the&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/fifa-world-cup/news/neymar-out-of-brazil-injury-group-stages-in-fifa-world-cup/article66184458.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neymar, Danilo out of Brazil&#39;s FIFA World Cup group stage matches</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT8LscbCMyUNG4Y3q9ax1Dop04onDZjDhEwbvmR0W2r3P_pbXkanz96hkF9op-eweyBxKSA78U_" alt="Neymar, Danilo out of Brazil&#39;s FIFA World Cup group stage matches" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brazilian duo Neymar and Danilo will miss Brazil&#39;s remaining World Cup group games against Switzerland and Cameroon after sustaining ankle injuries in&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/football/neymar-set-miss-rest-of-brazils-world-cup-group-games-with-ankle-injury-8290799/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neymar set miss rest of Brazil&#39;s World Cup group games with ankle ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTGPQnqHdvKZsGhQC5fv8UJxgZW6DwzR5PG9a9wulcU8hzTOkXLqidxG66CqKRHLRdI64djEs9n" alt="Neymar set miss rest of Brazil&#39;s World Cup group games with ankle ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neymar was forced off against Serbia with 10 minutes to play, having been on the end of several heavy tackles.</p></div>
            </div>
        </a>
        </Template></>;
}