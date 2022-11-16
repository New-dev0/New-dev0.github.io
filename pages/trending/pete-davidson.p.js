import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pete Davidson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pete Davidson"/>
        <meta name="description" content="Trending News about Pete Davidson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pete Davidson</h1>
            <Image width={800} height={500} src="https://swaddle-wkwcb6s.stackpathdns.com/wp-content/uploads/2022/11/Pete-Davidson-Editorial.jpg" alt="Pete Davidson"/>
            <h3>Recent News</h3>
            <a href='https://theswaddle.com/theres-a-misogynistic-undercurrent-to-the-pete-davidson-memes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>There&#39;s a Misogynistic Undercurrent to the Pete Davidson Memes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTPEd6UgSWqwYo_d6sfnkSfWTb-JW8oB9IL608xfCEAeT9I_xfmM_2Zw0zqkY3dhug66BszH9vF" alt="There&#39;s a Misogynistic Undercurrent to the Pete Davidson Memes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When news of Pete Davidson reportedly dating Emily Ratajkowski broke online, Davidson&#39;s name began to trend on Twitter almost on cue. The jokes and memes&nbsp;...</p></div>
            </div>
        </a><a href='https://www.capitalfm.com/news/pete-davidson-emily-ratajkowski-dating/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Are Pete Davidson and Emily Ratajkowski dating?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRFh9TdcTOygim0uphPb1ydjylitOX80jjZhORQpp4kfbGxdLidn3XrE_i6tUmaSBfpF3mb-Rrw" alt="Are Pete Davidson and Emily Ratajkowski dating?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pete Davidson has reportedly moved on from his split with Kim Kardashian after he was seen on a date with Emily Ratajkowski.</p></div>
            </div>
        </a><a href='https://english.jagran.com/entertainment/news/is-pete-davidson-dating-emily-ratajkowski-after-breakup-with-kim-kardashian-details-inside-10054415'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is Pete Davidson Dating Emily Ratajkowski After Breakup With Kim ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfEeBwqSttzIsUGziLX_zW2ksCduc-r6wqOaDwdDMxUlN7Er9iQy2GxQerivAJFJc8eoJ3dL8JIg" alt="Is Pete Davidson Dating Emily Ratajkowski After Breakup With Kim ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Comedian Pete Davidson, who recently parted ways with American socialite Kim Kardashian, is reportedly dating model and actress Emily Ratajkowski.</p></div>
            </div>
        </a><a href='https://pagesix.com/2022/11/15/emily-ratajkowski-likes-tweet-about-dating-pete-davidson/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emily Ratajkowski likes tweet about &#39;dating Pete Davidson&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQl_yRXI7Sg9I2g3xO0QuNu8JSpBky1WOqtdW1avST6O9gz9gHwinnYvmxEJV_b9IGaLG08yZaO" alt="Emily Ratajkowski likes tweet about &#39;dating Pete Davidson&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Model Emily Ratajkowski sent a subtle message via Twitter about “dating Pete Davidson” amid reports that she and comedian Pete Davidson are an item.</p></div>
            </div>
        </a><a href='https://www.koimoi.com/hollywood-news/emily-rajatkowski-pete-davidson-dating-each-other-shortly-after-high-profile-brad-pitt-kim-kardashian-splits-heres-all-we-know/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emily Rajatkowski &amp; Pete Davidson Dating Each Other Shortly After ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRVFx0N-2_1Qfe2crIMcVAtms3IHWhp4-lMuxOZoZZ2AOxPl4omvEuNPR9mlFwKsWd-ybKlRcW" alt="Emily Rajatkowski &amp; Pete Davidson Dating Each Other Shortly After ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to recent reports, Emily Ratajkowski has been dating Kim Kardashian&#39;s ex, Pete Davidson. Read on to know more.</p></div>
            </div>
        </a>
        </Template></>;
}