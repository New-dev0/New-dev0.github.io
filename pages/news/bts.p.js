import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>BTS</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,BTS"/>
        <meta name="description" content="Trending News about BTS" /></Head><Template>
            <h1 style={{fontSize: "30"}}>BTS</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1e5847248a7a07d5/637a4d0ee7e7291fc4fb369a/BTS.jpg" alt="BTS"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en/news/bts-frontman-jung-kook-performs-world-cup-anthem-dreamers-opening-ceremony/blt88b814a1ca83408b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: BTS frontman Jung Kook performs World Cup anthem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRVsuqyHO-OHoy76_hHZa4GhMIKSj9_W84Gcx_v3IAl8B42LfX6QBPFfaUwqz-xMU6HmnysIAjj" alt="WATCH: BTS frontman Jung Kook performs World Cup anthem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 2022 World Cup has finally begun in Qatar, with an opening ceremony including a performance from the BTS frontman.</p></div>
            </div>
        </a><a href='https://sportsbrief.com/football/28268-bts-star-jung-kook-lights-world-cup-opening-ceremony-spectacular-performance/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTS Star Jung Kook Lights Up World Cup Opening Ceremony With ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTRICXmX01dUp_1xcQY_5C96ecpKxxcxt3fouyp1hnI0FAsL3qYxrwLI5m0yFAj4C7AioUU35cr" alt="BTS Star Jung Kook Lights Up World Cup Opening Ceremony With ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SportsBrief.com News ☆ A member of South Korea musical band BTS, Jung Kook produced a spectacular musical performance at the opening ceremony of the 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/11/20/morgan-freeman-bts-jungkook-kick-off-world-cup-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morgan Freeman &amp; BTS&#39; Jungkook Kick Off 2022 World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRXjIwA3H-w_SZp9yWNhMJemsiu1koZLXQvLMg0ej0No-QG3pWFPXdozGe7ZG2A0c7DMhyQTRoj" alt="Morgan Freeman &amp; BTS&#39; Jungkook Kick Off 2022 World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Morgan Freeman and BTS&#39;s Jungkook were a bit of an unlikely pair to kick off the #QatarWorldCup2022, but they made it work anyway!</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/who-is-jungkook-the-bts-member-who-performed-at-the-opening-of-the-world-cup-in-qatar-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Jungkook, the BTS member who performed at the opening of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTpXFad1L4I8s7C8liiRj3xqNo2yQw7hMtzt7q2NL0wh3Y1jJHZkxvx2D77Mo1kEudyoTXOVkSX" alt="Who is Jungkook, the BTS member who performed at the opening of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meet Jungkook, the K-pop superstar and BTS member performing at the opening of the 2022 FIFA Soccer World Cup in Qatar.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/entertainment/music/jungkooks-performance-at-fifa-world-cup-opening-wins-hearts-bts-army-react-101668958820485.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jungkook&#39;s performance at FIFA World Cup opening wins hearts ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS5CtW-YS4wo6Q1RMH9dmcC6ko6ekwhVlgwhcve9kYc7eTfi1L97Ldt0_oWC_Xk6e-ZEQ0dzP73" alt="Jungkook&#39;s performance at FIFA World Cup opening wins hearts ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BTS member Jungkook performed at the FIFA World Cup opening ceremony on Sunday evening, winning fans&#39; hearts with his performance.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/fifa-world-cup/news/fifa-world-cup-bts-army-jungkook-song-release-for-qatar-2022-soccer-wc-official-track-opening-ceremony/article66160661.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup: BTS singer Jungkook releases &#39;Dreamers&#39; for Qatar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7gThF_7JScBrm66nKTaUjx4g9UYnybvi5hh-v5bAZAPFCKtByGj768U2m3CtcWMtI402ZLemD" alt="FIFA World Cup: BTS singer Jungkook releases &#39;Dreamers&#39; for Qatar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Cups have been marked with landmark tracks such as the Wavin Flag and Waka Waka in 2010 to the Cup of Life in 1998 and this track will be another&nbsp;...</p></div>
            </div>
        </a><a href='https://stylecaster.com/jung-kook-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How To Watch BTS&#39;s Jung Kook Perform at the World Cup Qatar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS59JyE1cFG4n0StjS9aLG-9_1Xwi3YBICnpffD-kAKJna_SsKiWVTUpp3oIofZ5XQ6ZFjrOcz5" alt="How To Watch BTS&#39;s Jung Kook Perform at the World Cup Qatar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here&#39;s how to watch BTS&#39;s Jung Kook perform at the Qatar World Cup Opening Ceremony 2022 live online for free.</p></div>
            </div>
        </a><a href='https://www.soompi.com/article/1555146wpp/btss-jungkook-sweeps-itunes-charts-sets-new-u-s-record-with-his-world-cup-song-dreamers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTS&#39;s Jungkook Sweeps iTunes Charts + Sets New U.S. Record ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROLWLX_0HpAM00a8DY-cioHDfB_amy9ePTNd0dRWctuxIXIgvXiqtjTsRCvg7XqRPS4KbigKG5" alt="BTS&#39;s Jungkook Sweeps iTunes Charts + Sets New U.S. Record ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BTS&#39;s Jungkook is dominating iTunes charts across the globe with his official song for the FIFA World Cup 2022! On November 20 at 2 p.m. KST,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanityfair.com/hollywood/2022/11/morgan-freeman-and-btss-jung-kook-help-kick-off-controversial-world-cup-in-qatar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morgan Freeman and BTS&#39;s Jung Kook Help Kick Off Controversial ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR8PuCAQZws6FdD6uvZWQeKjPQWdUDCWRtSUfrnY_ZSkuj1E6pkN048IjehDZGXuZ_SqmMLZLJj" alt="Morgan Freeman and BTS&#39;s Jung Kook Help Kick Off Controversial ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sunday marks the first day of matches in the 22nd FIFA World Cup. (Even if you are not a soccer fan, surely you are familiar with the FIFA organization,&nbsp;...</p></div>
            </div>
        </a><a href='https://deadline.com/2022/11/world-cup-morgan-freeman-bts-jung-kook-opening-ceremony-qatar-1235177856/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morgan Freeman &amp; BTS&#39; Jung Kook Take Center Stage At World ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTLo8YKOqyuV5zNaszc8YO7s3YdSjPQ6EeC3BBHeb-ualVc_x_XG8zcj_22FR_esqPs7WKJ2spt" alt="Morgan Freeman &amp; BTS&#39; Jung Kook Take Center Stage At World ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A pageant of song, dance, and a few superstars, the kick-off of FIFA&#39;s big tournament intended to send a lot of messages.</p></div>
            </div>
        </a>
        </Template></>;
}