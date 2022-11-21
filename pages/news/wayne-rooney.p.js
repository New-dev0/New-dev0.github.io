import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wayne Rooney</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wayne Rooney"/>
        <meta name="description" content="Trending News about Wayne Rooney" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wayne Rooney</h1>
            <Image width={800} height={500} src="https://i.dailymail.co.uk/1s/2022/11/20/18/64685351-0-image-a-12_1668970540003.jpg" alt="Wayne Rooney"/>
            <h3>Recent News</h3>
            <a href='https://www.dailymail.co.uk/sport/sportsnews/article-11450211/Wayne-Rooney-takes-fresh-swipe-Cristiano-Ronaldo-ongoing-spat-former-United-teammates.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wayne Rooney takes fresh swipe at Cristiano Ronaldo in ongoing ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQlmLWrfbeHFbMEfEgtdxeHxzln6G4eIbQRZrGFXH27PyvT5fVi-nXaZo_uCgg-c6KoTmV4reSi" alt="Wayne Rooney takes fresh swipe at Cristiano Ronaldo in ongoing ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Man United legend was asked on Indian TV who he would start, who he would bench and who he would drop between Cristiano Ronaldo, Lionel Messi and Harry&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/fifa-world-cup/news/fifa-world-cup-start-messi-drop-ronaldo-kane-wayne-rooney-manchester-united-argetina-portugal-qatar-2022-wc/article66161817.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What did Rooney say about Messi and Ronaldo?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqy193yYgQm-VTgjBIwtAGIZdrHHGi2abLLyCBvsHQj2GcApcofDKubcFbRL9M32ewhpCHNaEt" alt="What did Rooney say about Messi and Ronaldo?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England forward Wayne Rooney has said that given a choice between starting, benching and dropping Lionel Messi, Cristiano Ronaldo and Harry Kane,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/football-news/cristiano-ronaldo-interview-wayne-rooney-25563295'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;He&#39;s not playing&#39; - Manchester United great Wayne Rooney delivers ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9dF9CdA17at2HDAXfbfwMFCxGyrATVPYNH0ROMEN1HnH7Yx8AGtDXD5hIqSoLSC0BnTfBmjrd" alt="&#39;He&#39;s not playing&#39; - Manchester United great Wayne Rooney delivers ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo recently criticised his former Man United teammate Wayne Rooney during his interview with Piers Morgan.</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/will-start-lionel-messi-bench-harry-kane-and-drop-cristiano-ronaldo-wayne-rooney-ahead-of-fifa-world-cup-535891'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Will start Lionel Messi, bench Harry Kane and drop Cristiano ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6DnOD8qWA0GfJXG9-eC1PKHNC3Sh4IzEGNUadwXUF2R_HWi6zOod4sX6NPJ07nCkgnrZydWKk" alt="Will start Lionel Messi, bench Harry Kane and drop Cristiano ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former England captain Wayne Rooney said he wi start Lionel Messi, drop Cristiano Ronaldo and bench England striker Harry Kane if given a choice between&nbsp;...</p></div>
            </div>
        </a><a href='https://strettynews.com/2022/11/20/wayne-rooney-says-hed-start-messi-bench-kane-and-drop-ronaldo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wayne Rooney says he&#39;d start Messi, bench Kane and drop Ronaldo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR3SlM3ohq1CuhZkmS-z_BizP3PneeXFswCC6thLpHQ7vF2vjpVVONyuK0R1Dw-uTEz0NXxHCv0" alt="Wayne Rooney says he&#39;d start Messi, bench Kane and drop Ronaldo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wayne Rooney was again put in the spotlight during a recent appearance on Indian TV and has response to a question about Lionel Messi, Cristiano Ronaldo and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mirror.co.uk/sport/football/news/wayne-rooney-england-world-cup-28538718'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wayne Rooney hid injury from England teammates after thigh went ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ_Q7LTW-IRrdcnaK5PntuuYb28iDbYTo0eEpnmWrVbvxC-xRlhnP9O1KY3ndX7mthxxXcJ9TOH" alt="Wayne Rooney hid injury from England teammates after thigh went ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former England striker Wayne Rooney has spoken of hiding the fact his thigh injury went black with blood from his teammates to avoid missing out on the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.caughtoffside.com/2022/11/20/video-wayne-rooney-says-hed-bench-cristiano-ronaldo-in-hilarious-comeback-to-interview/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>(Video) Wayne Rooney says he&#39;d bench Cristiano Ronaldo in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSbGSIYUKcit7Yedtn__l6hixr8WdDmNGPrv8L0NoIFnVdT2Y0Lnmz3okJ16o28YlmoyA3oletFJQ" alt="(Video) Wayne Rooney says he&#39;d bench Cristiano Ronaldo in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wayne Rooney has said he would leave Cristiano Ronaldo out of his team in a game of start, bench and drop. Ronaldo had criticised his former teammate just&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportbible.com/football/wayne-rooney-cristiano-ronaldo-lionel-messi-world-cup-20221120'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wayne Rooney says he&#39;d start Lionel Messi, bench Harry Kane and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSW2QUC4NHWo1veNfE6-Qg2GAhHQGK6Btrl_Q08USL1TvEzQvOE9Bi9DIt7My-a8_AjnOymdP4g" alt="Wayne Rooney says he&#39;d start Lionel Messi, bench Harry Kane and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The former Man Utd forward said: &quot;He [Ronaldo] isn&#39;t playing for his club, so...&quot;</p></div>
            </div>
        </a>
        </Template></>;
}