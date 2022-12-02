import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Willow</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Willow"/>
        <meta name="description" content="Trending News about Willow" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Willow</h1>
            <Image width={800} height={500} src="https://images1.livehindustan.com/uploadimage/library/2022/12/01/16_9/16_9_1/disney_plus_hotstar_willow_review_starring_ruby_cruz_ellie_bamber_erin_kellyman_tony_revolori_warwic_1669896703.jpg" alt="Willow"/>
            <h3>Recent News</h3>
            <a href='https://www.livehindustan.com/entertainment/film-review/story-disney-plus-hotstar-willow-review-starring-ruby-cruz-ellie-bamber-erin-kellyman-tony-revolori-warwick-davis-amar-chadha-patel-7429895.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Willow Review: धीरे- धीरे रफ्तार पकड़ती है &#39;विलो&#39;, हर एपिसोड के बाद बढ़ती ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwwoY4IAEHvTtPbNCEfUiKXGnk98dO4E1ZktDkoBwyYC2bmJKr5VkbLr2xmV1UIycdRE0iq4Gz" alt="Willow Review: धीरे- धीरे रफ्तार पकड़ती है &#39;विलो&#39;, हर एपिसोड के बाद बढ़ती ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>विलो ऐसी सीरीज है जिसकी शुरुआत भले ही धीमी हुई है, लेकिन धीरे धीरे ये रफ्तार पकड़ता है&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}