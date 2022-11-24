import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dancing With the Stars</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dancing With the Stars"/>
        <meta name="description" content="Trending News about Dancing With the Stars" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dancing With the Stars</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221122105729-dancing-with-the-stars-tyra-banks-221121.jpg?c=16x9&q=w_800,c_fill" alt="Dancing With the Stars"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/22/entertainment/dancing-with-the-stars-winner-finale-season-31/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Dancing With the Stars&#39; names Season 31 winner</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSmWhNAnDA6BlCodjBjm03icZGWUdTVumyLXzK1Aq_x0eQdzHFs6uIxyOUTP76lCONgMz_US0oF" alt="&#39;Dancing With the Stars&#39; names Season 31 winner" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gabby Windey and Val Chmerkovskiy danced to “I Like It” by Pete Rodriguez and scored a perfect score. TikTok personality and reality TV star Charli D&#39;Amelio, 18&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vulture.com/2022/11/dancing-with-the-stars-finale-season-31-winner-charli-damelio.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World&#39;s Most Famous Dancer Wins Dancing With the Stars</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRLiNScUP04jSpERcADUg1bYoa-XpgBRpSZ_7hRzIbM80muwnjhMPtN5_uKRI6IZBpLm4EWerM3" alt="World&#39;s Most Famous Dancer Wins Dancing With the Stars" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The live finale aired on Disney+ and featured D&#39;Amelio and her dance partner Mark Ballas beating out fellow finalists Gabby Windey and Val Chmerkovskiy, Wayne&nbsp;...</p></div>
            </div>
        </a><a href='https://www.etonline.com/cheryl-burke-addresses-speculation-she-will-join-dancing-with-the-stars-judges-panel-exclusive'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cheryl Burke Addresses Speculation She Will Join &#39;Dancing With ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRS8nhcXhAwYKyOj62IPuWVzVAuk8PmQzrLSf4ofygKKh_0e9z6Q3enAKmOfb4j6slKdsl_evna" alt="Cheryl Burke Addresses Speculation She Will Join &#39;Dancing With ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The long-time &#39;DWTS&#39; pro spoke with ET after her farewell episode, and the season 31 finale, on Monday.</p></div>
            </div>
        </a><a href='https://www.bocaratontribune.com/bocaratonnews/2022/11/who-won-dancing-with-the-stars-last-night-11-21-22/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who won &#39;Dancing With the Stars&#39; last night (11/21/22)? - Boca ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSn8kJoDdIzKMOtIihdoxg7fA2VYDkLdDtuFcCcG3Gwaz_3GZY1FZkRxKLn1di0hHTlsPoodT8c" alt="Who won &#39;Dancing With the Stars&#39; last night (11/21/22)? - Boca ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The final four couples competing in the finale of “Dancing With the Stars” on Disney+ on Monday, Nov. 21, 2022, were, from left, Wayne Brady and Witney&nbsp;...</p></div>
            </div>
        </a><a href='https://www.disneydining.com/dancing-with-the-stars-pro-leaving-after-26-seasons-ks1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Dancing With The Stars&#39; Pro Leaving After 26 Seasons</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRiXXBaJDoN7fmNKhYu8LQKFvkPNdnDCVyxjHj2yvSNM-Iztd7MMcJt6_SDfWWXihnldo00HmTv" alt="&#39;Dancing With The Stars&#39; Pro Leaving After 26 Seasons" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The dancers teach the celebrities how to dance classic ballroom dances like the Waltz, the Tango, and the Foxtrot and compete for the coveted Mirrorball Trophy.</p></div>
            </div>
        </a><a href='https://www.billboard.com/music/music-news/charli-damelio-dancing-with-the-stars-performances-1235175784/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Here Are All of Charli D&#39;Amelio&#39;s &#39;Dancing With the Stars ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQGNigXEWs7goBjINN1n2WviGwVM0_rjVdD-xPnsKo3W_g-75IKFObY_aicdiigcQmIGRzWpfnL" alt="Here Are All of Charli D&#39;Amelio&#39;s &#39;Dancing With the Stars ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Charli D&#39;Amelio and her Dancing With the Stars partner Mark Ballas were crowned the season 31 champions of the dance competition show.</p></div>
            </div>
        </a><a href='https://pagesix.com/2022/11/22/cheryl-burke-compares-dwts-exit-to-matthew-lawrence-divorce/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cheryl Burke says &#39;DWTS&#39; exit is like &#39;another&#39; divorce – but &#39;amicable&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcREdRPrspeLoqAYG8llkqDdih4Ndts2ysmeRYTz97IkO55l4Caha557xgDulrLzhS9gToCu0YFR" alt="Cheryl Burke says &#39;DWTS&#39; exit is like &#39;another&#39; divorce – but &#39;amicable&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cheryl Burke spoke to Page Six about leaving “Dancing With the Stars” after 26 seasons and why it feels similar to her divorce from Matthew Lawrence.</p></div>
            </div>
        </a><a href='https://shadowandact.com/dancing-with-the-stars-fans-upset-as-wayne-brady-and-shangela-lose-to-charli-damelio-judges-keep-nitpicking/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Dancing With The Stars&#39; Fans Upset As Wayne Brady And Shangela ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTDfHTy_f940cFz-K3S7_BlLA9izj219on4Sok3_d8bpss7xhyBUU4qMUwbV9exl7WgEeuaaNFh" alt="&#39;Dancing With The Stars&#39; Fans Upset As Wayne Brady And Shangela ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dancing with the Stars viewers are irate over Monday night&#39;s finale results which saw a TikToker win and its final two Black starrs lose.</p></div>
            </div>
        </a><a href='https://www.newsweek.com/who-won-dancing-stars-2022-winner-charli-damelio-results-mark-ballas-1761282'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who Won &#39;Dancing With the Stars&#39;? Here&#39;s How Your Favorites Placed</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQvTp9KXK_VmaoHDP7bfcxPPe8hXgn0efkF2QpvqdPBphGLzOvn2FhPcp0bqlxEhu1tLr601vdh" alt="Who Won &#39;Dancing With the Stars&#39;? Here&#39;s How Your Favorites Placed" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;RuPaul&#39;s Drag Race&quot; star Shangela, &quot;The Bachelorette&quot; Gabby Windey, TikTok star Charli D&#39;Amelio and actor Wayne Brady battled it out in the grand finale.</p></div>
            </div>
        </a><a href='https://www.tvinsider.com/1071011/cheryl-burke-leaving-dancing-with-the-stars-new-judge-len-goodman-replacement/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;DWTS&#39;: Cheryl Burke Talks About Her Last Dance &amp; Possible Future ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_7SKsh1IwUno2RCb5qxwQQSLrPHFIkItcjdsMIkXQeD1pob5nLol3_hn32y4fYm9RSDnZAr4h" alt="&#39;DWTS&#39;: Cheryl Burke Talks About Her Last Dance &amp; Possible Future ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dancing With the Stars Season 31 has come to an end and the show will never be the same again. Not only did original show judge Len Goodman announce his&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}