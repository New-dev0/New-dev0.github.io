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
        </a><a href='https://www.soompi.com/article/1555138wpp/bts-becomes-1st-artist-to-win-american-music-award-for-favorite-pop-duo-group-4-times'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTS Becomes 1st Artist To Win American Music Award For Favorite ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTeuBm9vlL7c-yBDna78gm6i8oZkDWNbB0DXVwE5I-HpJH9U6LUv5O8g35tWHwbc00fhh9CcZAH" alt="BTS Becomes 1st Artist To Win American Music Award For Favorite ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BTS has just made history at the 2022 American Music Awards (AMAs)! On November 20 local time, the American Music Awards announced some of this year&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.allkpop.com/article/2022/11/bts-jungkook-hits-1-on-itunes-charts-in-102-countries-with-his-fifa-world-cup-song-dreamers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTS&#39; Jungkook hits #1 on iTunes charts in 102 countries with his ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzn6HcjvUoopxSpNGtkeDzEsu21CNGb1oFINj-PFf59LzV67p9GKsw-5CTaXXuy5qOQiEi70Jc" alt="BTS&#39; Jungkook hits #1 on iTunes charts in 102 countries with his ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BTS member Jungkook dominated the iTunes charts worldwide with this latest song, signaling his world dominance!Shortly after releasing Jun…</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/magazines/panache/jungkook-performs-at-fifa-world-cup-2022-bts-members-rm-v-j-hope-suga-cheer-for-singer/articleshow/95654314.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jungkook performs at FIFA World Cup 2022, BTS members RM, V, J ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSc0wEa-MplnIWEuPvcprkmGJYN7Mol-wmbYjAUSC8f8R--w8XqyeM0xSiUYQrnO7o81OKJSx31" alt="Jungkook performs at FIFA World Cup 2022, BTS members RM, V, J ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 25-year-old singer from BTS performed &#39;Dreamers&#39; in front of millions of fans in Qatar on Sunday.</p></div>
            </div>
        </a><a href='https://www.allkpop.com/article/2022/11/bts-takes-home-the-favorite-pop-duo-or-group-award-for-the-fourth-consecutive-year-at-the-american-music-awards'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTS takes home the &#39;Favorite Pop Duo or Group&#39; award for the fourth ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ0LgXUcbV4YOQGEwoZA-gejX8zu0bRFcnsVR671WYuIn81y3zRTDLiw01DIs4W_I8gDILVI_Jn" alt="BTS takes home the &#39;Favorite Pop Duo or Group&#39; award for the fourth ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The year-end award shows are always thrilling events. Many artists gathered at this year&#39;s American Music Awards&amp;…</p></div>
            </div>
        </a><a href='https://hitsdailydouble.com/news&id=333840&title=BTS-JUNG-KOOK-AND-RedOne-CONNECT-FOR-GLOBAL-GOAL'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTS&#39; Jung Kook, with an assist from hit producer RedOne, has ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS3cnQQFm9VXX7_tI2FygZHsDuco1B53qyOmYrPwnfIba7Lys_tESV9bK0XUlVo40aZsefwPMyI" alt="BTS&#39; Jung Kook, with an assist from hit producer RedOne, has ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BTS&#39; Jung Kook, with an assist from hit producer RedOne, has scored a goal with &quot;Dreamers,&quot; the official single of the World Cup opening ceremony.</p></div>
            </div>
        </a><a href='https://www.allkpop.com/article/2022/11/btss-dynamite-mv-surpasses-16-billion-views-on-youtube'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTS&#39;s &#39;Dynamite&#39; MV surpasses 1.6 billion views on YouTube</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNeJ5F_wPLYrt2hTMIvo13lkwg-OQ2BpZCbCL3Dbl5b-d1rVxgha3hhhX_DhBVcwKQEcA_MmFo" alt="BTS&#39;s &#39;Dynamite&#39; MV surpasses 1.6 billion views on YouTube" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BTS&#39;s &quot;Dynamite&quot; music video surpassed 1.6 billion views on YouTube.On November 22 KST at around 4:26AM KST, BTS&#39;s music video for their tr…</p></div>
            </div>
        </a><a href='https://news.yahoo.com/bts-jungkook-performs-2022-world-224957585.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTS&#39; Jungkook performs at 2022 World Cup opening ceremony</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR3zSpMYLvr0FXDnn8h0RaondhoHocU6dnpDCyC8zhH7Caazhved-ZBZ12nbUsyGwrtMeqoYKqB" alt="BTS&#39; Jungkook performs at 2022 World Cup opening ceremony" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BTS&#39; Jungkook performed his newly released track “Dreamers” as part of the opening ceremony of the 2022 FIFA World Cup in Qatar over the weekend.</p></div>
            </div>
        </a><a href='https://www.usatoday.com/picture-gallery/entertainment/2022/11/19/jung-kook-bts/10740083002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTS member Jungkook performs at the World Cup: See the photos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTzKz7CpvSzWb7enN6mgRxENHWvr3rdyGa7evfjckpmyw7FCeYAbCuOVKHF0kavnmTZuzEtTh5w" alt="BTS member Jungkook performs at the World Cup: See the photos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jungkook of BTS performed at the opening ceremony of the 2022 World Cup, debuting his new song &quot;Dreamers.&quot; See the photos and look back at his career.</p></div>
            </div>
        </a><a href='https://www.allkpop.com/article/2022/11/an-sbs-production-team-member-is-surprised-at-btss-global-popularity-once-again-after-an-unexpected-interview-with-a-restaurant-worker-in-qatar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>An SBS production team member is surprised at BTS&#39;s global ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQaPXk3Sg3m7gNLDyagBnsZw_64g6Kmrq_Tu9WfOBZijvQG6g6lgbh99tL9wIHHpoOVLq4S1_aP" alt="An SBS production team member is surprised at BTS&#39;s global ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A SBS production team member became surprised at BTS&#39;s global popularity once again after an unexpected interview with a restaurant worker in Qatar.</p></div>
            </div>
        </a>
        </Template></>;
}