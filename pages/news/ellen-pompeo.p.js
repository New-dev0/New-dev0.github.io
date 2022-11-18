import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ellen Pompeo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ellen Pompeo"/>
        <meta name="description" content="Trending News about Ellen Pompeo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ellen Pompeo</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221117142526-ellen-pompeo-greys-anatomy.jpg?c=16x9&q=w_800,c_fill" alt="Ellen Pompeo"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/17/entertainment/ellen-pompeo-greys-anatomy/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ellen Pompeo prepares for Meredith&#39;s farewell with note to &#39;Grey&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSLpCXDbOI9q3PK5PvyYDXWq3R-cjOVHNRsg2UtV5vT36oYrBpT8R_Axj1G7ZKtzrF8IokGbyZN" alt="Ellen Pompeo prepares for Meredith&#39;s farewell with note to &#39;Grey&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meredith Grey is saying goodbye to Grey Sloan Memorial Hospital when &quot;Grey&#39;s Anatomy&quot; returns in February, but Ellen Pompeo has started the farewell parade.</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/11/17/ellen-pompeo-leaving-greys-anatomy-says-goodbye/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ellen Pompeo Says Goodbye To &#39;Grey&#39;s Anatomy&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTm6g8pEFq0CNnMGJJmYCTZrnnQ8iKw7v3Au2L68Xy8gGOrXPyAyTBqcWmwQx-Xi4BbYXyOIAyh" alt="Ellen Pompeo Says Goodbye To &#39;Grey&#39;s Anatomy&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ellen Pompeo is officially bidding farewell to &quot;Grey&#39;s Anatomy&quot; ... the series lead just said goodbye after reports of her leaving the long-running drama.</p></div>
            </div>
        </a><a href='https://deadline.com/2022/11/greys-anatomy-ellen-pompeo-reassures-fans-shell-be-back-ahead-of-exit-full-time-cast-member-1235175603/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Grey&#39;s Anatomy&#39;: Ellen Pompeo Reassures Fans She&#39;ll Be Back ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQUMhIYf-WxU1hW5FE_tn5lqmWSVFr-6dVdf1Nit8hwOWffXTyXw-hz6STQi-dwf8oMPmbi6bQd" alt="&#39;Grey&#39;s Anatomy&#39;: Ellen Pompeo Reassures Fans She&#39;ll Be Back ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pompeo said she is “eternally grateful and humbled by the love and support” fans have shown for her and her character Meredith Grey for 19 seasons. “You know&nbsp;...</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/entertainment/tv/2022/11/17/greys-anatomy-ellen-pompeo-addresses-departure-meredith-grey/10722105002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Grey&#39;s Anatomy&#39; without Dr. Grey? Ellen Pompeo bids farewell to the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQARIw_YqOtXatPKazknEYC0jzhwictHMR8nNyuLvSObpHHd3vIQq0I1CuhTVPq3WDA160p9lz9" alt="&#39;Grey&#39;s Anatomy&#39; without Dr. Grey? Ellen Pompeo bids farewell to the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ellen Pompeo appears in only eight episodes this season but will remain as executive producer and offer her iconic voiceover narrations every episode.</p></div>
            </div>
        </a><a href='https://www.today.com/popculture/tv/ellen-pompeo-comments-departure-greys-anatomy-rcna57750'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ellen Pompeo comments on departure from &#39;Grey&#39;s Anatomy&#39; in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQaxqph5aGOmmt2vNIxXkbWyJyBpDHQHDTxgtc2fr9lFA7l_JUI1VqLn11V4YAc-NLHRCkpyTNl" alt="Ellen Pompeo comments on departure from &#39;Grey&#39;s Anatomy&#39; in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For 19 seasons, viewers have tuned in to episodes of “Grey&#39;s Anatomy” expecting to see Meredith Grey attempt to balance her work and personal lives,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yahoo.com/entertainment/ellen-pompeo-immense-gratitude-greys-210940312.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ellen Pompeo Has &#39;Immense Gratitude&#39; for Grey&#39;s Anatomy Fans as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2kNIrOn_IVg65p6GzbfbJT7uI59EAJdO9ZA202OTEs-gfu-2KiKxofGVkmqLUglCABLvWgU6u" alt="Ellen Pompeo Has &#39;Immense Gratitude&#39; for Grey&#39;s Anatomy Fans as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meredith Grey is leaving Seattle for Boston — but it may not be the last of Ellen Pompeo on Grey&#39;s Anatomy.</p></div>
            </div>
        </a><a href='https://www.digitalspy.com/tv/ustv/a41996547/ellen-pompeo-greys-anatomy-goodbye-message/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ellen Pompeo releases Grey&#39;s Anatomy goodbye message</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2jRL_PyTxXNlMlGy3gfBhtlYMlStGWeZ-_G-ATQlKnxhcqnItc4clp8vjMsJJSx7SpWC4SC0M" alt="Ellen Pompeo releases Grey&#39;s Anatomy goodbye message" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ellen Pompeo has released a goodbye message ahead of her on-screen departure in Grey&#39;s Anatomy.</p></div>
            </div>
        </a>
        </Template></>;
}